import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";


const Protected = ({ children, authentication = false, adminOnly= false }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, status ,isAdmin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "idle" || status === "loading") return;

    if (authentication && !isAuthenticated) {
      navigate("/login", { replace: true });
    } else if (!authentication && isAuthenticated) {
       
      navigate("/", { replace: true });
      
    } 

    
    if (adminOnly && !isAdmin) {
       navigate("/not-authorized", { replace: true });
      return;
    }
      setChecked(true);
    
  }, [isAuthenticated, authentication, status, navigate, location.pathname]);

  if (!checked) return <h1>Loading...</h1>;

  return <>{children}</>;
};

export default Protected;
