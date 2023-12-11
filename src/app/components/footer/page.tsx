import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbDevicesCode, TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

import { BiLogoTypescript } from "react-icons/bi";


export function Footer() {
    return (
        <footer className='flex w-full justify-around mb-0 bg-stone-950'>        
            <div className="p-4 w-full grid grid-cols-2 h-20 mb-0">   
                <div className="flex justify-center gap-3">   
                    <Link href="">                        
                            <TbBrandNextjs style={{background: 'black', fontSize: '2.5rem', color:'white',padding: '5px', borderRadius: '5px' }}/>                                         
                    </Link>

                    <Link href="">
                           <FaReact style={{color: 'blue', fontSize: '2.5rem', borderRadius: '50%'}}/>  
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui"> 
                            <TbBrandReactNative style={{background: 'blue', fontSize: '2.5rem', color:"white", padding: '5px', borderRadius: '5px'}} /> 
                    </Link>
                            
                    <Link href="">
                            <SiTypescript color="blue" style={{background: 'white', fontSize: '2.5rem', borderRadius: '5px' }} /> 
                    </Link>                        
                </div>
                <div className="flex justify-center self-center gap-2 text-white">                            
                    <p className="flex text-2xl ">
                        Desenvolvido por Felipe Marques 
                    </p>
                    <TbDevicesCode style={{fontSize: '2.5rem', borderRadius: '5px' }} /> 
                    
                </div>
            </div>
                {/*<DevCreate>*/}
               
        </footer>
    )
}