import { Route, Routes } from "react-router-dom"
import { HotelRoutes } from '../Hotel';
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='login' element={<LoginPage/>}/>
            <Route path='/*' element={<HotelRoutes/>}/>

        </Routes>
    </>
  )
}
