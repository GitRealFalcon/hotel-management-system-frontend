import React from 'react'

const AddRoom = () => {

    const handleSubmit = ()=>{
        
    }
  return (
     <div className='w-full h-full  z-10 fixed backdrop-blur-sm bg-opacity-0 from-gray-400 flex items-center justify-center'>
        <div className=' h-[60%] w-[60%] dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] dark:border-none flex flex-col justify-around p-6 rounded-xl border border-slate-300'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-between h-10'>
            <h2 className='font-semibold dark:text-[var(--text-primary)] text-[#1A202C]'>Update Profile</h2>
            <div onClick={onClose} className='dark:text-[var(--text-primary)] text-[#1A202C] font-semibold cursor-pointer hover:font-bold'>Close</div>
          </div>
          <div className='w-full border-gray-400 border-b'></div>
          <div className='w-full  flex flex-col gap-5 p-2 py-5 text-sm'>
            <div className='flex gap-5'>
              <div>
                <Input label="Full Name" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                  {...register("fullName", {
                    required: "Full Name is Required",
                    minLength: { value: 3, message: "'Name must be at least 3 characters'" }
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <Input type="tel" label="Phone Number" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    }
                  })}
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              <Input label="Date of Birth" type="date" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                {...register("dob", {
                  validate: (value) => {
                    const today = new Date().toISOString().split("T")[0];
                    return value <= today || "Date cannot be in the future";
                  },
                })}
              />
            </div>
            <div>
              <Input label="Address" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                {...register("address")}
              />
            </div>
            <div className='flex gap-5'>
              <Input label="City" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                {...register("city")}
              />
              <Input label="State" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                {...register("state")}
              />
              <Input label="Postal Code" className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
                {...register("pincode", {
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Enter Valid pincode"
                  }
                })}
              />
            </div>

          </div>
          <div className='w-full h-16 flex justify-end gap-4 p-2'>
            <div ><Button type="submit" bgColor='bg-green-500' className='font-semibold ' children={"Update"} /></div>
          </div>
        </form>
      </div>
        </div>
  )
}

export default AddRoom
