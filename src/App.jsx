import { Outlet } from "react-router-dom"

import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='h-[80vh] px-4 md:px-8 lg:px-32 bg-white'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
