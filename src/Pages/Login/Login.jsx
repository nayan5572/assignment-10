import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { signInUser, googleLogin } = useContext(AuthContext);

    const [signInError, setSignInError] = useState('');

    // const location = useLocation();
    // const naviGate = useNavigate();


    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }


    return (
        <div>
            <div className="mt-20 mb-20">
                <h2 className="text-3xl text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <div>
                                <input type="checkbox" name="" id="" /> <label htmlFor="">Keep me signed in</label>
                            </div>
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white hover:border-success bg-success hover:bg-white hover:text-success">Login</button>
                        {/* <ToastContainer /> */}
                        <h2 className="text-center my-4 text-2xl">OR</h2>
                        <button className="btn btn-outline text-success hover:bg-success hover:border-0"><FaGoogle className="text-2xl"></FaGoogle> Continue With Google</button>
                    </div>
                </form>
                {
                    signInError && <p className="text-red-500">{signInError}</p>
                }
                <p className="text-center mt-5">Do not have an account? <Link className="text-blue-600" to="/register">Create an Account</Link></p>
            </div>
        </div>
    );
};

export default Login;