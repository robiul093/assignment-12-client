import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="mt-10 card shrink-0 md:w-2/3 mx-auto shadow-2xl bg-base-100">
            <div className="text-center mt-4">
                <h2 className="text-4xl font-semibold text-[#3C3C3C] mb-6">Sign Up</h2>
                <p className="text-2xl text-[#7F7F7F] font-medium mb-4">Create Your Account</p>
            </div>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                </div>
                {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">ImageURL</span>
                            </label>
                            <input type="text" placeholder="ImageURL" className="input input-bordered" required />
                        </div> */}
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
                    {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <p className="text-center mt-5 text-lg">Already have an account? <Link to={'/login'}><span className="underline">Login</span> </Link></p>
            </form>
        </div>
        //     </div>
        // </div>
    );
};

export default SignUp;