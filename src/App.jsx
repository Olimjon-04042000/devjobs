import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Jobs from "./components/Jobs"
import Job from "./components/Job"

const  router= createBrowserRouter([

  {
    path:"/",
    element: <Jobs />
  },
  {
    path:"/:id",
    element: <Job />
  }
])


function App() {


  return (
    <>
        <Navbar />
        <Search />
    <RouterProvider router={router} />
    </>
  )
}

export default App
