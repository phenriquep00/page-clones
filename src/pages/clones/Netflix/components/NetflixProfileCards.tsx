export function NetflixProfileCards(props: { image: string | undefined; username: string | null | undefined; }) {
    return (
        <a href="./netflix-home">
            <div className="flex flex-col items-center w-[200px] h-[253px]">
                <img
                    className="w-[200px] h-[200px]"
                    src={props.image}
                    alt="profile picture"
                />
                <p className="text-[#8a8a8b] text-[26px]">{props.username}</p>
            </div>
        </a>

    )
}