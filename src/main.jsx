import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'
import Login from './routes/Login/Login.jsx'
import Home from './routes/Home/Home.jsx'

const router = createBrowserRouter([{
  path:"/", element:<App/>,
  errorElement:<Error/>,

  children:[
    {path:"/", element:<Home/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"login", element:<Login/>}
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
