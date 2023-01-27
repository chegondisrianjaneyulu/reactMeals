import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback,  useState } from 'react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

export default function Button() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll:"keepSnaps",
    selectedClass:"",
    dragFree:true,
    skipSnaps:false,
  },[WheelGesturesPlugin()])
  const [showData, setShowData] = useState(false)
  const data = [
    {id: 1, name: 'slider1', onClickShowData: 'clickedSlider1'},
    {id: 2, name: 'slider2', onClickShowData: 'clickedSlider2'},
    {id: 3, name: 'slider3', onClickShowData: 'clickedSlider3'},
    {id: 4, name: 'slider4', onClickShowData: 'clickedSlider4'},
    {id: 5, name: 'slider5', onClickShowData: 'clickedSlider5'},
    {id: 6, name: 'slider6', onClickShowData: 'clickedSlider6'},
    {id: 7, name: 'slider7', onClickShowData: 'clickedSlider7'},
    {id: 8, name: 'slider8', onClickShowData: 'clickedSlider8'},
    {id: 9, name: 'slider9', onClickShowData: 'clickedSlider9'},
    {id: 10, name: 'slider10', onClickShowData: 'clickedSlider10'},
    {id: 11, name: 'slider11', onClickShowData: 'clickedSlider11'},
    {id: 12, name: 'slider12', onClickShowData: 'clickedSlider12'},
    {id: 13, name: 'slider13', onClickShowData: 'clickedSlider13'},
    {id: 14, name: 'slider14', onClickShowData: 'clickedSlider14'},
    {id: 15, name: 'slider15', onClickShowData: 'clickedSlider15'},
    {id: 16, name: 'slider16', onClickShowData: 'clickedSlider16'},
    {id: 17, name: 'slider17', onClickShowData: 'clickedSlider17'},
    {id: 18, name: 'slider18', onClickShowData: 'clickedSlider18'},
    {id: 11, name: 'slider11', onClickShowData: 'clickedSlider11'},
    {id: 12, name: 'slider12', onClickShowData: 'clickedSlider12'},
    {id: 13, name: 'slider13', onClickShowData: 'clickedSlider13'},
    {id: 14, name: 'slider14', onClickShowData: 'clickedSlider14'},
    {id: 15, name: 'slider15', onClickShowData: 'clickedSlider15'},
    {id: 16, name: 'slider16', onClickShowData: 'clickedSlider16'},
    {id: 17, name: 'slider17', onClickShowData: 'clickedSlider17'},
    {id: 18, name: 'slider18', onClickShowData: 'clickedSlider18'},
  ]
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  const showdata = useCallback(name => {
    if (emblaApi && emblaApi.clickAllowed()) {
      setShowData(prev => !prev)
      console.log('item name', name)
    }
  }, [emblaApi])

  return (
    <div className='bg-red-300 h-screen'>
    <center className='text-xl py-4 font-extrabold'>embla carousel</center> 
    <div className='bg-green-400 py-4 w-[60%]  mx-auto overflow-hidden' ref={emblaRef}>
      <div className='flex items-center gap-[15px]'>
        {data.map((item,index) => (
          <div key={index} onClick={() => showdata(item.name)} className='w-[200px] bg-gray-100 cursor-pointer'>{item.name}</div>
        ))}
      </div>
      <div className='bg-white mt-4 w-[100px] text-center'>{showData ? 'item clicked': ''}</div>
    </div>

    <div className='flex justify-center w-[400px] mx-auto mt-10'>
    <button className='bg-orange-400 p-4 rounded border-2 mr-4 border-black cursor-pointer'   onClick={scrollPrev}>Prev</button>
    <button className='bg-orange-400 p-4 rounded border-2 border-black cursor-pointer' onClick={scrollNext}>Next</button>
    </div>

  </div>
  )
}
