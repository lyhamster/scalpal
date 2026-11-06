const Block = ({content} : {content : string}) => {
    return <div className="bg-black text-creme 2xl:text-base text-xs rounded-[8px] p-[10px] font-futura">
        {content}
    </div>
}

export default Block;