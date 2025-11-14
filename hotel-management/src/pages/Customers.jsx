import React from "react";
import { useState,useEffect } from "react";
import CustomerCard from "../components/dashboardComponents/CustomerCard";
import api from "../api/axios";
import { useDispatch,useSelector } from "react-redux";
import {setCustomers} from "../features/customer/customerSlice"
import { toast } from "react-toastify";

const Customer = () => {
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true)
  const {customers} = useSelector((state)=> state.customer)

  useEffect(() => {
    (async()=>{
        try {
          const res = await api.get("users/get-customers")
          
          const data = res?.data.data
          if (data) {
            dispatch(setCustomers(data))
          }
          setloading(false)
          toast.success("Customers fetch successfully")
        } catch (error) {
         console.log(error);
         
        }
    })()
  }, [])
  
  return (
    <div className="flex min-h-screen mt-4 flex-col gap-3">
      {loading && <div>Loading..</div>}

      {customers.length > 0 && customers.map((user)=> <div key={user._id}>
        <CustomerCard user={user} />
      </div>)}
    </div>
  );
};

export default Customer;
