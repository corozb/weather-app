import React from 'react';
import classes from './Conditions.module.css';

const Conditions = (props) => {
	return (
		<div className={classes.Wrapper}>
			{props.error && (
				<small className={classes.Small}>Please enter a valid city.</small>
			)}

			{props.loading && <div className={classes.Loader}>Loading...</div>}

			{props.search.cod === 200 ? (
				<div>
					<p>
						<strong>{props.search.name}</strong>
					</p>
					<p>
						It is currently {Math.round(props.search.main.temp)} degrees out
						with {props.search.weather[0].description}.
					</p>
				</div>
			) : null}
		</div>
	);
};

export default Conditions;
