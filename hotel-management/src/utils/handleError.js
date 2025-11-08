
 const hendleError = (error)=>{
    if (error.response) {
        const {status, data} = error
    const    massage = data?.massage || data?.error || `Request failed with status ${status}`;

        return massage
    }

    if (error.request) {
         return "No response from server. Please try again.";
    }

    return error.message || "Unexpected error occurred.";
}

export default hendleError