import React,{useContext} from 'react'
import Switch from 'react-switch'
import Toggle from 'react-toggle'
import { ThemeContext } from '../context/ThemeContext'

const Homepage = () => {

  const {darkMode, setDarkMode} = useContext(ThemeContext)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  console.log(darkMode)

  return (
    <div className={darkMode ? 'bg-dark' : 'bg-light'}>
      <h1 className={darkMode ? 'heading-dark' : 'heading-light'}>Welcome to my headline!</h1>
      <p className={darkMode ? 'paragraph-dark' : 'paragraph-light'} className='ligma'>The Atmosphere is a transparent envelope of gases and suspended particles that surround the Earth. Without Chemical processes involving several of the atmospheric gases, life could not exist. Even the physical processes that operate in the atmosphere are of vital importance because they are responsible for the Earth's varied climates. The Atmosphere is composed almost entirely of Oxygen and Nitrogen.The Atmosphere is the source of every living thing in the world. It plays a very important role in serving the world's needs. It provides ventilation to the Earth, as the atmosphere filters the ultraviolet rays, coming from the Sun. Thus, it acts as the Earth's protective armour without which all living things in the world would die. The ozone layer is a matter of tremendous concern as it profoundly influences the environmental conditions on the planets surface. The Atmosphere provides the air we breathe, the food we eat, the water we drink and above all it supports LIFE.Atmosphere is very imperative to sustain life on Earth. To protect the atmosphere it is possible and simple, avoid polluting the air and water basically. Fight global warming by planting more trees and keeping your surrounding clean. You can reduce fuel consumption by using energy efficient appliances. We can preserve the atmosphere by practicing and encouraging good hygiene, reducing green house gases and emissions that are going into the air. Thus there are several solutions and ways that we can practice to protect the Earth's atmosphere. Effort is the key in life to your success. </p>
      <Switch
        onColor='#F3EA24'
        offColor='#333'
        onChange={toggleTheme}
        checked={darkMode} 
      />
    </div>
  )
}

export default Homepage
