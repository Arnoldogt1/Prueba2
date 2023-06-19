import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { Eventos, Habitaciones, Vuelos } from "../pages"

export const HotelRoutes = () => {
  return (
    <>

    <Navbar/>

    <Routes>
            <Route path='habitaciones' element={<Habitaciones/>}/>
            <Route path='eventos' element={<Eventos/>}/>
            <Route path='Vuelos' element={<Vuelos/>}/>

            <Route path='/' element={<Navigate to='/habitaciones'/>}/>
        </Routes>

    </>
  )
}
