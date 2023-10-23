import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
	return (
	<Suspense fallback={<div>Loading...</div>}>

		<Routes>
			{Object.values(RouteConfig).map((element, path) => (
				<Route
					key={path}
					path={path.toString()}
					element={(
					<Suspense fallback={<div>Loading...</div>}>
						<div className="page-wrapper">
							{element}
						</div>
					</Suspense>
					)}

				/>
			))}
		</Routes>
	</Suspense>
	);
};

export default AppRouter;
