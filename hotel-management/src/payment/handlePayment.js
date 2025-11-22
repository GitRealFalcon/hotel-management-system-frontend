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
     
        await api.post("transections/verify-payment", {
          ...response,
          amount,
          bookingId,
        });
     
    },
    theme: { color: "#3399cc" },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

export default handlePayment;
