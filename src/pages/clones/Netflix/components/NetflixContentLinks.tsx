const links = [
    ['Audio and Subtitles', 'Media Center', 'Security', 'Contact us'],
    ['Audio Description', 'Investor Relations', 'Legal Provisions'],
    ['Help center', 'Job Opportunities', 'Cookie Preferences'],
    ['Gift Cards', 'Terms of Use', 'Corporate Information']
    ]


export function NetflixContentLinks() {
    return (
        <div className="flex flex-row gap-[15%] items-center text-[#D9D9D9] text-[13px]">
            {
                links.map((link_col, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                        {
                            link_col.map((link, i) => (
                                <a href="#" key={i}> {link} </a>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}