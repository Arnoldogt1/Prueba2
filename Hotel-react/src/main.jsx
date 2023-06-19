import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';
import './styles.css'
import { Hotel } from './HotelApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Hotel />
    </BrowserRouter>
  </React.StrictMode>,
)
