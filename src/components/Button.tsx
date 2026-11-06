import type { MouseEventHandler } from "react";

type Props = { 
    label: string,
    onClick: MouseEventHandler,
    bgColor?: {},
}

const Button = ({label, onClick, bgColor} : Props) => {
    return <button onClick={onClick} type="submit" className="bg-lime-400 text-green-700 font-bold 2xl:p-[10px] p-[5px] xl:text-xs rounded-[8px] uppercase cursor-pointer" style={bgColor}>
        {label}
    </button>
}

export default Button;

