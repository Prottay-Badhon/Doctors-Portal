import React from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();
      const onSubmit = async(data) => {
        const { email } = data;
       const result = await sendPasswordResetEmail(email);
       reset({ email: '' })
       if(result){
        toast("Password reset email is sent.Please check")
       }

      };
  return (
    <div className="flex h-screen justify-center items-center">
         <ToastContainer />
    <div className="card bg-base-100 shadow-xl lg:w-1/4">
      <div className="card-body">
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
         
         
          <div className="form-control mt-5 w-full max-w-xs">
            <input
              type="submit"
              value="Send reset email"
              className="btn  btn-accent w-full max-w-xs"
            />
          </div>
        </form>

        
      </div>
    </div>
  </div>
  )
}

export default ResetPassword
