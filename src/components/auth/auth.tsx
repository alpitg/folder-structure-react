import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ROUTE_URL } from './constants/routes.const';
import './auth.scss';

/**
 * Check the user is authorised or not.
 * @returns 
 */
const AuthApp = (props: any) => {
    const isAuth: boolean = true;
    const navigate = useNavigate();
    const [isResolved, setIsResolved] = useState<boolean>(false);

    useEffect(() => {
        if (!isAuth) {
            navigate(ROUTE_URL.LOGIN);
        }
        setIsResolved(true);
    }, []);

    return isResolved && props.children;
}

export default AuthApp;


