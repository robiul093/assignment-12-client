import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-slate-400">
                <ul className="menu p-4 space-y-3">
                    <li className="bg-gray-400">
                        <NavLink to='/dashbord/createSurvey'>Create Survay</NavLink>
                    </li>

                    <li className="bg-gray-400">
                        <NavLink to='/dashbord/surveyUpdate'>Update Survey</NavLink>
                    </li>

                    <div className="divider">or</div>
                    {/* user nevigat */}
                    <li className="bg-gray-500 rounded-lg text-white">
                        <NavLink to='/'>Hmoe</NavLink>
                    </li>
                </ul>
            </div>

            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;