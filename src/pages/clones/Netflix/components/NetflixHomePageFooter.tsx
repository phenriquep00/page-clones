import { NetflixContentLinks } from "./NetflixContentLinks";
import { NetflixSocialLinks } from "./NetflixSocialLinks";

export function NetflixHomePageFooter() {
    return (
        <footer className="flex items-center justify-center w-full h-2/5 bg-[#141414]">
            <div className="flex flex-col h-full w-3/5 gap-5">
                <NetflixSocialLinks />
                <NetflixContentLinks />
            </div>
        </footer>
    )
}