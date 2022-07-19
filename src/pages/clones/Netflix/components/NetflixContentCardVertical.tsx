interface NetflixContentCardVerticalProps {
    image: string;
}

export function NetflixContentCardVertical(props: NetflixContentCardVerticalProps) {
    return (
        <div className='w-[285px] h-[575px]  hover:cursor-pointer hover:w-[300px] hover:h-[600px] transition-all'>
            <img
                className="w-full h-full"
                src={props.image}
                alt="content image"
            />
        </div>
    )
}