import React from 'react'
import MealsPage from '../../screens/meals/mealsPage'
import Header from '../header/header'



export default function Mainpage() {
  return (
    <div className='bg-gray-300 pb-20'>
     <Header/>
     <MealsPage/>
     <center className='mt-5 font-extrabold text-orange-500'>FINALLY REACT REDUX TOOLKIT DONE...yeh yeh yeh yeh</center>
    </div>
  )
}
