import React from 'react';
import {useRoutes} from 'react-router-dom';
import {routesArray} from './routesArray';

const Router = () => {
    const routes = useRoutes(routesArray);
    return <>{routes}</>;
};

export default Router;