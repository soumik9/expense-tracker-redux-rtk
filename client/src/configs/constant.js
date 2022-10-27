import App from '../App';
import Login from '../pages/Auth/Login/Login';
import Signup from '../pages/Auth/Signup/Signup';

export const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "signup",
        element: <Signup />,
    },
];