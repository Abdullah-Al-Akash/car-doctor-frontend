import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
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
          <form onSubmit={handleLogin} className="card-body">
            <h3 className="text-center text-xl font-semibold">Login Here</h3>
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
              <label className="mt-4">
                <p href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </p>
                <p className="label-text-alt mt-2">
                  Create New Account?{" "}
                  <Link to="/signup" className="text-warning ">
                    Signup Here
                  </Link>{" "}
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
