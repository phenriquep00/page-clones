import { NetflixContentLinks } from "./NetflixContentLinks";
import { NetflixSocialLinks } from "./NetflixSocialLinks";

export function NetflixHomePageFooter() {
    return (
        <footer className="flex items-center justify-center w-full h-2/5 bg-[#141414]">
            <div className="flex flex-col h-full w-3/5 gap-5">
                <NetflixSocialLinks />
                <NetflixContentLinks />
                <div className="border-[#808080] border-2 w-28 h-9 flex items-center justify-center">
                    <a href="#" >
                        <p className="text-[#808080] text-[13px]">SERVICE CODE</p>
                    </a>
                </div>
                <p className="text-[11px] text-[#808080]">{"© 1997-2021 Netflix, Inc.  {i-062d573a0ee099242}"}</p>
            </div>
        </footer>
    )
}