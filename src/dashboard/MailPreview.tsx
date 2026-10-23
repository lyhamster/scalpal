type Prop = {
    name?: string,
    mailObj: string
}

const MailPreview = ({name, mailObj}: Prop) => {
    return <div className="flex flex-col text-lime-accent font-futura text-[12px] gap-[3px]">
        <p>{name}</p>
        <div className="flex items-center gap-[8px] font-bold">
            <div className="rounded-full w-[7px] h-[7px] bg-lime-400"></div>
            <p>{mailObj}</p>
        </div>
    </div>
}

export default MailPreview;