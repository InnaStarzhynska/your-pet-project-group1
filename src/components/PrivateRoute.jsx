import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectLoadingUser, selectLoggedIn } from "redux/selectors"

export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const isLoading = useSelector(selectLoadingUser);
    const shouldRedirect = !isLoading && !isLoggedIn;

    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />
}