import React,{useState, useEffect} from 'react'
import Container from '../components/Container/Container'
import { useSelector } from 'react-redux'

const Profile = () => {
  const data = useSelector((state) => state.auth.user)
const [user, setuser] = useState({})

useEffect(() => {
 setuser(data)
}, [data])

 

  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className=' w-full h-screen bg-cover  bg-[url("/4k-hotel.jpg")] pt-20'>
      <Container className={" flex "} >
        {/* <div className='w-[10%] h-[80%] border rounded-2xl'>
        <h2>Booking History</h2>
      </div> */}
        <div className='w-full h-[80%] flex  flex-col gap-10 rounded-2xl p-4'>
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
                <div>
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
                  <div className='font-semibold'>{user?.dob ? formatter.format(new Date(user.dob))  : "N/A"}</div>
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
