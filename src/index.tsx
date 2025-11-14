import { render } from 'preact';

import './index.css';
import { Login } from './Login';
import { Main } from './Main';
import { useEffect, useState } from 'preact/hooks';
import { chatService } from './ChatService';
import "./Pwa"

function App() {
	Notification.requestPermission()

	// let [loggedIn, setLoggedIn] = useState(false);
	let [renderCount, setRenderCount] = useState(1);
	console.log("App render count: " + renderCount)
	useEffect(() => {
		// const listener = () => setLoggedIn(!!chatService.inbox);
		const listener = () => setRenderCount(x => x + 1);
		chatService.addListener(listener);
		return () => chatService.removeListener(listener);
	}, []);
	// return loggedIn ? <Main/> : <Login/>
	return chatService.inbox ? <Main/> : <Login/>
}

render(<App />, document.getElementById('app'));

if (localStorage["theme"] === "light") {
	toggleTheme();
}

export function toggleTheme() {
	document.documentElement.classList.toggle("theme-light");
	localStorage["theme"] = document.documentElement.classList.contains("theme-light") ? "light" : "dark";
}
