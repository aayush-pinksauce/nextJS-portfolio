import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { SiYoutube } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";


const Navbar = ({className} : {className? : string}) => {

    const socials = [
        {
            link : "https://www.tiktok.com/@_pinksauce?is_from_webapp=1&sender_device=pc",
            label : "Tiktok",
            Icon : SiTiktok,
        },
        {
            link : "https://www.youtube.com/@aayushshrestha1210",
            label : "Youtube",
            Icon : SiYoutube,
        },
        {
            link : "https://www.linkedin.com/in/aayush-shrestha-43916a269/",
            label: "LinkedIn",
            Icon : SiLinkedin,
        }
    ]

  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
        <h1 className=' text-2xl font-bold underline underline-offset-7 decoration-green-500 -rotate-2'>Aayush Shrestha 🤓</h1>
        <div className=' flex items-center gap-5'>
            {socials.map((social, index) => {

                const Icon = social.Icon;

                return <Link href={social.link} key={index} aria-label={social.label} >
                    <Icon className='w-5 h-5 hover:scale-125 transition-all cursor-pointer'/>
                </Link>
            })}
        </div>
    </nav>
  )
}

export default Navbar