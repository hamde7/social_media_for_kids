import classes from '../components/Login/Login.module.css'
import mianImage from '../components/Login/3f42e433a5184c93337cf9f737f5549f.png'
import footer from '../components/Login/footer.png'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProtectedLayer from '../components/protectedLayer'
import {schemaForLogin } from '../components/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import Loading from '../components/Loading/Loading';
import { redirect } from 'react-router-dom';
export default function Login(){
    const [resData , setResData] = useState();
    const nav = useNavigate();
    const {register , handleSubmit , formState:{errors}} = useForm({
        resolver : yupResolver(schemaForLogin )
    });
    async function SubmitAction(data){

        await fetch('http://127.0.0.1:8000/api/login',{
            method : "post",
            headers : {'content-type' : 'appliction/json'},
            body : JSON.stringify(data)
        }).then(res => res.json())
        .then(dataRes => {
            if(dataRes.status === "true"){
                localStorage["token"]=dataRes.value.token

                switch (dataRes.key) {
                    case 'parent' : nav('/DashFather') ; break;
                    case 'child' : nav('/Home') ; break ; 
                    case 'chacker' : nav('/Dash-board-viewer') ; break ; 
                    case 'writer' : nav('/Dash-board-writer') ; break ; 
                }          
            }else{
                    alert(dataRes.msg)
            }
        })
        .then(error => console.log(error))
    }
    return (
        <ProtectedLayer >
        <div className={classes.mainBody}>
            <div className={classes.mainForm}>
                <img className={classes.img} src={mianImage} alt="error"  />
                <form className={classes.form} action="" onSubmit={handleSubmit(SubmitAction)}>
                    <h2 className={classes.header}>Sign in</h2>
                    <p className={classes.pargraph}>Sign in and start managing your candidates!</p>
                    <div>
                    <input className={classes.input} type="text" placeholder='userName'
                    {...register("email")}
                    />
                    <p className={classes.errorClass}>{errors.email?.message}</p>
                    </div>
                    <div>
                    <input className={classes.input} type="password" placeholder='password'
                    {...register("password")}
                    />
                    <p className={classes.errorClass}>{errors.password?.message}</p>
                    </div>
                    <button className={classes.button}>Login</button>
                    <Link to="/Sign-Up"><button className={classes.buttonLink}>Register</button></Link>
                </form>
            </div>
            <footer className={classes.footer}><img src={footer} alt="error"/></footer>
        </div>
        </ProtectedLayer>
    )
}