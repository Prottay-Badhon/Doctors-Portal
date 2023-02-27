import React from 'react'
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const [signInWithGoogle, user, gLoading, gError] = useSignInWithGoogle(auth);
      const [
        createUserWithEmailAndPassword,
        user2,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      let signInError;
      if (gError || error) {
        signInError = (
          <p className="text-red-500">{gError?.message || error?.message}</p>
        );
      }
      let spinner;
      if (gLoading || loading || updating) {
        spinner = <Loading></Loading>;
      }
      const onSubmit = async(data) => {
        const { name,email, password } = data;
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({displayName: name})
      };
      const navigate = useNavigate()
      if(user2){
       navigate("/appointment")
      }
  return (
    <div className="flex h-screen justify-center items-center">
    <div className="card bg-base-100 shadow-xl lg:w-1/4">
      <div className="card-body">
        <h2 className='text-2xl text-center text-accent'>Sign Up</h2>
        {spinner}
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
               
              })}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            <label>
              {errors.name?.type === "required" && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
             
            </label>
          </div>
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
              value="Sign Up"
              className="btn  btn-accent w-full max-w-xs"
            />
          </div>
        </form>

        <div className="form-control w-full max-w-xs ">
          <div className="flex gap-x-2">
            <p>Already have an account? </p>
            <Link to="/login"  className="text-primary">Login</Link>
          </div>
        </div>    
      </div>
    </div>
  </div>
  )
}

export default SignUp
