import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import SkillItem from './SkillItem'

import htmlImg from '../public/assets/skill-icons/html.png'
import cssImg from '../public/assets/skill-icons/css.png'
import jsImg from '../public/assets/skill-icons/javascript.png'
import reactImg from '../public/assets/skill-icons/react.png'
import tailwindImg from '../public/assets/skill-icons/tailwind.png'
import firebaseImg from '../public/assets/skill-icons/firebase.png'
import nextImg from '../public/assets/skill-icons/nextjs.png'
import nodeImg from '../public/assets/skill-icons/node.png'
import gitImg from '../public/assets/skill-icons/git.png'
import cImg from '../public/assets/skill-icons/c.png'
import cppImg from '../public/assets/skill-icons/cpp.png'
import pythonImg from '../public/assets/skill-icons/python.png'


const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] pt-16 mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6'>
                    
                    <SkillItem name='HTML' backgroundImg={htmlImg} />
                    <SkillItem name='CSS' backgroundImg={cssImg} />
                    <SkillItem name='JavaScript' backgroundImg={jsImg} />
                    <SkillItem name='React' backgroundImg={reactImg} />
                    <SkillItem name='Tailwind' backgroundImg={tailwindImg} />
                    <SkillItem name='Firebase' backgroundImg={firebaseImg} />
                    <SkillItem name='Next' backgroundImg={nextImg} />
                    <SkillItem name='Node' backgroundImg={nodeImg} />
                    <SkillItem name='Git' backgroundImg={gitImg} />
                    <SkillItem name='C' backgroundImg={cImg} />
                    <SkillItem name='C++' backgroundImg={cppImg} />
                    <SkillItem name='Python' backgroundImg={pythonImg} />

                </div>
            </div>
        </div>
    );
};

export default Skills;