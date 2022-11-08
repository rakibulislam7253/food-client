import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../page/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           
        ]
    }
])
export default router;