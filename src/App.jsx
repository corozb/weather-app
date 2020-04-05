import React from 'react';
import Forecast from './components/Forecast';

const App = () => {
	return (
		<div className='App'>
			<h1>Weather App</h1>
			<main>
				<Forecast />
			</main>
			<footer>Page created by Creea</footer>
		</div>
	);
};

export default App;
