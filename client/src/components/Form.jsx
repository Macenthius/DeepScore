import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission, such as sending the data to a server
  };

  return (
    <div>
    <h2 className="text-xl font-bold mb-4 bg-white text-black shadow-lg rounded px-6 pt-4 pb-2">Done with the day? Log your day for update!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sessions">
            Amount of Sessions completed (0-14)
          </label>
          <input type="number" {...register("sessions", { required: true, min: 0, max: 14 })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Choose a number from 0 to 14" />
          {errors.sessions && <span className="text-red-500 text-xs">This field is required and should be between 0 and 14</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="breaks">
            Amount of breaks taken (0-15)
          </label>
          <input type="number" {...register("breaks", { required: true, min: 0, max: 15 })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Choose a number from 0 to 15" />
          {errors.breaks && <span className="text-red-500 text-xs">This field is required and should be between 0 and 15</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sessionLevel">
            Session Level (Low/Med/High)
          </label>
          <select {...register("sessionLevel", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="Low">Low</option>
            <option value="Med">Medium</option>
            <option value="High">High</option>
          </select>
          {errors.sessionLevel && <span className="text-red-500 text-xs">This field is required</span>}
        </div>

        <div className="flex items-center justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
