import React from 'react'
import Heading from './Heading';
import Bodytext from './Bodytext';



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

    ],
     "Web designer ": [
        {
            name: "Sreekuttan V N",
            role: "",
            url: ""
        },

    ],

    "Art": [
        {
            name: "Radha Patkar",
            role: "",
            url: ""
        },
        

    ],

   
    "Images and Videos ": [
        {
            name: "Jaya Peter",
            role: "",
            url: ""
        },
        {
            name: "Jayshree Borgohain",
            role: "",
            url: ""
        },

    ],
    "Editorial inputs": [
        {
            name: "Soubadra Devy",
            role: "",
            url: ""
        },
        {
            name: "Johnathan",
            role: "",
            url: ""
        },
        {
            name: "Priyanka Jamwal",
            role: "",
            url: ""
        },

    ],
    "Data support": [
        {
            name: "Soubadra Devy",
            role: "",
            url: ""
        },
        {
            name: "Sunil G.M",
            role: "",
            url: ""
        },
        {
            name: "Pavan K. Naik",
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
            name: "Water Lab team",
            role: "",
            url: ""
        },
        {
            name: "Water Lab team",
            role: "",
            url: ""
        },
        {
            name: "Seshadri K.S.",
            role: "",
            url: ""
        },
        
    ],
}


const Credits = () => {
    const spacing = 'p-5 md:px-20 lg:px-40 md:pt-20   ';
    return (
        <div className={`bg-[#015467] ${spacing} text-white flex flex-col`}>
            <Heading customclass="text-white " text="Credits" />
            <span className="py-2">This story map was developed in-house at Ashoka Trust for Research in Ecology and the Environment (ATREE), representing a collaborative effort to bridge the gap between rigorous environmental research and public engagement. Our team brings together diverse expertise in field ecology, water chemistry, geospatial analysis, and digital storytelling. From the laboratory to the design studio, every member of our team has contributed to bringing this narrative to your screen. Meet our dedicated team of researchers, creators, and communicators.</span>
           

            <div className="flex gap-2 flex-wrap justify-between py-4">
                {Object.entries(CreditList2).map(([teamname, team]) => (
                    <div key={teamname}>

                        <div className="underline pt-2 font-medium text-md">{teamname}</div>

                        <div className="flex flex-col gap-0 pb-2 flex-wrap">
                            {team.map((item, index) => (
                                <div key={index} className=" py-2">
                                    <a href={item.url} target="_blank" className="text-sm font-medium text-gray-200">{item.name}</a>
                                    <p className="text-sm ">{item.role}</p>

                                </div>

                            ))}
                        </div>
                    </div>

                ))}

            </div>
            <div className="text-sm  flex justify-center items-center font-mono text-center pt-4 border-t border-[#c4c4c4]">@2026</div>

        </div>

    )
}

export default Credits
