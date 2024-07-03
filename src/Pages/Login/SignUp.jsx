import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-base-200 py-16">
      <div className="flex justify-center flex-col-reverse lg:flex-row">
        <div className="w-1/2 md:mx-0 mx-auto">
          <img className="object-contain md:pt-0 pt-8" src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:mx-0 mx-auto">
          <form onSubmit={handleSignup} className="card-body">
            <h3 className="text-center text-xl font-semibold">
              Registration Here
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <p className="label-text-alt mt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-warning ">
                    Login here
                  </Link>{" "}
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
