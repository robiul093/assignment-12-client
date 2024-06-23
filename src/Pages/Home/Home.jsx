// import NavBar from "../../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import NavBar from "../../Shared/NavBar";
import HowItWork from "./HowItWork";
import FAQ from "./FAQ";

const Home = () => {

    const {user, } = useContext(AuthContext);
    console.log(user);


    return (
        <div>
            <NavBar></NavBar>
            <h2>Home Page</h2>   
            <HowItWork></HowItWork>       
            <FAQ></FAQ>
        </div>
    );
};

export default Home;