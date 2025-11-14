import React from 'react'
import dayjs from 'dayjs'

const Table = ({payments}) => {
    return (
        <div className='w-full h-full flex flex-col gap-2 py-3 items-center'>
            <div>
                <div className='text-2xl dark:text-[var(--text-primary)] text-[#1A202C] font-bold'>Transections</div>
                
            </div>
            <div className="flex flex-col w-full p-3 gap-2">
                <div className="grid grid-cols-4 h-7 w-full border-b border-gray-400 text-sm  text-gray-400 font-bold">
                    <div className='pl-1' >DATE</div>
                    <div className="pl-1">AMOUNT</div>
                    <div className="pl-1">METHOD</div>
                    <div className="pl-1">STATUS</div>
                </div>


               {payments && payments.map((payment)=><div className="grid grid-cols-4 h-7 py-1 w-full dark:text-[var(--text-primary)] text-[#1A202C] text-sm font-bold">
                    <div className="pl-1 flex gap-2 overflow-x-clip"> 
                        <input defaultChecked={payment.status === "Success"} className='accent-[#422AFB] w-4' type="checkbox" /> 
                    <p>{payment?.transactionDate ? dayjs(payment.transactionDate).format("DD/MM/YYYY") : "N/A"}</p>
                    </div>
                    <div className="pl-1 overflow-x-clip">{payment?.amount?payment.amount:"N/A"}</div>
                    <div className="pl-1  ">{payment?.paymentMethod?payment.paymentMethod:"N/A"}</div>
                    <div className="pl-1">{payment?.status?payment.status:"N/A"}</div>
                </div>)}
            </div>


        </div>
    )
}

export default Table
