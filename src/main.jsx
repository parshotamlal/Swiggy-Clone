import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Help from './components/Help.jsx'
import Offers from './components/Offers.jsx'
import Signin from './components/Signin.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'
const appRouter = createBrowserRouter([
  {
    path :"/body",
    errorElement : <Error />,
    element : <App />,
    children : [
         {
    path :"/",
    element : <Body />

  },

      {
    path :"/help",
    element : <Help />

  },

    {
    path :"/offers",
    element : <Offers />
  }
  ,
    {
    path :"/signin",
    element : <Signin />
  }
  ,
    {
    path:"/restaurant/:id",
    element: <RestaurantDetails />
  }
    ]
  }
    
]);

createRoot(document.getElementById('root')).render(
<RouterProvider router ={appRouter}>
  <App />
</RouterProvider>,
)
