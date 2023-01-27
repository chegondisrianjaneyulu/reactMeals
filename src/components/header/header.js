import React from 'react'
import { useSelector} from 'react-redux'
 

export default function Header() {
  const price = useSelector((store) => store.mealsPrice.price)
  

  return (
    <>
    <header className='bg-orange-500 fixed w-full shadow-sm z-10 flex items-center justify-between h-16 px-3'>
        <h1 className='text-white font-bold italic text-lg'>Delicious Meals</h1>
        {/* <button className='border-2  bg-white px-1 rounded-md'>No of items</button>
        <button>price</button> */}
        <div className='flex items-center'>
          <div className='text-white font-medium'>No of items: <span className='text-black font-semibold italic'>0</span></div>
          <div className='text-white font-medium mx-3'>Price: <span className='text-black font-semibold italic'>{price}</span></div>
        </div>
    </header>
    <div className='z-0 h-96 overflow-hidden'>
        <img className='w-full cover' alt="table full of meals" src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"/>
    </div>
    </>
  )
}
