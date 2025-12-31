import { ReactNode } from "react"

type probs={
    text:ReactNode,
    customclass?:string

}

const Bodytext = ({text, customclass="text-gray-700"}:probs) => {

  return (
    <div className="w-full pt-5">
        <h1 className={`text-sm md:text-lg leading-7  ${customclass}`}>{text}</h1>
      
    </div>
  )
}

export default Bodytext