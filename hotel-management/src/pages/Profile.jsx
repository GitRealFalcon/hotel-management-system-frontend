import React, { useState, useEffect } from 'react'
import Container from '../components/Container/Container'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import BookingCard from '../components/BookingCard'
import api from '../api/axios'
import BookingDetails from '../components/profileComponents/BookingDetails'
import EditProfile from '../components/profileComponents/EditProfile'


const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [activeBooking, setActiveBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBooking, setshowBooking] = useState(false)
  const [booking, setBooking] = useState("")
  const [showEdit, setshowEdit] = useState(false)


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

  const handleBookingClick = async (Id) => {
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
    <div className='w-full bg-[#F4F7FE] dark:bg-[var(--bg-primary)]'>
      <BookingDetails onClose={() => setshowBooking(false)} booking={booking} showBooking={showBooking} />
      <EditProfile onClose={() => setshowEdit(false)} showEdit={showEdit} />
      <div className='w-full h-full flex mt-[72px]'>

        <div className=' flex w-[30%] dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] flex-col gap-4  p-4'>

          <div className='h-40 bg-[#F4F7FE] dark:bg-[var(--bg-primary)] flex flex-col justify-center items-center p-2 gap-1 rounded-xl'>
            <div className='w-15 h-15 rounded-full overflow-hidden  border'><img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" alt="avatar" /></div>
            <div className='flex flex-col items-center font-semibold'>
              <span className='dark:text-[var(--text-primary)] text-[#1A202C] text-lg font-bold'>{user?.fullName}</span>
              {user?.isAdmin ? <span className='text-gray-400'>Admin</span> : <span className='text-gray-400'>Customer</span>}
            </div>
          </div>

          <div className='bg-[#F4F7FE] dark:bg-[var(--bg-primary)] h-[450px] rounded-xl p-6'>
            <div className='flex justify-between h-10'>
              <h2 className='font-semibold dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>Personal information</h2>
              <div onClick={() => setshowEdit(true)} className=' dark:text-[var(--text-primary)] overflow-clip text-[#1A202C] font-semibold cursor-pointer hover:font-bold' >Edit</div>
            </div>

            <div className='w-full border-gray-300 border-b'></div>

            <div className='w-full flex flex-col gap-5 p-2 font-semibold'>

              <div className=' grid grid-cols-2 grid-rows-1'>
                <div >
                  <div className='text-sm text-gray-400 mb-1'>Name</div>
                  <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{user?.fullName}</div>
                </div>
                <div>
                  <div className='text-sm text-gray-400 mb-1'>Email</div>
                  <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{user?.email}</div>
                </div>
              </div>
              <div className=' grid grid-cols-2 grid-rows-1'>
                <div>
                  <div className='text-sm text-gray-400 mb-1'>Phone Number</div>
                  <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{user?.phone ? user.phone : "N/A"}</div>
                </div>
                <div>
                  <div className='text-sm text-gray-400 mb-1'>Date of Birth</div>
                  <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{user?.dob ? formatter.format(new Date(user.dob)) : "N/A"}</div>
                </div>
              </div>

              <div className=' grid grid-cols-2 grid-rows-1'>
                <div>
                  <div className='text-sm text-gray-400 mb-1'>Address</div>
                  <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{user?.address ? user.address : "N/A"}</div>
                </div>
                <div>
                  <div className='text-sm text-gray-400 mb-1'>City</div>
                  <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{user?.city ? user.city : "N/A"}</div>
                </div>
              </div>

              <div className=' grid grid-cols-2 grid-rows-1'>
                <div>
                  <div className='text-sm text-gray-400 mb-1'>State</div>
                  <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{user?.state ? user.state : "N/A"}</div>
                </div>
                <div>
                  <div className='text-sm text-gray-400 mb-1'>Postal Code</div>
                  <div className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]'>{user?.pincode ? user.pincode : "N/A"}</div>
                </div>
              </div>

            </div>
          </div>
        </div>



        <div className=' p-4 w-[70%] flex flex-col gap-4 '>

          <div className=' h-40 rounded-xl p-6 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF]'>
            <div className='h-10'>
              <h2 className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C] font-semibold mb-1'>Active Booking</h2>
            </div>
            <div className='w-full border-gray-300 border-b mb-2'></div>
            <div className='flex flex-col gap-1'>
              {activeBooking ? (
                <div onClick={() => handleBookingClick(activeBooking._id)}>
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
                <p className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C] font-semibold'>No active booking found.</p>
              )}
            </div>
          </div>

          <div className='dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] h-[450px] rounded-xl p-6'>
            <div className='h-10'>
              <h2 className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C] font-semibold mb-1'>Booking History</h2>
            </div>
            <div className='w-full border-gray-300 border-b mb-2'></div>
            <div className='flex flex-col p-2 gap-2 overflow-y-auto'>
              {!user?.Bookings?.length ? (
                <p className='dark:text-[var(--text-primary)] overflow-clip text-[#1A202C] font-semibold' >No bookings found.</p>
              ) : (
                user.Bookings.map((booking) => (
                  <div onClick={() => handleBookingClick(booking._id)}
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
     
      </div>
    </div>
  )
}

export default Profile
