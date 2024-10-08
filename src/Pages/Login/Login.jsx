import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {

    const { userLogin, googleLogin, gitHubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm()

    const handelLogin = (data) => {

        const email = data.email;
        const password = data.password;

        console.log(email, password)

        userLogin(email, password)
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
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log('Response from server:', res);
                        // fetch('http://localhost:5000/jwt', {
                        //     method: 'POST',
                        //     headers: {
                        //         'Content-Type': 'application/json',
                        //     }
                        // })
                        //     .then(res => res.json())
                        //     .then(data => {
                        //         console.log(data)
                        //     })

                    })
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })

    }


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
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log('Response from server:', res);
                        fetch('http://localhost:5000/jwt', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                            })

                    })
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }


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
                fetch('http://localhost:5000/users', {
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
        <div className="mt-10 card shrink-0 md:w-2/3 mx-auto shadow-2xl bg-base-100">
            <div className="text-center mt-4">
                <h2 className="text-4xl font-semibold text-[#3C3C3C] mb-6">Login</h2>
                <p className="text-2xl text-[#7F7F7F] font-medium mb-4">Login Your Account</p>
            </div>
            <form onSubmit={handleSubmit(handelLogin)} className="card-body">

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

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="divider px-32">OR</div>

            <div>
                <button onClick={handelGoogleLogin} className="btn px-10 ml-10"> <FaGoogle></FaGoogle> Google</button>
                <button onClick={handelGitHubLogin} className="btn px-10 ml-10"> <FaGithub></FaGithub> GitHub</button>
            </div>

            <p className="text-center mt-5 text-lg">Do not have an account? <Link to={'/signUp'}><span className="underline">SignUp</span> </Link></p>
        </div>
    );
};

export default Login;