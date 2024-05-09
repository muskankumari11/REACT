import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    //yha protected nme dia h kyuki hm conditionally render lr rhe h kya uske children ko render krna h ya nhi krna h
    //iske andar child. or auth 

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    //av sabse pahle authstatus se puchna padega , aap loggedin ho ya nahi ho , pahle hm store se puchege directly depend nhi krege jo user pass kar rha h component me ya nhi
    const authStatus = useSelector(state => state.auth.status)
    //sate bta dega state.auth.status iske basis me mai sra kaam karuga but m directly kaam nahi karuga pahle mujhe ek useEffect chahiye hoga
    //useEffect hi btayega apko mujhe login pe bhejna ha ya home pe bhejna h ya kya kaam karna h or kis kis field me kuch change hota h to maidubara se checking karu ki nhi
    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication]) //run karna h on the basis of user auth,nevi, etc..

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
