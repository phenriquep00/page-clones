interface NetflixContentCardStandardProps {
    image: string;
}


export function NetflixContentCardStandard(props: NetflixContentCardStandardProps) {
    return (
        <div className='w-[285px] h-[171px]'>
            <img
                className="w-full h-full"
                src={props.image}
                alt="content image"
            />
        </div>
    )
}