import React from 'react'

export default function Positions() {
 const classname = "bg-red-500 w-20 h-20 m-3 border-4 border-black text-center rounded-md text-white"

 
  return (
    <div className='bg-slate-200 border-4  border-black h-screen'>
      <div className='bg-green-300 relative border-4 m-20 border-black flex flex-row items-center'>
        <div className={`${classname}`}>box 1</div>
        <div className={`${classname} relative top-36`}>box 2</div>
        <div className={`${classname} relative top-16`}>box 3</div>
        <div className={`${classname}  `}>box 4</div>
        <div className={`${classname}`}>box 5</div>
      </div>
    </div>
  )
}
