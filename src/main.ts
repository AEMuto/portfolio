import App from './App.svelte'
import '../node_modules/normalize.css/normalize.css'
import './assets/scss/global.scss'

const app = new App({
  target: document.getElementsByTagName('body')[0]
})

export default app
