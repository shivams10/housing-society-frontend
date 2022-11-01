import React from 'react'
import "./CommonBtn.css"

const Commonbtn = ({value,type}) => {
  return (
    <button className={`${type}`} >{value}</button>
    )
}

export default Commonbtn;