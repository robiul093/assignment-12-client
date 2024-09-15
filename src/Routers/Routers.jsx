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
import Profile from "../Pages/Dashbord/Profile";
import AdminRoute from "../PrivateRoute/AdminRoute";
import SurveyorRoute from "../PrivateRoute/SurveyorRoute";


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
    path: "dashboard",
    element: <Dashbord></Dashbord>,
    children: [

      {
        path: "/dashboard",
        element: <Profile></Profile>
      },

      // admin routs

      {
        path: "admin/users",
        element: <AdminRoute>
                    <ManageUsers></ManageUsers>
                </AdminRoute>,
      },

      {
        path: "admin/surveys",
        element: <AdminRoute>
                    <ManageSurveyStatus></ManageSurveyStatus>
                </AdminRoute>
      },

      // surveyor routes
      {
        path: "surveyor/create",
        element: <SurveyorRoute>
                      <CreateSurvey></CreateSurvey>
                  </SurveyorRoute>
      },
      {
        path: "surveyUpdate",
        element: <SurveyorRoute>
                      <SurveyUpdate></SurveyUpdate>,
        </SurveyorRoute>
      },
      {
        path: "surveyor/update/:id",
        element: <SurveyorRoute>
                    <UpdateForm></UpdateForm>
        </SurveyorRoute>
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