import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate} from "react-router-dom";
import useToken from "../../Hooks/useToken";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, user, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user2, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
      auth
    );
 const[token]=useToken(user || user2)
  let signInError;
  if (gError || error) {
    signInError = (
      <p className="text-red-500">{gError?.message || error?.message}</p>
    );
  }
  let spinner;
  if (gLoading || loading) {
    spinner = <Loading></Loading>;
  }
  const location = useLocation()
  const from = location.state?.from?.pathName || "/"
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate()
      if(token){
        navigate(from,{replace: true})
      }
  
   
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card bg-base-100 shadow-xl">
      <h2 className='text-2xl text-center text-accent'>Login</h2>
        <div className="card-body">
          {spinner}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Provide a valid email",
                  },
                })}
                type="text"
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
              />
              <label>
                {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character or longer",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label>
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-5 w-full max-w-xs">
              {signInError}
            </div>
            <div className="form-control mt-5 w-full max-w-xs">
              <input
                type="submit"
                value="login"
                className="btn  btn-accent w-full max-w-xs"
              />
            </div>
          </form>

          <div className="form-control w-full max-w-xs ">
            <div className="flex gap-x-2">
              <p>New to doctors portal? </p>
              <Link to="/signUp"  className="text-primary">Create new account</Link>
            </div>
          </div>
          <div className="form-control w-full max-w-xs ">
            <div className="flex gap-x-2 text-primary">   
            <Link to="/resetPassword"  className="text-primary">Forget Password?</Link>
            </div>
          </div>
          <div className="divider">OR</div>
          <div className="form-control w-full max-w-xs ">
            <button
              className="uppercase btn btn-outline"
              onClick={() => signInWithGoogle()}
            >
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
