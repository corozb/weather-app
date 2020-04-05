import React, { useState } from 'react';

const Forecast = () => {
	let [responseObj, setResponseObj] = useState({});

	function getForescast() {
		const API_KEY = '525832fa65bb21b21a82519d028a5aac';
		const city = 'medellin';
		const URL_API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
		fetch(URL_API)
			.then((response) => response.json())
			.then((response) => {
				setResponseObj(response);
			});
	}

	return (
		<div>
			<h2>Find Current Weather Conditions</h2>
			<div>{JSON.stringify(responseObj)}</div>
			<button onClick={getForescast}>Get Forecast</button>
		</div>
	);
};

export default Forecast;
