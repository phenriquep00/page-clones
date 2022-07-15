
interface NetflixContentCarouselProps {
    category: string;
}


export function NetflixContentCarousel(props: NetflixContentCarouselProps) {
    return (
        <div className="flex flex-col md:pl-14 pl-5">
            <h1 className="font-medium text-2xl text-[#E5E5E5]">
                {props.category}
            </h1>

            <div>

            </div>
        </div>
    )
}