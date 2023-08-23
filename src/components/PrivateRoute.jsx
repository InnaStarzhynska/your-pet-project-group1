import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectLoggedIn, selectRefreshing } from "redux/selectors"

export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const isRefreshing = useSelector(selectRefreshing);
    const shouldRedirect = !isRefreshing && !isLoggedIn;

    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />
}