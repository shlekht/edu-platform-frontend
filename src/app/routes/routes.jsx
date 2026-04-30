import { Route, Routes } from "react-router"
import { HomePage } from "../../pages/HomePage/HomePage"
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage"
import { CoursePage } from "../../pages/CoursePage/CoursePage";

const AppRoutes = () => {
    const navigationRoutes = [
        {path: "/", element: <HomePage/>},
        {path: "/courses/:id", element: <CoursePage />},
        {path: "/profile/:id", element: <ProfilePage/>},
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