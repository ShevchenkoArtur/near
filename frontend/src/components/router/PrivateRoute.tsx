import React, {FC} from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    redirectTo: string;
    children: React.ReactElement;
}

const PrivateRoute: FC<PrivateRouteProps> = ({children, redirectTo}) => {
    return (
        localStorage.getItem('near-app_wallet_auth_key') ? children : <Navigate to={redirectTo} />
    );
};

export default PrivateRoute;
