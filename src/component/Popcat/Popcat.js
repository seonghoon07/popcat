import React, {useState,useEffect} from 'react'
import "./Popcat.css"
import shutup from "./shutup.jpeg"
import openmouse from "./openmouse.jpeg"

const Popcat = () => {

  const [mainimg,setmainimg] = useState(shutup);
  const [count,setcount] = useState(0);

  useEffect(() => {
    const newValue = localStorage.getItem("count")
    if (newValue !== null) {
      setcount(parseInt(newValue))
    }
  },[])

  const onHandleClick = ()=> {
    
    setmainimg(openmouse)

    setTimeout(() => {
      setmainimg(shutup)
    }, 100);

    setcount(count + 1)

    localStorage.setItem("count",count+1)
  }

  return (

    <>
      <div className="popcat-img">
        <img src={mainimg} onClick={onHandleClick} />
      </div>
      <div className='count'>
        <h1>{count} clicked!</h1>
      </div>
    </>

  );
}

export default Popcat;