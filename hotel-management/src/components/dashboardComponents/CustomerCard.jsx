import React from 'react'
import { Button } from "../index";
import { useState } from "react";
import dayjs from 'dayjs';

const CustomerCard = ({user}) => {
     const [show, setShow] = useState(false);
    return (
        <div
            onClick={() => setShow(!show)}
            className="transform transition-all cursor-pointer duration-400 w-full flex flex-col gap-4 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] p-4 rounded-2xl"
        >
            <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold">
                <div>
                    <div className="text-sm text-gray-400 ">Id</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                        {user?._id ? user._id : "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-400">Name</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                      {user?.fullName ? user.fullName : "N/A"}
                    </div>
                </div>

                <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                        {user?.phone ? user.phone : "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-400 overflow-clip">Email</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                       {user?.email ? user.email : "N/A"}
                    </div>
                </div>
            </div>

            <div className={`transition-all duration-300 overflow-hidden 
               ${show ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`} >

                <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold">
                    <div>
                        <div className="text-sm text-gray-400 ">dob</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                           {user?.dob ? dayjs( user.dob ).format("DD/MM/YYYY"): "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">Address</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                           {user?.address ? user.address : "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">City</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                            {user?.city ? user.city : "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400 overflow-clip">State</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                            {user?.state ? user.state : "N/A"}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 grid-rows-1 gap-3 font-semibold mt-4">
                    <div>
                        <div className="text-sm text-gray-400 overflow-clip ">
                            Postal Code
                        </div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                           {user?.pincode ? user.pincode : "N/A"}
                        </div>
                    </div>
                    <Button children={"Show Bookings"} className="w-fit col-end-5" />
                </div>
            </div>
        </div>
    )
}

export default CustomerCard
