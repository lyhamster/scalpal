type prop = {
    label: string,
}
const Tag = ({label} : prop) => {
    return <div className="text-black font-futura font-bold bg-lime-400 py-[2px] px-[10px] rounded-[35px]">
        {label}
    </div>
}

export default Tag;