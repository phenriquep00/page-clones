export function NetflixProfileCards(props: { image: string | undefined; username: string | null | undefined;}) {
    return (
        <a href="./netflix-home">
            <div className="flex flex-col items-center w-24 h-32 md:w-52 md:h-64" >
                <img
                    className="w-24 h-24 md:w-52 md:h-52"
                    src={props.image}
                    alt="profile picture"
                />
                <p className="text-[#8a8a8b] text-[26px]">{props.username}</p>
            </div>
        </a>

    )
}
