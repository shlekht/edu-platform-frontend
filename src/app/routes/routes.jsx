import { Route, Routes } from "react-router"
import { HomePage } from "../../pages/HomePage/HomePage"
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage"
import { CoursePage } from "../../pages/CoursePage/CoursePage";
import { CreateCoursePage } from "../../pages/CreateCoursePage/CreateCoursePage";

const AppRoutes = () => {
    const navigationRoutes = [
        {path: "/", element: <HomePage/>},
        {path: "/courses/:id", element: <CoursePage />},
        {path: "/profile/:id", element: <ProfilePage/>},
        {path: "/create-course", element: <CreateCoursePage/>},
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