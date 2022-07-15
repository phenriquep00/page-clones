import { NetflixHomePageContent } from "./components/NetflixHomePageContent";
import { NetflixHomePageFooter } from "./components/NetflixHomePageFooter";
import { NetflixHomePageHeader } from "./components/NetflixHomePageHeader";

interface NetflixHomePageProps {
    username: string;
}

export function NetflixHomePage(props: NetflixHomePageProps) {
    return (
        <div className="bg-[#141414] h-[100vh] w-full flex flex-col">
            <NetflixHomePageHeader />
            <NetflixHomePageContent />
            <NetflixHomePageFooter />
        </div>
    )
}