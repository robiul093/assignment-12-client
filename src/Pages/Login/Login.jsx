import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="mt-10 card shrink-0 md:w-2/3 mx-auto shadow-2xl bg-base-100">
            <div className="text-center mt-4">
                <h2 className="text-4xl font-semibold text-[#3C3C3C] mb-6">Sign Up</h2>
                <p className="text-2xl text-[#7F7F7F] font-medium mb-4">Login Your Account</p>
            </div>
            <form className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center mt-5 text-lg">Do not have an account? <Link to={'/signUp'}><span className="underline">SignUp</span> </Link></p>
            </form>
        </div>
    );
};

export default Login;