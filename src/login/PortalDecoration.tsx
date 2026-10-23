import tinyLogo from "@/images/tiny_logo.svg"
const PortalDecoration = () => {
    return <div className="relative rounded-[20px] bg-lime-400 radialDecoration w-full h-full">
        <img className="absolute bottom-[5%] left-[5%]" src={tinyLogo} alt=""/>
    </div>
}

export default PortalDecoration;