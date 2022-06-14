import React, {FC, useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';

interface PrivateRouteProps {
    redirectTo: string,
    children: React.ReactElement
}

const PrivateRoute: FC<PrivateRouteProps> = ({children, redirectTo}) => {
    const [isReady, setIsReady] = useState(false);

    // check if accountId changed
    useEffect(() => {
        setIsReady(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.walletConnection.getAccountId()]);

    const render = () => {
        // if account id not falsy, render children, otherwise redirect
        return window.walletConnection.getAccountId() ? children : <Navigate to={redirectTo}/>
    }

    return (
        <>
            {isReady && render()}
        </>
    );
};

export default PrivateRoute;