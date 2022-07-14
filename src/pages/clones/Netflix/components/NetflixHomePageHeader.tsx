import { Bell, CaretDown, Gift, MagnifyingGlass } from "phosphor-react";
import black_white from '../assets/black_white.png'

export function NetflixHomePageHeader() {

    return (
        <header className="flex h-20 w-full align-middle items-center px-14 flex-row justify-between">
            <div className="flex flex-row gap-12"> {/* HeaderLeft */}
                <svg width="111" height="31" viewBox="0 0 111 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2628 28.5656C13.5931 28.8588 11.8939 28.9467 10.1362 29.1808L4.77506 13.4787V29.8548C3.10529 30.0305 1.58197 30.2648 0 30.4992V0.500793H4.45301L10.5463 17.5216V0.500793H15.2628V28.5656ZM24.4909 11.4865C26.3073 11.4865 29.0903 11.3986 30.7601 11.3986V16.0858C28.6801 16.0858 26.2487 16.0858 24.4909 16.1737V23.1461C27.2448 22.9704 29.9985 22.7358 32.7814 22.6479V27.1591L19.8035 28.1847V0.500793H32.7814V5.18805H24.4909V11.4865ZM50.2121 5.18816H45.3491V26.7495C43.7672 26.7495 42.1852 26.7495 40.6621 26.8079V5.18816H35.7991V0.500793H50.2123L50.2121 5.18816ZM57.8288 11.1644H64.2446V15.8515H57.8288V26.4858H53.2292V0.500793H66.3246V5.18805H57.8288V11.1644ZM73.9413 22.3844C76.6072 22.4428 79.3022 22.6482 81.9097 22.7944V27.4232C77.7205 27.1593 73.5312 26.896 69.2541 26.8079V0.500793H73.9413V22.3844ZM85.8645 27.7454C87.3585 27.8335 88.9405 27.9214 90.4638 28.0969V0.500793H85.8645V27.7454ZM111 0.500793L105.053 14.7677L111 30.4992C109.242 30.2648 107.484 29.9426 105.727 29.6496L102.358 20.9783L98.9306 28.9467C97.2311 28.6535 95.5906 28.5656 93.8918 28.3312L99.9266 14.5917L94.4775 0.500793H99.5161L102.592 8.38125L105.873 0.500793H111V0.500793Z" fill="#B9090B" />
                </svg>

                <div className="flex flex-row gap-5 text-[14px] text-white font-medium align-middle mt-1"> {/* MenuItems */}
                    <p className="font-black">Username</p>
                    <p>Series</p>
                    <p>Movies</p>
                    <p>New and Popular</p>
                    <p>Watchlist</p>
                </div>
            </div>

            <div className="flex flex-row gap-5 text-white text-[14px] align-middle h-8 justify-center"> {/* HeaderRight */}
                <div className="mt-1 flex flex-row gap-5">
                    <MagnifyingGlass size={20} weight='bold' />
                    <p>pedro</p>
                    <Gift size={20} />
                    <Bell size={20} weight='fill' />
                </div>

                <div className="flex flex-row gap-3">
                    <img src={black_white} alt="black and white squares" className="pr-3" />
                    <CaretDown size={20} color="#ffffff" weight="fill" />
                </div>

            </div>

        </header>
    )
}
