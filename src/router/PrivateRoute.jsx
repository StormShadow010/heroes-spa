import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute = ({ children }) => {

    const { pathname, search } = useLocation()

    const lastpath = pathname + search

    localStorage.setItem('lastpath', lastpath)

    const { logged } = useContext(AuthContext)
    return (logged) ? children : <Navigate to="/login" />
}
