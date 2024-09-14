import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCrown } from "react-icons/fa";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
            })
            .then(err => {
                console.log(err);
            })
    }
    // console.log(user);
    

    const link = <div className="text-xl font-semibold flex space-x-5">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/allSurvey"}>Surveys</Link></li>
        <li><Link to={"/surveyDetails"}>Survey Details</Link></li>
        <li><Link to={"/payment"}>Be a Pro user <FaCrown className="text-yellow-500 text-3xl" /> </Link></li>
        <li><Link to={"dashbord"}>Dashbord</Link></li>

    </div>

    return (
        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">SurveyHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                        ? < div className="dropdown dropdown-hover dropdown-end mr-4">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="
                                ">
                                    <img className="text-lg" alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                </div>
                            </div>
                            <ul tabIndex={0} className=" z-[4] p-4 space-y-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
                                <li>
                                    {user?.displayName}
                                </li>
                                <li onClick={handelLogOut} className="cursor-pointer hover:bg-gray-400 p-2 rounded-md">Logout</li>
                            </ul>
                        </div>

                        : <div className="space-x-4">
                            <Link to={'/login'}><button className="btn">Login</button></Link>
                            <Link to={'/signUp'}><button className="btn">SignUp</button></Link>
                        </div>
                }

                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default NavBar;