import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

// route takes in props to confirm user authentication method; this wraps the auth method found in authenticate.js

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticate() === true ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};
export default PrivateRoute;
