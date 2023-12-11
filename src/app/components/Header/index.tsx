import Link from "next/link";
import { FaLinkedinIn, FaReact, FaWhatsapp } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin, BiLogoTypescript } from "react-icons/bi";
import Image from 'next/image'
export default function Header() {
    return (
        <header className='w-full h-20 justify-around flex fixed bg-stone-950 align-middle text-white'>
        <div className='flex gap-3'>
          <div className='w-20 h-20'>
            <img className="p-2 w-20 h-20 rounded-full" src='https://github.com/feliippeee.png' />
          </div>
          <div className="flex flex-col justify-center items-center">
          <h1>Felipe Marques</h1> 
            <h2>Desenvolvedor Front-end</h2>
          </div>
        </div>
        <nav className="self-center">
          <ul className='flex gap-2'>    
                    
            <li>
                <Link href="">                        
                    <BiLogoGithub  style={{background: 'black', border: '1px solid white', fontSize: '2.5rem', color:'white', padding: '5px', borderRadius: '5px' }}/>
                </Link>
            </li>
            <li> 
                <Link href=""> 
                      <BiLogoLinkedin style={{background: 'blue', color: 'white', fontSize: '2.5rem', borderRadius: '5px'}}/>  
                </Link>
            </li>
            <li>
                  <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                      <FaWhatsapp style={{ background: 'green', color: 'white', fontSize: '2.5rem', padding: '5px', borderRadius: '5px'}} /> 
                  </Link>
            </li>
            <li> 
              <Link href="">
                    <BiLogoGmail  style={{background: 'white', color:'red', fontSize: '2.5rem', borderRadius: '5px' }} /> 
              </Link> 
         </li>
          </ul>
        </nav>

      </header>
    )
}