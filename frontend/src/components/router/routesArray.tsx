import CharityList from '../pages/CharityList';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';

export const routesArray = [
    {
        path: '/',
        element:
            <PrivateRoute redirectTo='/sign-in'>
                <CharityList/>
            </PrivateRoute>
    },
    {path: '/sign-in', element: <SignIn/>},
    {path: '*', element: <NotFound />}
];