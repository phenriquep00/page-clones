import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'



interface NetflixContentCardTop10Props {
    image: string;
    rank: string;
}

export function NetflixContentCardTop10(props: NetflixContentCardTop10Props) {

    

    return (
        <div className='w-[285px] h-[205px] flex flex-row hover:cursor-pointer hover:w-[300px] hover:h-[235px] transition-all'>
            <div className="flex items-end w-1/2 h-full align-middle">
                {
                    props.rank == '0'
                        ?
                        <img src={image1} alt="1" className='ml-16'/>
                        :
                        props.rank == '1'
                            ?
                            <img src={image2} alt="2" className='ml-2'/>
                            :
                            props.rank == '2'
                                ?
                                <img src={image3} alt="3" className='ml-2'/>
                                :
                                props.rank == '3'
                                    ?
                                    <img src={image4} alt="4" className='ml-2'/>
                                    :
                                    <img src={image5} alt="5" className='ml-2'/>
                }
            </div>
            <img
                className="w-1/2 h-full"
                src={props.image}
                alt="content image"
            />
        </div>
    )
}