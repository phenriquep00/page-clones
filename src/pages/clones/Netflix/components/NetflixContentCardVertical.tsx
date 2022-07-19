interface NetflixContentCardVerticalProps {
    image: string;
}

export function NetflixContentCardVertical(props: NetflixContentCardVerticalProps) {
    return (
        <div className='w-[285px] h-[575px]'>
            <img
                className="w-full h-full"
                src={props.image}
                alt="content image"
            />
        </div>
    )
}