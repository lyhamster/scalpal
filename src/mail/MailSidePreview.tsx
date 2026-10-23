type prop = {
    children: React.ReactNode,
}

const MailSidePreview = ({children} : prop) => {
    return <div className="colorMixGreen min-w-[21%] max-w-[20%] after:rounded-sm" style={{borderRadius: "20px 0px 0px 20px"}}>
        {children}
    </div>
}

export default MailSidePreview;