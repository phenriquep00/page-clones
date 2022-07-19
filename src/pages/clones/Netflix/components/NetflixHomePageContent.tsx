import { NetflixContentCarousel } from "./NetflixContentCarousel";

import testImage from '../assets/testImage.png'
import testImage2 from '../assets/testimage2.png'
import testImage3 from '../assets/testimage3.png'
import { NetflixHighlightedContent } from "./NetflixHighlightedContent";

export function NetflixHomePageContent() {

    const testArrayStandard = [testImage, testImage, testImage, testImage, testImage, testImage, testImage, testImage]
    const testArrayVertical = [testImage2, testImage2, testImage2, testImage2, testImage2, testImage2, testImage2,]
    const testArrayTop10 = [testImage3, testImage3, testImage3, testImage3, testImage3, ]

    return (
        <div className="w-full h-auto">
            <NetflixHighlightedContent />
            <NetflixContentCarousel carouselType="standard" category="Popular" images={testArrayStandard} />
            <NetflixContentCarousel carouselType="standard" category="Popular" images={testArrayStandard} />
            <NetflixContentCarousel carouselType="standard" category="Popular" images={testArrayStandard} />
            <NetflixContentCarousel carouselType="vertical" category="Popular" images={testArrayVertical} />
            <NetflixContentCarousel carouselType="top10" category="Popular" images={testArrayTop10} />
            <NetflixContentCarousel carouselType="standard" category="Popular" images={testArrayStandard} />
            <NetflixContentCarousel carouselType="standard" category="Popular" images={testArrayStandard} />
        </div>
    )
}