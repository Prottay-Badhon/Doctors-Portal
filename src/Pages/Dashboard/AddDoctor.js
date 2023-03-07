import React from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { json } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const {data: services,isLoading}=useQuery(['services'],()=>
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
)
   const imageStorageKey=  '667e74efda22f0ccc148707134ae835f'
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const onSubmit = async(data) => {
        const image = data.image[0];
       
        const formData = new FormData();
        formData.append('image',image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method: 'POST',
            body:  formData
        })
        .then(res=> res.json())
        .then(result => {
            if(result.success){
                    const img = result.data.url;
                    const doctor={
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    //send to your database
                    fetch('http://localhost:5000/doctor',{
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization : `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.insertedId){
                            toast.success('doctor added successfully!')
                            reset()
                        }
                        else{
                            toast.error('not success')
                        }
                    })
            }
        })
      
      };
      if(isLoading){
        return <Loading></Loading>
      }
  return (
    <div>
      <h2>Add doctor</h2>
      <ToastContainer></ToastContainer>
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
            <select {...register('specialty')} className="select select-bordered mt-5 w-full max-w-xs">
            {services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)}
            
                
            </select>
           
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
               
              })}
              type="file"
              placeholder="file"
              className="input input-bordered w-full max-w-xs"
            />
            <label>
              {errors.image?.type === "required" && (
                <span className="text-red-500">{errors.image.message}</span>
              )}
             
            </label>
          </div>
          
          <div className="form-control mt-5 w-full max-w-xs">
            <input
              type="submit"
              value="Add"
              className="btn  btn-accent w-full max-w-xs"
            />
          </div>
        </form>
    </div>
  )
}

export default AddDoctor
