import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then((result) =>{
            console.log("User created successfully", result);
        })
        .catch((error) =>{
            console.log("Error:", error);
        })

    }
    return (
        <div className="mx-auto my-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-success text-center mt-4">
                Register Now!!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
                {/* Name input start */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered"
                        required
                    />
                </div>
                {/* Name input end */}

                {/* Email input start */}
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
                {/* Email input end */}

                {/* Password input start */}
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
                </div>
                {/* Password input end */}

                {/* Login button */}
                <div className="form-control mt-6">
                    <button className="btn btn-success text-white">
                        Register
                    </button>
                </div>
                {/* Login button end */}
            </form>
            <p className=" text-center pb-5 font-semibold">
                Already have an account?Please{" "}
                <NavLink to={"/login"} className={"text-success"}>
                    Login
                </NavLink>
            </p>
        </div>
    );
};

export default Register;
