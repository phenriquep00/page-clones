import { NetflixProfileCards } from "./components/NetflixProfileCards";

import profile1 from './assets/profile1.png'
import profile2 from './assets/profile2.png'
import profile3 from './assets/profile3.png'
import { PlusCircle } from "phosphor-react";


export function NetflixProfilePage() {
    return (
        <div className="bg-[#141414] h-[100vh] flex flex-col">
            <header className="flex h-[67px] w-full align-middle items-center pl-14">
                <svg width="111" height="31" viewBox="0 0 111 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2628 28.5656C13.5931 28.8588 11.8939 28.9467 10.1362 29.1808L4.77506 13.4787V29.8548C3.10529 30.0305 1.58197 30.2648 0 30.4992V0.500793H4.45301L10.5463 17.5216V0.500793H15.2628V28.5656ZM24.4909 11.4865C26.3073 11.4865 29.0903 11.3986 30.7601 11.3986V16.0858C28.6801 16.0858 26.2487 16.0858 24.4909 16.1737V23.1461C27.2448 22.9704 29.9985 22.7358 32.7814 22.6479V27.1591L19.8035 28.1847V0.500793H32.7814V5.18805H24.4909V11.4865ZM50.2121 5.18816H45.3491V26.7495C43.7672 26.7495 42.1852 26.7495 40.6621 26.8079V5.18816H35.7991V0.500793H50.2123L50.2121 5.18816ZM57.8288 11.1644H64.2446V15.8515H57.8288V26.4858H53.2292V0.500793H66.3246V5.18805H57.8288V11.1644ZM73.9413 22.3844C76.6072 22.4428 79.3022 22.6482 81.9097 22.7944V27.4232C77.7205 27.1593 73.5312 26.896 69.2541 26.8079V0.500793H73.9413V22.3844ZM85.8645 27.7454C87.3585 27.8335 88.9405 27.9214 90.4638 28.0969V0.500793H85.8645V27.7454ZM111 0.500793L105.053 14.7677L111 30.4992C109.242 30.2648 107.484 29.9426 105.727 29.6496L102.358 20.9783L98.9306 28.9467C97.2311 28.6535 95.5906 28.5656 93.8918 28.3312L99.9266 14.5917L94.4775 0.500793H99.5161L102.592 8.38125L105.873 0.500793H111V0.500793Z" fill="#B9090B" />
                </svg>
            </header>

            <div className="flex flex-1 flex-col items-center align-middle justify-center">
                <h1 className="text-white text-6xl">Who's watching?</h1>
                <div className="w-10/12 h-1/2 flex flex-row gap-[50px] items-center justify-center">
                    <NetflixProfileCards image={profile1} username='pedro' />
                    <NetflixProfileCards image={profile2} username='ordep' />
                    <NetflixProfileCards image={profile3} username='roedo' />
                    <NetflixProfileCards image={profile1} username='oepdr' />
                    <div className="flex flex-col items-center w-[200px] h-[253px]">
                        <div className="w-[200px] h-[200px] flex items-center justify-center align-middle">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M60 110.625C32.0856 110.625 9.375 87.9144 9.375 60C9.375 32.0856 32.0856 9.375 60 9.375C87.9144 9.375 110.625 32.0856 110.625 60C110.625 87.9144 87.9144 110.625 60 110.625ZM85.7812 55.3079H64.6875V34.2142H55.3125V55.3079H34.2188V64.6829H55.3125V85.7767H64.6875V64.6829H85.7812V55.3079Z" fill="#6D6D6E" fill-opacity="0.7" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M60 0C76.0263 0 91.0941 6.24115 102.426 17.5735C113.759 28.9059 120 43.9737 120 60C120 76.0263 113.759 91.0941 102.426 102.426C91.0941 113.759 76.0263 120 60 120C43.9737 120 28.9059 113.759 17.5735 102.426C6.24115 91.0941 0 76.0263 0 60C0 43.9737 6.24115 28.9059 17.5735 17.5735C28.9059 6.24115 43.9737 0 60 0ZM9.375 60C9.375 87.9144 32.0856 110.625 60 110.625C87.9144 110.625 110.625 87.9144 110.625 60C110.625 32.0856 87.9144 9.375 60 9.375C32.0856 9.375 9.375 32.0856 9.375 60Z" fill="#6D6D6E" fill-opacity="0.7" />
                            </svg>
                        </div>
                        <p className="text-[#8a8a8b] text-[26px]">Add profile</p>
                    </div>
                </div>
                <div className="border-[#808080] border-2 w-[308px] h-[53px] flex items-center justify-center">
                    <a href="#" >
                        <p className="text-[#808080] text-2xl">MANAGE PROFILES</p>
                    </a>
                </div>

            </div>
        </div>
    )
}