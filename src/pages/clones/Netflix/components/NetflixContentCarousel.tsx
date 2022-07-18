import { NetflixContentCard } from "./NetlixContentCard";


interface NetflixContentCarouselProps {
    category: string;
    image: string;
}


export function NetflixContentCarousel(props: NetflixContentCarouselProps) {

    

    return (
        <div className="flex flex-col md:pl-14 pl-5 py-2">
            <h1 className="font-medium text-2xl text-[#E5E5E5]">
                {props.category}
            </h1>

            <div className="flex flex-row gap-1 w-full h-auto overflow-hidden">
                <NetflixContentCard image={props.image}/>
                <NetflixContentCard image={props.image}/>
                

            </div>
        </div>
    )
}