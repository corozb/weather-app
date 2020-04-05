import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
	let [city, setCity] = useState('');
	let [unit, setUnit] = useState('metric');
	let [query, setQuery] = useState({});

	const uriEncodeCity = encodeURIComponent(city);

	function getForescast(e) {
		e.preventDefault();

		const API_KEY = '525832fa65bb21b21a82519d028a5aac';
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
			<form onSubmit={getForescast}>
				<input
					type='text'
					placeholder='Enter City'
					maxLength='50'
					className={classes.TextInput}
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<label className={classes.Radio}>
					<input
						type='radio'
						name='units'
						checked={unit == 'metric'}
						value='metric'
						onChange={(e) => setUnit(e.target.value)}
					/>
					Celsius
				</label>
				<label className={classes.Radio}>
					<input
						type='radio'
						name='units'
						checked={unit == 'imperial'}
						value='imperial'
						onChange={(e) => setUnit(e.target.value)}
					/>
					Fahrenheit
				</label>
				<button type='submit' className={classes.Button}>
					Get Forecast
				</button>
			</form>
			<Conditions search={query} />
		</div>
	);
};

export default Forecast;
