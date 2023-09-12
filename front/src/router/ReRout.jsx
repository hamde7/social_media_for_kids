import { useState } from "react"
import Home from "./Home"
import { Outlet } from "react-router-dom"
export default function ReRout(){
    return(
        <>
            <Outlet />
            <Home />
        </>
    )
}