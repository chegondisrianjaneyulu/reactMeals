import React from 'react'
import { useDispatch } from 'react-redux'
import { addMealsPrice } from '../../redux/reducers';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Udupi',
      description: 'Dosa Dip, sweet',
      price: 70.01,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'Office meals',
      price: 125.56,
    },
    {
      id: 'm3',
      name: 'Aarogya ahaara',
      description: 'South meals',
      price: 99.99,
    },
    {
      id: 'm4',
      name: 'Bidar Dum Biryani',
      description: 'Dum Biryani Half',
      price: 90.01,
    },
];

export default function AvailableMeals() {
  const dispatch = useDispatch()

  return (
    <ul className='bg-white mx-auto w-[500px] rounded-md p-2'>
      {DUMMY_MEALS.map((item, index) => (
        <>
        <li key={index} className='my-2 flex items-center justify-between  border-b'>
         <div>
          <h6 className='font-semibold italic text-black'>{item.name}</h6>
          <p className='text-neutral-700'>{item.description}</p>
          <p className='text-orange-500 italic font-medium'>{item.price}</p>
         </div>
          <div>
            <button onClick={() => dispatch(addMealsPrice(item.price))} className='bg-orange-500 hover:bg-orange-600 text-white p-1.5 hover:font-semibold rounded-sm'>Add</button>
          </div>
        </li>
        </>
      ))}
    </ul>
  )
}
