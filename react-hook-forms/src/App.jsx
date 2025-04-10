import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form, get, useForm } from 'react-hook-form'
function App() {
  function submit(data){
    console.log(data);
  }
  const{register, handleSubmit,getValues, formState: { errors }, reset } = useForm()
  return (
    <form onSubmit={handleSubmit(submit)} className='flex gap-4 flex-col'>
      <label htmlFor='name'> name:</label>
      <input {...register('name',{required:'name is left empty'})} placeholder='username' />
      {errors.name && <p>{errors.name.message}</p>}
      <label htmlFor="email">Email:</label>
      <input {...register("email",{required:'email is left empty',
        pattern:{
          value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          message:'enter a valid email format'
        }
      })} placeholder='enter the email' />
     {errors.email&& <p>{errors.email.message}</p>}
     <label htmlFor="password">password:</label>
      <input {...register("password",{required:'email is left empty',
        minLength:{
          value: 6,
          message:'there must be atleast 6 digits'
        }
      })} placeholder='enter the password' />
     {errors.password&& <p>{errors.password.message}</p>}
     <label htmlFor="confirmpassword">confirmpassword:</label>
      <input {...register("confirmpassword",{required:'email is left empty',
        minLength:{
          value: 6,
          message:'there must be atleast 6 digits'
        },
        validate:(value)=> value === getValues('password')|| 'passwords do not match'
      })} placeholder='enter the confirmpassword' />
     {errors.confirmpassword&& <p>{errors.confirmpassword.message}</p>}
      <button className='bg-yellow-800 text-white' type='submit'>sign up</button>
    </form>
  )
}

export default App
