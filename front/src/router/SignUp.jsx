import classes from '../components/Sign Up/SignUp.module.css'
import image from '../components/Sign Up/line-of-children.png'
import  secondaryImage from '../components/Sign Up/back-ground.png'
import {schemaForSignUp } from '../components/validation'
import { useForm } from 'react-hook-form'
import ProtectedLayer from '../components/protectedLayer'
import { yupResolver } from '@hookform/resolvers/yup'
import { redirect, useNavigate } from 'react-router-dom'
import { Label } from 'reactstrap'
export default function SignUp(){
    const nav= useNavigate();
    const {register , handleSubmit , formState:{errors}} = useForm({
        resolver : yupResolver(schemaForSignUp )
    });
    async function onSubmit(data){
        console.log(data)
        data["gender"]="female"
        await fetch('http://127.0.0.1:8000/api/user_regiser',{
            method : "post",
            headers : {'content-type' : 'appliction/json'},
            body : JSON.stringify(data)
        }).then(res => res.json())
        .then(dataRes => {
            if(dataRes.status == "true"){
                localStorage["token"]=dataRes.value.token;
                nav("/DashFather")
            }else{
                console.log(dataRes.msg)
                console.log("error")
            }
        })
        .then(error => console.log(error))
    }
    return(
    <ProtectedLayer>
        <div className={classes.holePage}>
            <div className={classes.speech}>
                <h1>
                    We Care About Your Children's <br />
                </h1>
                <h1 className={classes.safety}>Safety</h1>
            </div>
            <img src={image} className={classes.photo} alt="line-of-image" /> 
            {/* <img className={classes.secondaryImage} src={secondaryImage} alt="" /> */}
            <div className={classes.card}>
                <div className={classes.container}>
                    <h1 className={classes.header1}>Create Account</h1>
                    <form className={classes.form} action="" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className={classes.input}
                            type="text"
                            id="name"
                            placeholder="fullname"
                            {...register("name")}
                        />
                        <p className={classes.errors}>{errors.name?.message}</p>
                        <input
                            className={classes.input}
                            type="email"
                            id="email"
                            placeholder="Email Adress"
                            {...register("email")}
                        />
                        <p className={classes.errors}>{errors.email?.message}</p>
                        <input
                            className={classes.input}
                            type="password"
                            id="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <p className={classes.errors}>{errors.password?.message}</p>
                        <input
                            className={classes.input}
                            type="text"
                            id="id-number"
                            placeholder="ID-Number"
                            {...register("ssn")}
                        />
                        <p className={classes.errors}>{errors.ssn?.message}</p>
                        <input
                            className={classes.input}
                            type="text"
                            id="phone"
                            placeholder="phone"
                            {...register("phone_number")}
                        />
                        <button className={classes.button} type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
        </ProtectedLayer>
    )
}