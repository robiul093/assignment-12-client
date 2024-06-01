import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>Home Page</h2>            
        </div>
    );
};

export default Home;