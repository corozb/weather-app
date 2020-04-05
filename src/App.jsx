import React from 'react';
import Logo from './components/Logo/Logo';
import Forecast from './components/Forecast/Forecast';

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<Logo />
				<h1>React Weather App</h1>
			</header>
			<main>
				<Forecast />
			</main>
			<footer>Page created by Creaa</footer>
		</div>
	);
};

export default App;
