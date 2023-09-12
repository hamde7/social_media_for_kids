import React from "react";
import classes from "./Addform.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
function Addform(props) {
    const dataFromServer = useLoaderData();
   
  const schema = yup.object().shape({
    email: yup.string().required("Username is required"),
    name: yup.string().required("Username is required"),
    password: yup.string().matches(/^\S(.*\S)?$/g,"must not  begin").required(),
    gender: yup
      .string()
      .oneOf(["male", "female"], "Please select a valid gender"),
    profile: yup
      .mixed()
      .test("file", "Profile photo is required", (value) => !!value),
    hour: yup
      .number()
      .typeError("Please enter a valid number")
      .required("hours are required")
      .integer("hours must be an integer")
      .min(0, "hours must be greater than or equal to 0")
      .max(23, "hours must be less than or equal to 23"),
    minute: yup
      .number()
      .typeError("Please enter a valid number")
      .required("minutes are required")
      .integer("minutes must be an integer")
      .min(0, "minutes must be greater than or equal to 0")
      .max(59, "minutes must be less than or equal to 59"),
  });

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      
      gender: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {

    data["user_id"]=dataFromServer.user_id;
    const formData = new FormData();
    formData.append('profile', sendImage);
    formData.append('user_id', data["user_id"]);
    formData.append('name', data["name"]);
    formData.append('gender', data["gender"]);
    formData.append('email', data["email"]);
    formData.append('password', data["password"]);
    formData.append('minute', data["minute"]);
    formData.append('hour', data["hour"]);
    try {
        const response = await fetch('http://127.0.0.1:8000/api/insetChild', {
          method: 'POST',
          body: formData,
          headers: {
            // Omit 'Content-Type' header to let browser set it automatically for FormData
          },
        });
  
        const data = await response.json();
        console.log(data.msg);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    // reset();

    // You can perform any actions with the form data here
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [sendImage , setSendImage] =  useState();
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSendImage(e.target.files[0])
      setSelectedFile(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
    }
  };
  return (
    <form className={classes.aform} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div>
        <label style={{marginRight : '25px'}}>name:</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input  {...field} className={classes.input} />}
        />
        <label>Password:</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input type="password" className={classes.input}  {...field} />}
        />
        <label>Username</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input className={classes.input}  {...field} />}
        />
        <p className={classes.errmsg}>{errors.username?.message}</p>
      </div>

      <div>
        <label>Gender</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          )}
        />
        <p className={classes.errmsg}>{errors.gender?.message}</p>
      </div>
      <div className={classes.photoselect}>
        <label>Profile Photo</label>
        {/* <Controller
          control={control}
          name="profile"
          render={({ field }) => (
            <input className={classes.input} 
            name="profile"
              type="file"
              accept="image/jpeg, image/png"
            
              {...field}
            //   onChange={(e) => {
            //     field.onChange(e); // Let the controller handle the change event
            //     handleFileChange(e); // Handle the change event to show the selected file instantly
            //   }}
            />
          )}
        /> */}
        <input className={classes.input}   type="file" {...register("profile")} onChange={handleFileChange}/>
        {errors.profile && (
          <span className={classes.errmsg}>{errors.profile.message}</span>
        )}
        {selectedFile && (
          <img
            src={selectedFile}
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            alt="Selected Profile Photo"
          />
        )}
      </div>
      <div className={classes.deftimecontainer}>
        <label>Default Time  </label>
        <div>
          <Controller
            control={control}
            name="hour"
            defaultValue=""
            render={({ field }) => (
              <input className={classes.input} 

                type="number"
                placeholder="Hours"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="minute"
            defaultValue=""
            render={({ field }) => (
              <input className={classes.input} 

                type="number"
                placeholder="Minutes"
                {...field}
              />
            )}
          />
        </div>
        {errors.defaultHours && (
          <span className={classes.errmsg}>{errors.defaultHours.message}</span>
        )}
        {errors.defaultMinutes && (
          <span className={classes.errmsg}>
            {errors.defaultMinutes.message}
          </span>
        )}
      </div>
      <button className={classes.subbutton} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Addform;
