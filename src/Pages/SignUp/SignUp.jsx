import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser, googleLogin, gitHubLogin, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm()


    // create user by email & password
    const handelSinUp = (data) => {
        const name = data.name;
        const imageURL = data.imageURL;
        const email = data.email;
        const password = data.password;
        console.log(name, imageURL, email, password)

        createUser(email, password)
            .then(res => {
                console.log(res.user);

                return updateUser(name, imageURL)
            })
            .then(() => {
                const userInfo = {
                    name: name,
                    email: email,
                    role: 'user',
                }
                fetch('https://assignment-12-server-lemon-delta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log('Response from server:', res);
                        if (res.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User Create Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })

            })
            .catch(err => {
                console.log(err);
            })
    }


    // google signup
    const handelGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    role: 'user',
                }
                fetch('https://assignment-12-server-lemon-delta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log('Response from server:', res);

                    })
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }


    // gitHub signup
    const handelGitHubLogin = () => {
        gitHubLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    role: 'user',
                }
                fetch('https://assignment-12-server-lemon-delta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log('Response from server:', res);

                    })
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="mt-10 card shrink-0 md:w-2/3 mx-auto shadow-2xl bg-base-100">
            <div className="text-center mt-4">
                <h2 className="text-4xl font-semibold text-[#3C3C3C] mb-6">Sign Up</h2>
                <p className="text-2xl text-[#7F7F7F] font-medium mb-4">Create Your Account</p>
            </div>
            <form onSubmit={handleSubmit(handelSinUp)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">ImageURL</span>
                    </label>
                    <input type="text" {...register("imageURL", { required: true })} placeholder="ImageURL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                    {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>

            <div className="divider px-32">OR</div>

            <div>
                <button onClick={handelGoogleLogin} className="btn px-6 ml-10"> <FaGoogle></FaGoogle> Google</button>
                <button onClick={handelGitHubLogin} className="btn px-6 ml-10"> <FaGithub></FaGithub> GitHub</button>
            </div>

            <p className="text-center mt-5 text-lg">Already have an account? <Link to={'/login'}><span className="underline">Login</span> </Link></p>
        </div>
        //     </div>
        // </div>
    );
};

export default SignUp;