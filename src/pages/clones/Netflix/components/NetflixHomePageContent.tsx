import { NetflixContentCarousel } from "./NetflixContentCarousel";

import testImage from '../assets/testImage.png'

export function NetflixHomePageContent() {
    return (
        <div className="w-full h-auto">
            highlighted movie/series
            <NetflixContentCarousel category="Popular" image={testImage}/>
            <NetflixContentCarousel category="Original" image=""/>
            <NetflixContentCarousel category="New" image=""/>
        </div>
    )
}