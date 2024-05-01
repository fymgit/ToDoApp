import React, { useEffect, useState, useContext } from 'react'

import { Search } from 'lucide-react'

import { DateContext } from '../../context/DateContext';

const Navbar = () => {

  
  const [time, setTime] = useState('')

  const { date, weekDay } = useContext(DateContext)

  const [temp, setTemp] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const [location, setLocation] = useState('Sao Paulo')
  const [citySearch, setCitySearch] = useState('')

  useEffect(() => {
   
    setInterval(() => {
        let time = new Date().toLocaleTimeString()
        setTime(time)
    }, 1000)
    
  }, [])
  
  useEffect(() => {
    const apiKey = "a29dc251276313c16462b49e130db8ba"
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=metric&lang=pt_br`

    const getData = async () => {
        const response = await fetch(apiURL)
        const data = await response.json()
        
        console.log(data);
        const weatherDesc = () => {
          const desc = data.weather[0].description
          const firstLetter = desc.charAt(0).toUpperCase()
          const sliced = desc.slice(1)
          setDescription(firstLetter+sliced)
        }
        weatherDesc()  

        setCity(data.name)
        setTemp(data.main.temp)
        setCountry(data.sys.country)
    }
    getData()

  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!citySearch) {
      return
    }
    setLocation(citySearch)
    setCitySearch('')
  }

  return (
    <div className='w-full flex justify-between'>
        <div className="info_header w-1/2 mb-8 ">
          <h1 className='text-[40px] font-semibold mb-4 tracking-wider'>Let's Do</h1>
          <p className='text-[20px]'>{date}</p>
          <p className='text-[20px]'>{weekDay}</p>
          <p className='text-[20px]'>{time}</p>
        </div>
        <div className="temp_header w-1/2 mt-3.5">
          <form onSubmit={handleSubmit}>
              <label className='flex' htmlFor="city">
                  <input className='bg-slate-300 text-slate-700 rounded-l p-1' style={{border: 0, outline: 0}} type="text" id='city' name='city' placeholder='Procure a cidade...' requested onChange={(e) => setCitySearch(e.target.value)} value={citySearch}/>
                  <button className='bg-slate-300 rounded-r px-1 text-slate-500'>
                    <Search size={18} />
                  </button>
              </label>
          </form>
          {!location ? (
              <div className='weather_info mt-3'>
                  <p>Procure uma cidade.</p>
              </div>
          ) : (
              <div className='weather_info'>
                  <div className='mt-3 mb-1 text-[20px]' >
                    <p className='inline mr-2'>{city} ,</p>
                    <span>{country}</span>
                  </div>
                  <span className='text-[18px]'>{temp} &#8451; , {description}</span>
              </div>
          )}
        </div>
        <hr/>
    </div>
  )
}

export default Navbar