import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <LoginPage />,
        action: LoginPage.action,
    }
])

console.log(LoginPage.action)
export default function Routes() {
    return <RouterProvider router={router} />
}
