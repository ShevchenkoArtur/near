import React, {FC, useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import Loading from '../UI/Loading';
import {Navigate} from 'react-router-dom';

interface PrivateRouteProps {
    redirectTo: string,
    children: React.ReactElement
}

const PrivateRoute: FC<PrivateRouteProps> = ({children, redirectTo}) => {
    const [isReady, setIsReady] = useState(false);
    const {contractData, isLoading} = useAppSelector(state => state.near);

    useEffect(() => {
        setIsReady(true);
    }, [contractData?.currentUser]);

    const render = () => {
        return contractData?.currentUser ? children : <Navigate to={redirectTo}/>
    }
    return (
        <>
            {isLoading && <Loading />}
            {isReady && render()}
        </>
    );
};

export default PrivateRoute;