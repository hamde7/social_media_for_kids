import React, { useState, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import classes from "./Classification.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import TimePicker from "react-time-picker";
// import "react-time-picker/dist/TimePicker.css";
import { Controller, useForm } from "react-hook-form";

function Classification(props) {
    const nav  = useNavigate();
    const [imageForSend , setImageForSend ]  = useState();
  const schema = yup.object().shape({
    cate_arr: yup.array().min(1, "at least one should be selected"),
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
    // additionalHours: yup
    //   .number()
    //   .typeError("Please enter a valid number")
    //   .required("hours is required")
    //   .integer("hours must be an integer")
    //   .min(0, "hours must be greater than or equal to 0")
    //   .max(23, "hours must be less than or equal to 23"),
    // additionalMinutes: yup
    //   .number()
    //   .typeError("Please enter a valid number")
    //   .required("minutes are required")
    //   .integer("minutes must be an integer")
    //   .min(0, "minutes must be greater than or equal to 0")
    //   .max(59, "minutes must be less than or equal to 59"),
    // profile: yup
    //   .mixed()
    //   .test("file", "Profile photo is required", (value) => !!value),
  });
  
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        cate_arr: []
    },
    resolver: yupResolver(schema),
  });

  async function submitFunctio(data) {
    data["id"]=props.id
    const formData = new FormData();
    let joinArray = data["cate_arr"].join(',') 
    formData.append('cate_arr', joinArray)  
    formData.append('profile', imageForSend);
    formData.append('id', data["id"]);
    formData.append('minute', data["minute"]);
    formData.append('hour', data["hour"]);
    let dataFromServer ;
    try {
        const response = await fetch('http://127.0.0.1:8000/api/updateChild', {
          method: 'POST',
          body: formData,
          headers: {
            // Omit 'Content-Type' header to let browser set it automatically for FormData
          },
        });
  
        dataFromServer = await response.json();
      } catch (error) {
        console.error('Error uploading image:', error);
      }
      if(dataFromServer.status === "true"){
        nav('/DashFather')
      }
    reset();
  }
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
        setImageForSend(e.target.files[0])
      const file = e.target.files[0];
      setSelectedFile(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className={classes.csection}>
      <h2 className={classes.sectitle}>Classification:</h2>

      <form className={classes.cform} onSubmit={handleSubmit(submitFunctio)}>
        <fieldset className={classes.field}>
          <legend>choose sections</legend>
          {/* <br /> */}
          <div>
            <input
              type="checkbox"
              name="categories"
              value={8}
              {...register("cate_arr")}
            />
            <p className={classes.chkitem}>video</p>
            <input
              type="checkbox"
              name="categories"
              value={9}
              {...register("cate_arr")}
            />
            <p className={classes.chkitem}>music</p>
            <input
              type="checkbox"
              name="categories"
              value={3}
              {...register("cate_arr")}
            />
            <p className={classes.chkitem}>fun</p>
            <input
              type="checkbox"
              name="categories"
              value={2}
              {...register("cate_arr")}
            />
            <p className={classes.chkitem}>sport</p>
            <input
              type="checkbox"
              name="categories"
              value={1}
              {...register("cate_arr")}
            />
            <p className={classes.chkitem}>chess</p>
            <input
              type="checkbox"
              name="categories"
              value={4}
              {...register("cate_arr")}
            />
            <p className={classes.chkitem}>math</p>
            {errors.categories && (
              <p className={classes.errmsg} style={{ color: "red" }}>
                {errors.categories.message}
              </p>
            )}
          </div>
        </fieldset>

        <div className={classes.deftimecontainer}>
          <label>Default Time</label>
          <div>
            <Controller
              control={control}
              name="hour"
              defaultValue=""
              render={({ field }) => (
                <input
                  className={classes.timef}
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
                <input
                  className={classes.timef}
                  type="number"
                  placeholder="Minutes"
                  {...field}
                />
              )}
            />
          </div>
          {errors.hour && (
            <span className={classes.errtime}>{errors.hour.message}</span>
          )}
          {errors.minute && (
            <span className={classes.errtime}>{errors.minute.message}</span>
          )}
        </div>
        {/* 
        <div>
          <label>Additional Time</label>
          <div className={classes.timecontainer}>
            <Controller
              control={control}
              name="additionalHours"
              defaultValue=""
              render={({ field }) => (
                <input
                  className={classes.timef}
                  type="number"
                  placeholder="Hours"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="additionalMinutes"
              defaultValue=""
              render={({ field }) => (
                <input
                  className={classes.timef}
                  type="number"
                  placeholder="Minutes"
                  {...field}
                />
              )}
            />
            {errors.additionalHours && (
              <span className={classes.errtime}>
                {errors.additionalHours.message}
              </span>
            )}
            {errors.additionalMinutes && (
              <span className={classes.errtime}>
                {errors.additionalMinutes.message}
              </span>
            )}
          </div>
        </div> */}

        <div className={classes.photoselect}>
          <label>Profile Photo</label>
          <input  type="file" {...register("profile")} onChange={handleFileChange}/>
          {errors.profile && (
            <span className={classes.errtime}>{errors.profile.message}</span>
          )}
          {selectedFile && (
            <img
              src={selectedFile}
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              alt="Selected Profile Photo"
            />
          )}
        </div>
        <button className={classes.subbutton}>Submit</button>
      </form>
    </div>
  );
}

export default Classification;
