import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LightArms from './components/lightArms.jsx'
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'
import Home from './components/Home.jsx'
import MediumArms from "./components/mediumArms.jsx";
import Accessories from './components/accessories.jsx'
import {Provider} from "react-redux";
import {store} from "./store/Stores.js";

const router = createBrowserRouter([
  {path:'/',element:<App/>,children:[
    {index:true,element:<Navigate to='/home' replace/>},
    {path:'home',element:<Home/>},
    {path:'light-arms',element:<LightArms/>},
      {path:'medium-arms',element:<MediumArms/>},
      {path:'accessories',element:<Accessories/>},

  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
