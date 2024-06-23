import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login"
import Dashbord from "../Layout/Dashbord/Dashbord";
import CreateSurvey from "../Pages/Dashbord/CreateSurvey";
import SurveyUpdate from "../Pages/Dashbord/SurveyUpdate";
import UpdateForm from "../Pages/Dashbord/UpdateForm";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        }
      ]
    },

    {
      path: "dashbord",
      element: <Dashbord></Dashbord>,
      children: [

        {
          path: "createSurvey",
          element: <CreateSurvey></CreateSurvey>
        },
        {
          path: "surveyUpdate",
          element: <SurveyUpdate></SurveyUpdate>,
        },
        {
          path: "surveyUpdate/updateForm/:id",
          element: <UpdateForm></UpdateForm>,
        }
      ]
    }
  ]);


const Routers = () => {
    return (
        <div>
                        
        </div>
    );
};

export default Routers;