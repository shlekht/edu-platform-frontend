import { Route, Routes } from "react-router"
import { HomePage } from "../../pages/HomePage/HomePage"

const AppRoutes = () => {
    const navigationRoutes = [
        {path: "/", element: <HomePage/>},
        {path: "/course", element: <div> Course page </div>},
        //{path: "/profile", element: </>},
        //{path: "/", element: <HomePage/>},
        {path: "*", element: <div> Page not found. </div>},


    ]

    return (
        <Routes> 
            { navigationRoutes.map((route) => (
                <Route key = {route.path} path = {route.path} element = {route.element} />
                ))}
        </Routes>
    )
}

export default AppRoutes