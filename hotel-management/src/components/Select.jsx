
import React,{useId} from 'react'

const Select = ({
    options = [],
    label,
    className= "",
    ...props
},ref) => {
    const id = useId()
  return (
    <div >
      {label && <label  className='inline-block mb-1 pl-1 font-semibold' htmlFor={id}>{label}</label>}
      <select id={id} {...props}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white
        text-black outline-none focus:bg-gray-50
        duration-200 border  ${className}`}
      >
        {options?.map((option)=> <option className=' text-black font-semibold rounded-2xl' key={option} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)