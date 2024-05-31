import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);


const Routers = () => {
    return (
        <div>
                        
        </div>
    );
};

export default Routers;