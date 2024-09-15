import { NavLink, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Dashbord = () => {

    const { user } = useContext(AuthContext);
    const { data: dbUser } = useUser();
    const isExistDbUser = dbUser?.find(item => item?.email === user?.email)
    const isAdmin = isExistDbUser?.role === 'admin';
    const isSurveyor = isExistDbUser?.role === 'surveyor';
    const isUser = isExistDbUser?.role === 'user';
    const isProUser = isExistDbUser?.role === 'proUser';
    console.log(isExistDbUser, isAdmin, isSurveyor)

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-slate-400">
                <ul className="menu p-4 space-y-3">


                    <li className="bg-gray-400">
                        <NavLink to='/dashboard'>Profile</NavLink>
                    </li>

                    {/* admin navigationn */}

                    {
                        isAdmin && <div>
                            <p className="text-lg">Admin Route</p>
                            <div className="divider"></div>

                            <li className="bg-gray-400 mb-5">
                                <NavLink to='/dashboard/admin/users'>Manage Users</NavLink>
                            </li>

                            <li className="bg-gray-400 mb-5">
                                <NavLink to='/dashboard/admin/surveys'>Manage Survey</NavLink>
                            </li>

                            <li className="bg-gray-400 mb-5">
                                <NavLink to='/dashboard/admin/payments'>All Payment</NavLink>
                            </li>


                            <div className="divider">----</div>
                        </div>
                    }

                    {/* surveyor navigaattion */}

                    {
                        isSurveyor && <div>
                            <p className="text-lg">Surveyor Route</p>
                            <div className="divider"></div>

                            <li className="bg-gray-400 mb-5">
                                <NavLink to='/dashboard/surveyor/create'>Create Survay</NavLink>
                            </li>

                            <li className="bg-gray-400 mb-5">
                                <NavLink to='/dashboard/surveyUpdate'>Update Survey</NavLink>
                            </li>

                            <li className="bg-gray-400 mb-5">
                                <NavLink to='/dashboard/surveyor/feedbacks'>Feedback</NavLink>
                            </li>


                            <div className="divider">or</div>

                        </div>
                    }

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