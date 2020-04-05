import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
	let [city, setCity] = useState('');
	let [unit, setUnit] = useState('metric');
	let [query, setQuery] = useState({});
	let [error, setError] = useState(false);
	let [loading, setLoading] = useState(false);

	function getForescast(e) {
		e.preventDefault();

		if (city.length === 0) {
			setError(true);
		}

		// Clear state in preparation for new data
		setError(false);
		setQuery({});
		setLoading(true);

		const uriEncodeCity = encodeURIComponent(city);

		const URL_API = `http://api.openweathermap.org/data/2.5/weather?q=${uriEncodeCity}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`;

		fetch(URL_API)
			.then((response) => response.json())
			.then((response) => {
				if (response.cod !== 200) {
					throw new Error();
				}

				setQuery(response);
				setLoading(false);
			})
			.catch((err) => {
				setError(true);
				setLoading(false);
				console.log(err.message);
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
						checked={unit === 'metric'}
						value='metric'
						onChange={(e) => setUnit(e.target.value)}
					/>
					Celsius
				</label>
				<label className={classes.Radio}>
					<input
						type='radio'
						name='units'
						checked={unit === 'imperial'}
						value='imperial'
						onChange={(e) => setUnit(e.target.value)}
					/>
					Fahrenheit
				</label>
				<button type='submit' className={classes.Button}>
					Get Forecast
				</button>
			</form>
			<Conditions search={query} error={error} loading={loading} />
		</div>
	);
};

export default Forecast;
