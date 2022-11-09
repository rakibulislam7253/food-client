import Main from "../layout/Main";
import Blog from "../page/Blog/Blog";
import Services from "../page/Home/Services";
import Login from "../page/Login/Login";
import Review from "../page/review/Review";
import SignUp from "../page/SignUp/SignUp";
import Privaterouter from "./privaterouter/Privaterouter";

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
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
              },
              {
                path: '/signup',
                element: <SignUp></SignUp>
              },
              {
                path: '/blog',
                element: <Privaterouter> <Blog></Blog> </Privaterouter> 
              },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
            },
           
        ]
    }
])
export default router;