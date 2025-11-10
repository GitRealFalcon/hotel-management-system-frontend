import React, { useState, useEffect } from 'react'
import Container from '../components/Container/Container'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import BookingCard from '../components/BookingCard'
import api from '../api/axios'
import BookingDetails from '../components/profileComponents/BookingDetails'


const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [activeBooking, setActiveBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBooking, setshowBooking] = useState(false)
  const [booking, setBooking] = useState("")
  
  
  useEffect(() => {
  const fetchActiveBooking = async () => {
    try {
     
      if (!user?.Bookings || user.Bookings.length === 0) return;

      const active = user.Bookings.filter(
        (each) => each.status === "Active"
      );

      if (active.length > 0) {
        const res = await api.get("bookings/get-booking", {
          params: { bookingId: active[0]._id },
        });
        setActiveBooking(res.data.data);
      } else {
        setActiveBooking(null);
      }
    } catch (error) {
      console.error("Error fetching active booking:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchActiveBooking();
}, [user?.Bookings]);

  const handleBookingClick = async(Id)=>{
        const res = await api.get("bookings/get-booking", {
          params: { bookingId: Id },
        });
        setBooking(res.data.data)
        setshowBooking(true)
  }

  

  if (loading) return <p>Loading Data...</p>;

  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className=' w-full h-screen bg-cover  bg-[url("/4k-hotel.jpg")] flex items-center '>
      <BookingDetails onClose={() => setshowBooking(false)} booking={booking} showBooking={showBooking} />
      <Container className={" flex "} >

        <div className='w-[40%] h-[80%] p-4 flex flex-col gap-4 rounded-2xl'>

          <div className='bg-white h-40 rounded-2xl p-2'>
            <div className='px-1'>
              <h2 className='font-semibold mb-1'>Active Booking</h2>
            </div>
            <div  className='w-full border-b mb-2'></div>
            <div className='flex flex-col gap-1'>
              {activeBooking ? (
                <div  onClick={()=>handleBookingClick(activeBooking._id)}>
                <BookingCard
                isPayed={activeBooking.payment.isPayed}
                    bookingId={activeBooking._id}
                  roomNo={activeBooking.roomNo}
                  checkIn={activeBooking.checkIn}
                  checkOut={activeBooking.checkOut}
                  amount={activeBooking.totalAmount}
                  active={activeBooking.status}
                />
                </div>
              ) : (
                <p>No active booking found.</p>
              )}
            </div>
          </div>

          <div className='bg-white h-[245px] rounded-2xl p-2'>
            <div className='px-1'>
              <h2 className='font-semibold mb-1'>Booking History</h2>
            </div>
            <div className='w-full border-b mb-2'></div>
            <div className='flex flex-col h-[200px] pb-2 gap-1 overflow-y-scroll'>
              {!user?.Bookings?.length ? (
                <p>No bookings found.</p>
              ) : (
                user.Bookings.map((booking) => (
                 <div  onClick={()=>handleBookingClick(booking._id)}
                    key={booking._id}>
                 <BookingCard
                    roomNo={booking.roomNo}
                    checkIn={booking.checkIn}
                    checkOut={booking.checkOut}
                    status={booking.status}
                  />
                   </div>
                ))
              )}
            </div>
          </div>

        </div>

        <div className='w-[60%] h-[80%] flex  flex-col gap-10 rounded-2xl p-4'>
          <div className='h-20 bg-white flex items-center p-2 gap-2 rounded-2xl'>
            <div className='w-15 h-15 rounded-full overflow-hidden  border'><img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" alt="avatar" /></div>
            <div className='flex flex-col font-semibold'>
              <span>{user?.fullName}</span>
              {user?.isAdmin ? <span>Admin</span> : <span>Customer</span>}
            </div>
          </div>
          <div className='bg-white h-[300px] rounded-2xl p-6'>
            <div className='flex justify-between h-10'>
              <h2 className='font-semibold'>Personal information</h2>
              <div>Edit</div>
            </div>

            <div className='w-full border-b'></div>

            <div className='w-full h-[200px] flex items-center justify-between p-2 text-sm'>
              <div className='w-1/5 h-full flex flex-col justify-around  '>
                <div >
                  <div className='text-gray-600'>Name</div>
                  <div className='font-semibold'>{user?.fullName}</div>
                </div>
                <div>
                  <div className='text-gray-600'>Email</div>
                  <div className='font-semibold'>{user?.email}</div>
                </div>
              </div>
              <div className='w-1/5 h-full flex flex-col justify-around'>
                <div>
                  <div className='text-gray-600'>Phone Number</div>
                  <div className='font-semibold'>{user?.phone ? user.phone : "N/A"}</div>
                </div>
                <div>
                  <div className='text-gray-600'>Date of Birth</div>
                  <div className='font-semibold'>{user?.dob ? formatter.format(new Date(user.dob)) : "N/A"}</div>
                </div>
              </div>

              <div className='w-1/5 h-full flex flex-col justify-around'>
                <div>
                  <div className='text-gray-600'>Address</div>
                  <div className='font-semibold'>{user?.address ? user.address : "N/A"}</div>
                </div>
                <div>
                  <div className='text-gray-600'>City</div>
                  <div className='font-semibold'>{user?.city ? user.city : "N/A"}</div>
                </div>
              </div>

              <div className='w-1/5 h-full flex flex-col justify-around'>
                <div>
                  <div className='text-gray-600'>State</div>
                  <div className='font-semibold'>{user?.state ? user.state : "N/A"}</div>
                </div>
                <div>
                  <div className='text-gray-600'>Postal Code</div>
                  <div className='font-semibold'>{user?.pincode ? user.pincode : "N/A"}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile
