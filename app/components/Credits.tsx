import React from 'react'
import Heading from './Heading';
import Bodytext from './Bodytext';
import GallerySlider from './GallerySlider';



const CreditList2 = {
    "Storymap team": [
        {
            name: "Jaya Peter",
            role: "",
            url: ""
        },
        {
            name: "Teerath Rawat",
            role: "",
            url: ""
        },
        {
            name: "Sreekuttan V N",
            role: "",
            url: ""
        },
        {
            name: "Radha Patkar",
            role: "",
            url: ""
        },
        {
            name: "Jayshree Borgohain",
            role: "",
            url: ""
        },
        {
            name: "Maithreyi M.R.",
            role: " ",
            url: ""
        },
        
        {
            name: "Chetan Toliya",
            role: " ",
            url: ""
        },

    ],
    "Website Developer ": [
        {
            name: "Sreekuttan V. N.",
            role: "",
            url: ""
        },

    ],

    "Illustrations": [
        {
            name: "Radha Patkar",
            role: "",
            url: ""
        },


    ],


    "Videos": [
        {
            name: "Jayshree Borgohain",
            role: "",
            url: ""
        },
        {
            name: "Jaya Peter",
            role: "",
            url: ""
        },


    ],
    "Content and Edits": [
        
        {
            name: "Jaya Peter",
            role: "",
            url: ""
        },
        {
            name: "Maithreyi M.R.",
            role: " ",
            url: ""
        },
        {
            name: "Soubadra Devy",
            role: "",
            url: ""
        },
        {
            name: "Priyanka Jamwal",
            role: "",
            url: ""
        },
        {
            name: "Jonathan Seefeldt",
            role: "",
            url: ""
        },


    ],
    "Data support": [
        {
            name: "Sunil G.M.",
            role: "",
            url: ""
        },
        {
            name: "Pavan K. Naik",
            role: "",
            url: ""
        },
        {
            name: "Soubadra Devy",
            role: "",
            url: ""
        },

        {
            name: "Jayanth Shivarame Gowda",
            role: "",
            url: ""
        },
        {
            name: "Hymavathi P.",
            role: "",
            url: ""
        },

    ],
    "Special thanks to": [
        {
            name: "Sunil G.M.",
            role: "",
            url: ""
        },
        {
            name: "Pavan K. Naik",
            role: "",
            url: ""
        },
        {
            name: "Water Lab team",
            role: "",
            url: ""
        },


    ],
}


const Credits = () => {
    const spacing = 'p-5 md:px-20 lg:px-40 md:pt-20   ';
    return (
        <div className={`bg-[#015467] ${spacing} text-white flex flex-col`}>
            <Heading customclass="text-white " text="Contributors" />
            <span className="py-2">This story map was developed in-house at Ashoka Trust for Research in Ecology and the Environment (ATREE), representing a collaborative effort to bridge the gap between rigorous environmental research and public engagement. Our team brings together diverse expertise in field ecology, water chemistry, geospatial analysis, and digital storytelling. From the laboratory to the design studio, every member of our team has contributed to bringing this narrative to your screen. Meet our dedicated team of researchers, creators, and communicators.</span>


            <div className="grid grid-cols-2 gap-4 md:gap-2 md:grid-cols-4 xl:grid-cols-5 xl:gap-5 2xl:grid-cols-7">
                {Object.entries(CreditList2).map(([teamname, team]) => (
                    <div className="pb-4" key={teamname}>

                        <div className="underline  p-2 font-medium text-md">{teamname}</div>

                        <div className="flex flex-col gap-0 p-2 flex-wrap  rounded-lg">
                            {team.map((item, index) => (
                                <div key={index} className=" p-2 pl-0 ">
                                    <a href={item.url} target="_blank" className="text-sm font-medium text-gray-300">{item.name}</a>
                                    <p className="text-sm ">{item.role}</p>

                                </div>

                            ))}
                        </div>
                    </div>

                ))}

            </div>

            <div className="w-full flex flex-col gap-5 mt-10">
                <Heading customclass="text-white " text="Gallery" />
                <div className="">
                    <GallerySlider />
                </div>


            </div>


            <div className="text-sm  flex justify-center items-center font-mono text-center pt-4 border-t border-[#c4c4c4]">© 2026 ATREE Communications</div>

        </div>

    )
}

export default Credits
