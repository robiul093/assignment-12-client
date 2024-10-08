import { Outlet } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import NavBar from "../../Shared/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};

export default Main;