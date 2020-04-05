import React, { useState } from 'react';
import Conditions from './Conditions/Conditions';

const Forecast = () => {
	let [city, setCity] = useState('medellin');
	let [unit, setUnit] = useState('metric');
	let [query, setQuery] = useState({});

	const uriEncodeCity = encodeURIComponent(city);

	function getForescast() {
		const API_KEY = '525832fa65bb21b21a82519d028a5aac';
		// const city = 'medellin';
		const URL_API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;
		fetch(URL_API)
			.then((response) => response.json())
			.then((response) => {
				setQuery(response);
			});
	}

	return (
		<div>
			<h2>Find Current Weather Conditions</h2>
			<button onClick={getForescast}>Get Forecast</button>
			<Conditions search={query} />
		</div>
	);
};

export default Forecast;
