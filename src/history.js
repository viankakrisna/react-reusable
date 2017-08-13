import createHistory from "history/createBrowserHistory";
let history = {}
if (typeof window !== 'undefined') {
	history = createHistory();
}
export default history
