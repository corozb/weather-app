import React from 'react';

const Conditions = (props) => {
	return (
		<div>
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
