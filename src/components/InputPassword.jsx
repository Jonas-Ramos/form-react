
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const InputPassword = () => {
    const [type, setType] = useState("password");
    const [show, setShow] = useState(false)

    const switchVisibility = (visibility) => {
        setShow(visibility);

        setType(visibility ? "text" : "password")


    //     if(visibility){
    //         setType("text")
    //     } else {
    //         setType("password")
    //     }

    }

  return (
    <div className="input-password">
        <input type={type} />
        {!show && <FaRegEye className="password-icon" onClick={()=>switchVisibility(true)}/> }
        {show && <FaRegEyeSlash className="password-icon" onClick={()=>switchVisibility(false)}/>}
    </div>
  )
}

export default InputPassword