import { createBrowserRouter } from "react-router-dom";
import Layouts from "./pages/Layouts";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import { ErrorPage } from "./pages/ErrorPage";

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        errorElement  : <ErrorPage />,
        children: [
            {
                index: true, element: <HomePage />
            },
            {
                path: 'games/:slug', element: <GameDetailPage /> 
            }
        ]
    }

])
export default router   