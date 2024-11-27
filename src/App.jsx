// eslint-disable-next-line no-unused-vars
import React from "react";
import About from "./Pages/About/About"
import Layout from "./Pages/Layout/Layout"
import Home from "./Pages/Home/Home"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  const routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
      {index:true, element:<Home/>},
      {path:'/home', element:<Home/>},
      {path:'about', element:<About/>},
      {path:'portfolio', element:<Portfolio/>},
      {path:'contact', element:<Contact/>},
      {path:'*', element:<NotFound/>}
    ]}
])
return (
<>
<RouterProvider router={routes}></RouterProvider>
</>
)
  
}

export default App
