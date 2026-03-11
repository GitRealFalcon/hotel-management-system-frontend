import api from "../api/axios";
import { toast } from "react-toastify";

const handlePayment = async ({ amount, bookingId }) => {
  const data = { amount, bookingId };

  const res = await api.post("transections/create-order", data);

  const { orderId, key } = res.data.data;

  const options = {
    key,
    amount: amount * 100,
    currency: "INR",
    name: "Hotel Management",
    description: "Booking Payment",
    order_id: orderId,
    handler: async function (response) {
      // 3️⃣ Send verification to backend
     try {
       const verifyRes=  await api.post("transections/verify-payment", {
           ...response,
           amount,
           bookingId,
         });
          
          if (verifyRes.data.success) {
          toast.success("Payment Successful");

          // reload page
          window.location.reload();

          // OR redirect
          // window.location.href = `/booking/${bookingId}`;
        }
      
     } catch (error) {

      toast.error("Payment verification failed");
     }


     
    },
    theme: { color: "#3399cc" },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

};

export default handlePayment;
