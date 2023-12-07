/* eslint-disable react/jsx-no-target-blank */
import './Button.css'

const Button = (props)=> {
  return (
    <button className='button-container'>
      {props.children}
    </button>
  )
}
export default Button
