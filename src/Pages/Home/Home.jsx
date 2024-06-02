// import NavBar from "../../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import NavBar from "../../Shared/NavBar";

const Home = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const handelLogOut = () =>{
        logOut()
        .then(res =>{
            console.log(res);
        })
        .then(err =>{
            console.log(err);
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <h2>Home Page</h2> 
            <button onClick={handelLogOut}>Logout</button>           
        </div>
    );
};

export default Home;