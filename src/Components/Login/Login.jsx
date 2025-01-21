import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const [error, setError] = useState(null);

    const handleLogin = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setError(null);

        signInUser(email, password)
        .then((result) =>{
            console.log("User signed in successfully", result);
            e.target.email.value = "";
            e.target.password.value = "";
        })
        .catch((error) =>{
            console.log("Error:", error);
            setError(error.message);
            e.target.email.value = "";
            e.target.password.value = "";
        })
    }
    return (
        <div className="mx-auto my-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            {error && <p className="rounded-md mt-5 mx-4 border border-error text-error font-semibold p-2">{error}</p>}
            <h1 className="text-3xl font-bold text-success text-center mt-4">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover font-semibold text-success">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success text-white">Login</button>
                </div>
            </form>
            <p className=" text-center pb-5 font-semibold">New Here?Please <NavLink to={'/register'} className={'text-success'}>Register</NavLink> First</p>
        </div>
    );
};

export default Login;
