import Home from "./routes/Home.svelte";
import Projects from "./routes/Projects.svelte";
import NotFound from "./routes/NotFound.svelte";

export default {
	'/': Home,
	'/#about': Home,
	'/#projects': Home,
	'/#contact': Home,
	'/projects': Projects,
	'/*': NotFound
}
