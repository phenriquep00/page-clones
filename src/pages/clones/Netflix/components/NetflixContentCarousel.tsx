import { CaretRight } from "phosphor-react";
import { NetflixContentCard } from "./NetlixContentCard";


interface NetflixContentCarouselProps {
    category: string;
    images: Array<string>;
}


export function NetflixContentCarousel(props: NetflixContentCarouselProps) {



    return (
        <div className="flex flex-col md:pl-14 pl-5 py-2 overflow-hidden">
            <h1 className="font-medium text-2xl text-[#E5E5E5]">
                {props.category}
            </h1>

            <div className="flex flex-nowrap flex-row gap-[5px] h-auto w-fit">
                {
                    props.images.map((image, index) => (
                        <NetflixContentCard key={index} image={image} />
                    ))
                }
                
                <div className="absolute z-40 bg-black w-[256px] h-[162px] rounded-sm bg-opacity-50 right-0 flex hover:opacity-0 cursor-pointer">
                    <CaretRight size={32} color="#ffffff" className="self-center ml-52"/>
                </div>


            </div>
        </div>
    )
}