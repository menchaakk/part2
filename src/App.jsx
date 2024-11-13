import { useState } from 'react'
import PropTypes from 'prop-types'

const Display = ({ counter }) => <div>{counter}</div>

Display.propTypes = {
  counter: PropTypes.number
}

const Button = ({ handleClick, text}) => (
    <button 
    onClick={handleClick}>
    {text}
    </button>
  )

Button.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string
}

const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
    <Display 
      counter={counter}
    />
    <Button
      handleClick={increaseByOne}
      text='Plus'
    />
    <Button 
      handleClick={setToZero} 
      text='Zero'
    />
    <Button 
      handleClick={decreaseByOne} 
      text='Minus'
    />
    </div>
  )
}

export default App
