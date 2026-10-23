import type { MouseEventHandler } from "react";

type Props = { 
    label: string,
    onClick: MouseEventHandler,
    bgColor?: {},
}

const Button = ({label, onClick, bgColor} : Props) => {
    return <button onClick={onClick} type="submit" className="bg-lime-400 text-green-700 font-bold p-[10px] rounded-[8px] uppercase cursor-pointer" style={bgColor}>
        {label}
    </button>
}

export default Button;

