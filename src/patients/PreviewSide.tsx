type Prop = {
    children?: React.ReactNode, 
}

const PreviewSide = ({children} : Prop) => {
    return <div className="border-y-1 border-l border-white rounded-sm colorMixGreen p-(--spacing) flex flex-col w-[25%] after:rounded-sm">
        {children}
    </div>
}

export default PreviewSide;