import Home from "./routes/Home.svelte";
import Projects from "./routes/Projects.svelte";
import NotFound from "./routes/NotFound.svelte";

export default {
	'/': Home,
	'/project/:id': Projects,
	'/*': NotFound
}
