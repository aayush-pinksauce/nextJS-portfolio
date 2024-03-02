"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'

import { RxValueNone } from "react-icons/rx";

const Skills = () => {


    const skills =[
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        
        {
            text: "N/A",
            Icon : RxValueNone,
        },
        
    ]
  return (
    <div className=' max-w-5xl mx-auto px-8'>
        <Title text='Skills 🎯' className='flex flex-col items-center justify-center -rotate-6'/>
        <HoverEffect items={skills} />
    </div>
  )
}

export default Skills