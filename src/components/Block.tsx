const Block = ({content} : {content : string}) => {
    return <div className="bg-black text-creme text-[12px] rounded-[8px] p-[10px] font-futura text-[12px]">
        {content}
    </div>
}

export default Block;