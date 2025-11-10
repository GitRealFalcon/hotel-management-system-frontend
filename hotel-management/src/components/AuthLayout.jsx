import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";



const Protected = ({ children, authentication = false }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
 

  const { isAuthenticated, status } = useSelector((state) => state.auth);

  useEffect(() => {
    
    // Wait until fetchUser() completes before any redirect
    if (status === "idle" || status === "loading") return;

    if (authentication && !isAuthenticated) {
      navigate("/login", { replace: true });
    } else if (!authentication && isAuthenticated) {
       
      navigate("/", { replace: true });
      
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, authentication, status, navigate, location.pathname]);

  if (!checked) return <h1>Loading...</h1>;

  return <>{children}</>;
};

export default Protected;
