import { NetflixContentCarousel } from "./NetflixContentCarousel";

export function NetflixHomePageContent() {
    return (
        <div className="w-full h-auto">
            highlighted movie/series
            <NetflixContentCarousel category="Popular"/>
            <NetflixContentCarousel category="Original"/>
            <NetflixContentCarousel category="New"/>
        </div>
    )
}