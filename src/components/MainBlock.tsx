
type Prop = {
    title: string,
    children?: React.ReactNode,
    bgColor: {},
}

const MainBlock = ({title, children, bgColor} : Prop) => {
    return <div className="flex flex-col 2xl:gap-1 gap-[4px] 2xl:p-(--xl-padding) p-(--base-padding) rounded-[20px] border-white border font-futura text-lime-accent" style={bgColor}>
        <h1 className="font-bold text-[12px] text-lime-accent">{title}</h1>
        <hr />
        {children}
    </div>
}

export default MainBlock;