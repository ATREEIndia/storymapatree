import React from 'react'

type probs={
    text:string
    customclass?:string
}

const Heading = ({text,customclass="color-b"}:probs) => {

  return (
    <div className="w-full ">
        <h1 className={`text-xl md:text-3xl font-extrabold  ${customclass}`}>{text}</h1>
      
    </div>
  )
}

export default Heading
