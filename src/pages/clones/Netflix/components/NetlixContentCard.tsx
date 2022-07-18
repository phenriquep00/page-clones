interface NetflixContentCardProps {
    image: string;
}


export function NetflixContentCard(props: NetflixContentCardProps) {
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