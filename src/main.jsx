import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LightArms from './components/lightArms.jsx'
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {path:'/',element:<App/>,children:[
    {index:true,element:<Navigate to='/home' replace/>},
    {path:'home',element:<Home/>},
    {path:'light-arms',element:<LightArms/>},
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
