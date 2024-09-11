import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login"
import Dashbord from "../Layout/Dashbord/Dashbord";
import CreateSurvey from "../Pages/Dashbord/CreateSurvey";
import SurveyUpdate from "../Pages/Dashbord/SurveyUpdate";
import UpdateForm from "../Pages/Dashbord/UpdateForm";
import ManageUsers from "../Pages/Dashbord/ManageUsers";
import AllSurvey from "../Pages/AllSurvey";
import SurveyDetails from "../Pages/SurveyDetails";
import ManageSurveyStatus from "../Pages/Dashbord/ManageSurveyStatus";
import DetailsExplore from "../Pages/DetailsExplore";
import Payment from "../Pages/Payment";


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
          path: "/allSurvey",
          element: <AllSurvey></AllSurvey>
        },
        {
          path: "/surveyDetails",
          element: <SurveyDetails></SurveyDetails>
        },
        {
          path: "/surveyDetailsExplore/:id",
          element: <DetailsExplore></DetailsExplore>
        },
        {
          path: "/payment",
          element: <Payment></Payment>,
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

        // admin routs
        
        {
          path: "admin/users",
          element: <ManageUsers></ManageUsers>
        },
        
        {
          path: "admin/users/surveys",
          element: <ManageSurveyStatus></ManageSurveyStatus>
        },
        
        // surveyor routes
        {
          path: "createSurvey",
          element: <CreateSurvey></CreateSurvey>
        },
        {
          path: "surveyUpdate",
          element: <SurveyUpdate></SurveyUpdate>,
        },
        {
          path: "surveyor/updateForm/:id",
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