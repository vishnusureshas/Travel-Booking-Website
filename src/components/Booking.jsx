import React ,{useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { makeBooking } from '../redux/actions';

const Booking = () => {
    const data = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    const size = data.length

    const [bookingData, setBookingData] = useState({})

    const handleChange = (e) => {
      const newBookingData = {...bookingData}
      newBookingData[e.target.name] = e.target.value
      setBookingData(newBookingData)
    }

    const handleBook = (e) => {
        e.preventDefault()
        // console.log(e.target.value);
        if(Object.keys(bookingData).length === 5) {
          dispatch(makeBooking({...bookingData,id:size + 1}))
        }else{
          alert("Please select data properly!")
        }
    }
    console.log(bookingData);

  return (
    <div className='md:mt-[160px] mt-[100px] mx-4 relative'>
      <div className='bg-white rounded-md max-w-6xl w-full mx-auto'>
       <form className='flex flex-col md:flex-row'>
        {/* from */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2 '>
            <p>Destination From</p>
            <div className='flex flex-row'>
                <select required  name="from" id="from" onChange={(e)=>handleChange(e)} className='outline-none p-2 w-full'>
                    <option value="">Please Select</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Paris</option>
                    <option>Rome</option>
                </select>
            </div>
          </div>

          {/* destination */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2 '>
            <p>Destination To</p>
            <div className='flex flex-row'>
                <select name="to" id="to" onChange={(e)=>handleChange(e)} className='outline-none p-2 w-full'>
                    <option value="">Please Select</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Paris</option>
                    <option>Rome</option>
                </select>
            </div>
          </div>

          {/* Date */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2 '>
            <p>Journey Date</p>
            <input type="date" name='date'onChange={(e)=>handleChange(e)} required className='outline-none p-2 w-full'/>
          </div>

          {/* Guests */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2 '>
            <p>Guests</p>
            <div className='flex flex-row'>
                <select name="guests" id="guests" onChange={(e)=>handleChange(e)} className='outline-none p-2 w-full'>
                    <option value="">Please Select</option>
                    <option>1 Person </option>
                    <option>2 Person</option>
                    <option>3 Person</option>
                    <option>4 Person</option>
                </select>
            </div>
          </div>

          {/* Travel Class */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2 '>
            <p>Travel Class</p>
            <div className='flex flex-row'>
                <select required name="ticketClassName" id="ticketClassName" onChange={handleChange} className='outline-none p-2 w-full'>
                    <option value="">Please Select</option>
                    <option>Business </option>
                    <option>Economy</option>            
                </select>
            </div>
          </div>

          {/* button */}
          <button type='submit' onClick={handleBook} className='bg-indigo-500 text-white px-8 py-1 space-x-2 flex items-center justify-center'><FaPlus className='mr-1'/>Book Now</button>
       </form>
     </div>
    </div>
  )
}

export default Booking