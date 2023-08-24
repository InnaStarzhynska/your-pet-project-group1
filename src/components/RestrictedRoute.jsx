import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectLoggedIn } from "redux/selectors"

export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(selectLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />
}