import React, {useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

 const Protected = ({children, authentication=false}) => {
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.isAuthenticated)
    
    useEffect(()=>{
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    },[])

  return loader ? <h1>Loading</h1> : <>{children}</>
}

export default Protected

