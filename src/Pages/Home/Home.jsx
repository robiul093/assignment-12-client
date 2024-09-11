// import NavBar from "../../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import HowItWork from "./HowItWork";
import FAQ from "./FAQ";
import FeaturedSection from "./FeaturedSection";
import LatestSurvey from "./LatestSurvey";
import Banner from "./Banner";

const Home = () => {

    const {user, } = useContext(AuthContext);
    // console.log(user);


    return (
        <div>
            <h2>Home Page</h2> 
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>  
            <LatestSurvey></LatestSurvey>
            <HowItWork></HowItWork>       
            <FAQ></FAQ>
        </div>
    );
};

export default Home;