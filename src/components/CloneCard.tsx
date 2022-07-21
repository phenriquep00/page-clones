interface CloneCardProps {
    name: string;
    path: string;
    img: string;

}


export function CloneCard(props: CloneCardProps) {
    return (
        <a href={props.path}>
            <div className="flex flex-col w-60 h-72 rounded-2xl group">

                <div className="w-full h-5/6 bg-gray-300 rounded-t-2xl">
                    <img src={props.img} alt="clone image" className="w-fit h-fit"/>

                </div>
                <div className="flex h-1/6 bg-gray-700 justify-center content-center border-b-2 border-gray-900 rounded-b-2xl items-center text-gray-300">
                    {props.name}
                </div>

            </div>
        </a>
    )
}