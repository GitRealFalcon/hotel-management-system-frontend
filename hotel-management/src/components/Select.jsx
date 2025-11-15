
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
      {label && <label  className='inline-block mb-1 text-gray-400 pl-1 font-semibold' htmlFor={id}>{label}</label>}
      <select id={id} {...props}
      ref={ref}
      className={`px-3 py-2 rounded-lg 
        dark:text-[var(--text-primary)]  text-[#1A202C] outline-none 
        duration-200 border  ${className}`}
      >
        {options?.map((option)=> <option className=' dark:text-[var(--text-primary)] dark:bg-[var(--bg-secondry)] bg-[#FFFFFF] text-[#1A202C] font-semibold rounded-2xl' key={option} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)