import Header from './Header.jsx'
import { Chevron } from '../assets/chevron'
import { Database } from '../assets/database'
import { Figma } from '../assets/figma'
import { Illustrator } from '../assets/illustrator'
import { Nodejs } from '../assets/node-js'
import { Photoshop } from '../assets/photoshop'
import { React } from '../assets/react'
import { Tailwind } from '../assets/tailwind'
import { Wordpress } from '../assets/wordpress'

function Competences() {
    return (
        <>
            <Header titre='Compétences' />
            <section className="h-full flex flex-col sm:flex-row justify-center sm:justify-around items-center mt-16">
                <section className='w-4/5 sm:w-auto h-36 sm:h-3/5 flex sm:flex-col justify-around opacity'>
                    <div className='w-36 h-full sm:h-auto flex flex-col justify-center items-center'>
                        <span className='h-full ease-in-out duration-300 hover:scale-125'><Photoshop/></span>
                        <p className='text-2xl mt-5'>Photoshop</p>
                    </div>
                    <div className='w-36 h-full sm:h-auto flex flex-col justify-center items-center'>
                        <span className='h-full ease-in-out duration-300 hover:scale-125'><React/></span>
                        <p className='text-2xl mt-5'>React</p>
                    </div>
                    <div className='w-36 h-full sm:h-auto flex flex-col justify-center items-center'>
                        <span className='h-full ease-in-out duration-300 hover:scale-125'><Nodejs/></span>
                        <p className='text-2xl mt-5'>NodeJS</p>
                    </div>
                    <div className='w-36 h-full sm:h-auto flex flex-col justify-center items-center'>
                        <span className='h-full ease-in-out duration-300 hover:scale-125'><Tailwind/></span>
                        <p className='text-2xl mt-5'>Tailwind</p>
                    </div>
                </section>
                <section className='w-4/5 sm:w-auto h-36 sm:h-3/5 flex sm:flex-col justify-around opacity mt-20 sm:mt-0'>
                    <div className='w-36 h-full sm:h-auto flex flex-col justify-center items-center'>
                        <span className='h-full ease-in-out duration-300 hover:scale-125'><Figma/></span>
                        <p className='text-2xl mt-5'>Figma</p>
                    </div>
                    <div className='w-36 h-full sm:h-auto flex flex-col justify-center items-center'>
                        <span className='h-full ease-in-out duration-300 hover:scale-125'><Database/></span>
                        <p className='text-2xl mt-5'>MySQL</p>
                    </div>
                    <div className='w-36 h-full sm:h-auto flex flex-col justify-center items-center'>
                        <span className='h-full ease-in-out duration-300 hover:scale-125'><Wordpress/></span>
                        <p className='text-2xl mt-5'>Wordpress</p>
                    </div>
                    <div className='w-36 h-full sm:h-auto flex flex-col justify-center items-center'>
                        <span className='h-full ease-in-out duration-300 hover:scale-125'><Illustrator/></span>
                        <p className='text-2xl mt-5'>Illustrator</p>
                    </div>
                </section>
            </section>    
        </>
    );
}

export default Competences;