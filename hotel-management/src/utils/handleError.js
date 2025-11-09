
 const hendleError = (error)=>{
    if (error.response) {
        const status = error.response?.status
        const  data = error.response?.data
    const  message = data?.message || data?.error || `Request failed with status ${status}`;

        return message
    }

    if (error.request) {
         return "No response from server. Please try again.";
    }

    return error.message || "Unexpected error occurred.";
}

export default hendleError