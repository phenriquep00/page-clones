import { NetflixContentCarousel } from "./NetflixContentCarousel";

import testImage from '../assets/testImage.png'

export function NetflixHomePageContent() {

    const testArray = [testImage, testImage, testImage, testImage, testImage, testImage, testImage, testImage]

    return (
        <div className="w-full h-auto">
            highlighted movie/series
            <NetflixContentCarousel category="Popular" images={testArray}/>
            <NetflixContentCarousel category="Popular" images={testArray}/>
            <NetflixContentCarousel category="Popular" images={testArray}/>
            <NetflixContentCarousel category="Popular" images={testArray}/>
            <NetflixContentCarousel category="Popular" images={testArray}/>
        </div>
    )
}