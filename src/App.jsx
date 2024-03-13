import { useState } from 'react'
import Header from './components/Header'
import Booking from './components/Booking'
import Table from './components/Table'

function App() {
 

  return (
    <div className='bg-[url(../src/assets/flight.jpg)] bg-cover bg-no-repeat'>
   <Header/>
    <section className='h-screen'>
     <Booking/>
     <Table/>
    </section>
    </div>
  )
}

export default App
