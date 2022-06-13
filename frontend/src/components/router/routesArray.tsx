import Posts from '../pages/Posts';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import NewPost from '../pages/NewPost';
import DonationHistory from '../pages/DonationHistory';
import Profile from '../pages/Profile';

export const routesArray = [
    {
        path: '/',
        element:
            <PrivateRoute redirectTo='/sign-in'>
                <Posts/>
            </PrivateRoute>,
    },
    {
        path: '/profile/:id',
        element:
            <PrivateRoute redirectTo='/sign-in'>
                <Profile/>
            </PrivateRoute>
    },
    {
        path: '/history/:id',
        element:
            <PrivateRoute redirectTo='/sign-in'>
                <DonationHistory/>
            </PrivateRoute>
    },
    {
        path: '/new',
        element:
            <PrivateRoute redirectTo='/sign-in'>
                <NewPost/>
            </PrivateRoute>
    },
    {path: '/sign-in', element: <SignIn/>},
    {path: '*', element: <NotFound />}
];