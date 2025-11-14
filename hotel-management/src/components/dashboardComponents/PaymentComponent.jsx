import React from 'react'
import { useState } from 'react'
import Button from '../Button'
import dayjs from 'dayjs'

const PaymentComponent = ({transection}) => {
    const [show, setShow] = useState(false)
  return (
    <div>
       <div
            onClick={() => setShow(!show)}
            className="transform transition-all cursor-pointer duration-400 w-full flex flex-col gap-4 dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] p-4 rounded-2xl"
        >
            <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold">
                <div>
                    <div className="text-sm text-gray-400 ">Id</div>
                    <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                        {transection?._id ? transection._id : "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-400">Amount</div>
                    <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                      {transection?.amount ? transection.amount : "N/A"}
                    </div>
                </div>

                <div>
                    <div className="text-sm text-gray-400">Payment Method</div>
                    <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                        {transection?.paymentMethod ? transection.paymentMethod : "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-400 overflow-clip">Status</div>
                    <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                       {transection?.status ? transection.status : "N/A"}
                    </div>
                </div>
            </div>

            <div className={`transition-all duration-300 overflow-hidden 
               ${show ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`} >

                <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold">
                    <div>
                        <div className="text-sm text-gray-400 ">CustomerId</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                           {transection?.customerId ?transection.customerId: "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">BookingId</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                           {transection?.bookingId ? transection.bookingId : "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400 ">UTR</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                            {transection?.utr ? transection.utr : "N/A"}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400 overflow-clip">TransactionId</div>
                        <div className="dark:text-[var(--text-primary)] overflow-clip text-[#1A202C]">
                            {transection?.transactionId ? transection.transactionId : "N/A"}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-3 grid-rows-1 font-semibold mt-4">
                    <div>
                        <div className="text-sm text-gray-400 overflow-clip">
                          Date
                        </div>
                        <div className="dark:text-[var(--text-primary)] text-[#1A202C]">
                           {transection?.transactionDate ? dayjs(transection.transactionDate).format("DD/MM/YYYY") : "N/A"}
                        </div>
                    </div>
                   
                    <Button children={"Booking Detail"} className="w-fit col-end-4" />
                    <Button children={"User Detail"} className="w-fit col-end-5" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentComponent
