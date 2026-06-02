import { Route, Routes } from "react-router"
import { HomePage } from "../../pages/HomePage/HomePage"
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage"
import { CoursePage } from "../../pages/CoursePage/CoursePage";
import { CreateCoursePage } from "../../pages/CreateCoursePage/CreateCoursePage";
import { NotesPage } from "../../pages/NotesPage/NotesPage";

const AppRoutes = () => {
    const navigationRoutes = [
        {path: "/", element: <HomePage/>},
        {path: "/courses/:type/:id", element: <CoursePage />},
        {path: "/profile/", element: <ProfilePage/>},
        {path: "/notes", element: <NotesPage />},
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