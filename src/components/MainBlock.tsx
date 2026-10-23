
type Prop = {
    title: string,
    children?: React.ReactNode,
    bgColor: {},
}

const MainBlock = ({title, children, bgColor} : Prop) => {
    return <div className="flex flex-col gap-[8px] p-(--spacing) rounded-[20px] border-white border font-futura text-lime-accent" style={bgColor}>
        <h1 className="font-bold text-[12px] text-lime-accent">{title}</h1>
        <hr />
        {children}
    </div>
}

export default MainBlock;