<script lang="ts">
	import {link} from "svelte-spa-router";
	import Subtitle from './Subtitle.svelte';
	
	export let title = "Projet";
	export let text = "Lorem Ispum Dolor Sit Amet Consectetur Adipiscing Elit";
	export let img = "https://picsum.photos/200/300";
	export let id;
</script>

<div class="project__card">
	<a href={`/project/${id}`} use:link title={`Projet ${title}`} class="project__card__img-container">
		<img src={img} alt={`Projet ${title}`}>
	</a>
	<div class="project__card__txt-container">
		<a href={`/project/${id}`} use:link title={`Projet ${title}`} class="project__card__title">
			<Subtitle margin="0">{title}</Subtitle>
		</a>
		<p class="project__card__txt">{text}</p>
		<a href={`/project/${id}`} use:link class="project__card__cta"
		   title={`Projet ${title}`}>
			Voir le projet
			<span class="arrow">&#x2192;</span>
		</a>
	</div>
</div>

<style lang="scss">
	$border-width: .5rem;
	$corner-size: 3rem;
	$dur: .3s;
	.project__card {
		height: 100%;
		background-color: var(--color__body--brighter);
		position: relative;
		overflow: hidden;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		box-shadow: 10px -10px 0px 0px var(--color__body--darker);
		transition: all $dur;
		
		&:hover {
			&:active {
				box-shadow: 15px -15px 0px 0px var(--color__body--darker);
			}
			
			.project__card__img-container {
				border-color: var(--color__accent);
				
				&::before {
					transform: translateX(-50%) scaleX(0);
				}
				
				&::after {
					transform: translateY(-50%) scaleY(0);
				}
			}
			
			.project__card__cta {
				.arrow {
					transform: translateX(.7rem);
				}
				
				&::before {
					transform: scaleX(1.05);
				}
			}
		}
		
		&__img-container {
			display: grid;
			place-items: center;
			background-color: transparent;
			padding: 2rem;
			position: relative;
			z-index: 2;
			border: $border-width solid var(--color__primary);
			transition: border $dur;
			
			&::before, &::after {
				content: '';
				position: absolute;
				background-color: var(--color__body--brighter);
				z-index: -1;
				transition: all $dur ease-in-out;
			}
			
			//the 101% is because of a pixel rounding issue in firefox
			&::before {
				width: calc(100% - #{$corner-size});
				height: calc(100% + #{$border-width * 2});
				top: -$border-width;
				left: 50%;
				transform: translateX(-50%) scaleX(1);
			}
			
			&::after {
				height: calc(100% - #{$corner-size});
				width: calc(101% + #{$border-width * 2});
				left: -$border-width;
				top: 50%;
				transform: translateY(-50%) scaleY(1);
			}
			
			img {
				width: 100%;
				height: auto;
				
				filter: drop-shadow(8px 6px 8px var(--color__body--darker));
			}
		}
		
		&__txt-container {
			padding: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			
			a {
				align-self: start;
			}
		}
		
		&__txt {
			margin: 2rem 0;
		}
		
		&__cta {
			font-family: "acumin-pro-wide", sans-serif;
			font-size: 1.5rem;
			text-transform: uppercase;
			position: relative;
			
			&:hover {
				color: var(--color__primary);
			}
			
			.arrow {
				display: inline-block;
				transition: transform $dur;
			}
			
			&::before {
				content: '';
				position: absolute;
				bottom: calc(($border-width * -1) - .3rem);
				width: 100%;
				transform-origin: left center;
				transform: scaleX(0);
				height: $border-width;
				background-color: var(--color__accent);
				transition: all $dur;
			}
		}
	}
</style>
