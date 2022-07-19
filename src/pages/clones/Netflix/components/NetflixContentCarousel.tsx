import { CaretRight } from "phosphor-react";
import { NetflixContentCardTop10 } from "./NetflixContentCardTop10";
import { NetflixContentCardVertical } from "./NetflixContentCardVertical";
import { NetflixContentCardStandard } from "./NetlixContentCardStandard";


interface NetflixContentCarouselProps {
    category: string;
    images: Array<string>;
    carouselType: string;
}


export function NetflixContentCarousel(props: NetflixContentCarouselProps) {



    return (
        <div className="flex flex-col md:pl-14 pl-5 py-2 overflow-hidden">
            <h1 className="font-medium text-2xl text-[#E5E5E5] pb-2">
                {props.category}
            </h1>

            <div className="flex flex-nowrap flex-row gap-[5px] h-auto w-fit">
                {
                    props.carouselType === 'standard'
                        ?
                        props.images.map((image, index) => (
                            <NetflixContentCardStandard key={index} image={image} />
                        ))
                        :
                        props.carouselType === 'vertical'
                            ?
                            props.images.map((image, index) => (
                                <NetflixContentCardVertical key={index} image={image} />
                            ))
                            :
                            props.images.map((image, index) => (
                                <NetflixContentCardTop10 key={index} image={image} rank={String(index)}/>
                            ))
                }

                {
                    props.carouselType === 'standard'
                        ?
                        (
                            <div className="absolute z-40 bg-black w-[256px] h-[162px] rounded-sm bg-opacity-50 right-0 flex hover:opacity-0 cursor-pointer">
                                <CaretRight size={32} color="#ffffff" className="self-center ml-52" />
                            </div>
                        )
                        :
                        props.carouselType === 'vertical'
                            ?
                            (
                                <div className="absolute z-40 bg-black w-[256px] h-[575px] rounded-sm bg-opacity-50 right-0 flex hover:opacity-0 cursor-pointer">
                                    <CaretRight size={32} color="#ffffff" className="self-center ml-52" />
                                </div>
                            )
                            :
                            (
                                <div className="absolute z-40 bg-black w-[256px] h-[205px] rounded-sm bg-opacity-50 right-0 flex hover:opacity-0 cursor-pointer">
                                    <CaretRight size={32} color="#ffffff" className="self-center ml-52" />
                                </div>
                            )
                }
            </div>
        </div>
    )
}