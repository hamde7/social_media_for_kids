import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Login from './router/Login'
import DashHome from './router/DashHome'
import SignUp from './router/SignUp'
import Home from './router/Home'
import ReRout from './router/ReRout'
import {dataFromServer , dataFromServerForVewer }  from  './components/dashForViewer/dataFromServer'
import End from './components/dashForViewer/End'
import Comments from './components/Home/mainArea/Post/comments/Comments'
import fetchFromServerForHome , { fetchComments }from '../src/components/Home/fetchFromServerForHome'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import DashFather from './router/dashFather'
import data from './components/dashboardForFather/dataFromServer'
import EndForContentWriter from './components/dashForContentWriter/End'
const router = createBrowserRouter([
  {path : '/' , element : <App/> , children : [
    {path : '/' ,element : <Login />},
    {path : '/Sign-Up'  , element : <SignUp />},
    {path : '/DashFather'  , element : <DashFather /> , loader: data},
    {path : '/Dash-board' ,element : <DashHome /> },
    {path : '/Dash-board-viewer' ,element : <End /> , loader : dataFromServerForVewer},
    {path : '/Dash-board-writer' ,element : <EndForContentWriter /> , loader : dataFromServer},
    {path : '/Home' , element : <ReRout /> ,loader :fetchFromServerForHome , children : [
    {path : '/Home/:post_id' ,element : <Comments /> , loader : fetchComments},
    ] }
  
  ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
