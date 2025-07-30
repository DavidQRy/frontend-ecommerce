import { cn } from "@/lib/utils"
import React from "react"

interface IconButtonProps {
    onClick: () => void,
    icon: React.ReactElement,
    className?: string
}

const IconButton = (props: IconButtonProps) => {
  return (
    <button 
    onClick={props.onClick} 
    className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition", props.className)}> 
        {props.icon}
    </button>
  )
}

export default IconButton