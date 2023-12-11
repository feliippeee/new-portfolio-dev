import Link from "next/link";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
    return (

        <>
            <div className='min-h-screen p-8 mt-9 grid grid-cols-1 gap-2'>
                <div className="bg-zinc-400 p-2 shadow-md rounded-md grid grid-cols-about gap-2">
                        <div className="col-span-2 text-lg pt-4 font-medium tracking-widest p-12 leading-loose shadow-2xl shadow-gray-800 rounded-md">
                                <h2 className="bg-zinc-500 rounded-sm text-3xl font-bold p-4 mb-2 text-center uppercase">Sobre mim:</h2>
                                <div className="bg-zinc-400 p-4 gap-2 rounded-md">                            
                                    <p>
                                        Sou o Felipe Marques, um Desenvolvedor Front End Junior 
                                        apaixonado por criar experiências incríveis para os usuários. 
                                        Estou em busca de novas oportunidades que me permitam aplicar 
                                        minhas habilidades e conhecimentos.
                                    </p>
                                    <p>
                                        💻 Com mais de 2 anos de experiência em Desenvolvimento
                                        Front End.
                                    </p>
                                    <p>
                                        🚀 Constantemente atualizado com as últimas tendências e melhores práticas, 
                                        estou sempre em busca de aprender novas tecnologias para aprimorar meu trabalho.
                                    </p>
                                    <p>
                                        🌐 Além disso, possuo conhecimentos básicos em Node.js, o que me permite colaborar 
                                        de forma eficaz em projetos full-stack.
                                    </p> 
                                    <p>
                                        ✨ Sou movido pelo desafio de criar interfaces otimizadas e intuitivas, 
                                        acreditando no poder de uma experiência do usuário excepcional para o 
                                        sucesso de qualquer projeto.
                                    </p>
                                
                                    <p>
                                        Se você está em busca de um desenvolvedor comprometido, apaixonado e disposto 
                                        a contribuir para o sucesso de sua empresa, estou pronto para enfrentar 
                                        novos desafios. Vamos trabalhar juntos? 👨‍💻

                                    </p>
                                    <p className="flex flex-col pt-4">
                                        <ul className="flex justify-around no-underline">
                                        <li>
                                            <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                                                <FaWhatsapp style={{ background: 'green', color: 'white', fontSize: '3.5rem', padding: '5px', borderRadius: '5px'}} /> 
                                            </Link>
                                        </li> 

                                            <li> 
                                                <Link href=""> 
                                                    <BiLogoLinkedin style={{background: 'blue', color: 'white', fontSize: '3.5rem', borderRadius: '5px'}}/>  
                                                </Link>
                                            </li>
                                            <li> 
                                                <Link href="">
                                                        <BiLogoGmail  style={{background: 'white', color:'red', fontSize: '3.5rem', borderRadius: '5px' }} /> 
                                                </Link> 
                                            </li>
                                            <li>
                                                <Link href="">                        
                                                    <BiLogoGithub  style={{background: 'black', border: '1px solid white', fontSize: '3.5rem', color:'white', padding: '5px', borderRadius: '5px' }}/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </p>
                            </div>
                        </div>

                                    <div className="bg-zinc-400 p-4 shadow-md rounded-md grid grid-cols-1 gap-2">                      
                                        <h2 className="bg-zinc-500 rounded-sm text-3xl font-bold p-2 mb-2 text-center uppercase">Tecnologias</h2>
                                        <ul className="grid grid-cols-1 gap-4 no-underline text-center uppercase text-1xl">                                  

                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">Javascript</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">ReactJS</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">React Native</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">TypeScript</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">NextJS</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">TailwindCSS</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">Styled Components</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">Perfomance</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">Api Rest</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">Yup</li>
                                            <li className="p-4  shadow-2xl shadow-gray-800 rounded-md">Testes unitários</li>
                                        </ul>
                                    </div>

                </div>
            </div>
            {/* 
                        <div className="grid grid-cols-1 p-8 shadow-md rounded-md">
                                <div className="w-full p-8 flex justify-center leading-loose shadow-2xl shadow-gray-700 rounded-md ">
                                        
                                <div className="w-full  flex flex-col col-span-2 text-lg font-medium tracking-widest p-40 ">
                                    <h2 className="text-3xl font-bold p-4 text-center">O que estou estudando?:</h2>
                                    <p>
                                        Atualmente sou aluno da fatec jundiaí, onde estou cursando superior em Sistemas Embarcados.
                                    </p>
                                    <p>
                                        🚀 <b>Você sabe o que são "Sistemas Embarcados"?</b>O termo provoca muita confusão, 
                                        pois não os reconhecemos assim, apesar de estamos cercados por eles.
                                        Um #SistemaEmbarcado é um sistema eletrônico presente em aparelhos, máquinas ou veículos para facilitar seu uso,
                                        melhorar ou completar seu funcionamento, tornando-o mais simples, seguro e conveniente para as pessoas.
                                    </p>
                                    <p>
                                        Por exemplo, eletrodomésticos como geladeiras, aparelhos de ar condicionado ou fritadeiras elétricas, 
                                        podem funcionar praticamente sem componentes eletrônicos. No entanto, se forem incluídos alguns sensores
                                        e um controle eletrônico, sua operação pode ser melhorada com uma interface mais amigável, 
                                        modos diferentes de funcionamento, temporização e alarmes (de conveniência e de atenção), 
                                        além da redução do consumo de energia, monitoramento e operação remotas.
                                    </p>
                                    <img className="w-full" src="https://media.istockphoto.com/id/1349338733/pt/foto/future-technology-3d-concept-automated-retail-warehouse-agv-robots-with-infographics.webp?b=1&s=170667a&w=0&k=20&c=4o6qPpgNDJJfSsC6jmBoo0mE8kxOu3o0_aezOrnstUY=" alt="" />
                                    <p>
                                        São os componentes eletrônicos agora "embutidos" nestes aparelhos os responsáveis por aperfeiçoar seu funcionamento. 

                                        Outro exemplo são os automóveis, cuja grande maioria até a década de 1980 praticamente não continha dispositivos 
                                        eletrônicos para auxiliar seu funcionamento. Hoje, são muitos os sistemas eletrônicos presentes mesmo em 
                                        veículos mais baratos, como injeção eletrônica, airbag, ABS (antilock braking system), 
                                        ESP (electronic stability program). Estes e outros sistemas presentes num automóvel, 
                                        são considerados sistemas "embarcados" ou "embutidos".
                                        </p>
                                        <img className="w-full" src="https://media.istockphoto.com/id/1244476218/pt/foto/futuristic-vehicle-and-graphical-user-interface-intelligent-car-connected-car-internet-of.jpg?s=612x612&w=0&k=20&c=A_-BIkdzxUgkls3LWYdTCSF3bGnUhW26kLgaABxSRag=" alt="" />
                                        <p>                                        
                                        Assim, os sistemas embarcados são uma classe de sistemas eletrônicos, geralmente dotados 
                                        de microcontroladores, que podem ser programados para melhorar o funcionamento de 
                                        praticamente qualquer coisa: eletrodomésticos, eletroportáteis, automóveis, aeronaves, 
                                        drones, embarcações, elevadores, satélites, além de sistemas de automação residencial e comercial.

                                        E a #tecnologia dos sistemas embarcados ficam ainda mais interessantes quando são integrados entre si, 
                                        ou conectados à internet, como nas aplicações de #IoT - Internet das Coisas. 
                                        São muitos os exemplos de sistemas embarcados que facilitam muito o dia-a-dias das pessoas, 
                                        como as tags de pedágio, estacionamento e bagagens; os cartões de crédito/débito que funcionam por 
                                        aproximação; os assistentes pessoais e dispositivos inteligentes para residências; e muito mais. 
                                        Isto tudo sem mencionar o potencial para automação avançada, requerida na Indústria 4.0 e também no agronegócio.
                                    </p>                    
                                <img className="w-full" src="https://media.istockphoto.com/id/898449496/pt/foto/agriculture-drone-fly-to-sprayed-fertilizer-on-the-green-tea-fie.jpg?s=1024x1024&w=is&k=20&c=eAkXQI6THg88A6Cp4bxoC1zgcUAnzmQeRsiYDRvSAKY=" alt="" />
                                
                                </div>
                                */}
                            
                        {/* <div className="bg-zinc-300 grid grid-cols-1 p-4 shadow-md rounded-md">                  
                
                                <img className="w-full h-full" src="https://media.istockphoto.com/id/1349338733/pt/foto/future-technology-3d-concept-automated-retail-warehouse-agv-robots-with-infographics.webp?b=1&s=170667a&w=0&k=20&c=4o6qPpgNDJJfSsC6jmBoo0mE8kxOu3o0_aezOrnstUY=" alt="" />
                                
                                
                                <img className="w-full h-full" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyb250JTIwZW5kfGVufDB8fDB8fHww" alt="" />
                                <img className="w-full h-full" src="https://th.bing.com/th/id/R.dc124af7316bfbde07970d9daa7b1efd?rik=FSxvgh%2blZXqe%2bw&riu=http%3a%2f%2fwww.caglarcivata.com.tr%2fbeyaz.jpeg&ehk=7VYE2ETqB4JTESmqWqT7xVZYfd16X8ktuM8EydZI4hM%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                <img className="w-full h-full" src="https://media.istockphoto.com/id/1349338733/pt/foto/future-technology-3d-concept-automated-retail-warehouse-agv-robots-with-infographics.webp?b=1&s=170667a&w=0&k=20&c=4o6qPpgNDJJfSsC6jmBoo0mE8kxOu3o0_aezOrnstUY=" alt="" />
                                
                            </div>



                             <div className=' min-h-screen p-1  bg-zinc-300 gap-1shadow-md rounded-md'>
                         <div className="w-full h-full grid grid-cols-1 rounded-m">
                            <img className="w-full h-full" src="https://www.bing.com/th/id/OGC.03a4a5f034bf0bafa661fd8a8aabedc8?pid=1.7&rurl=https%3a%2f%2fgifs.eco.br%2fwp-content%2fuploads%2f2022%2f11%2fgifs-de-programador-29.gif&ehk=ZEWpQ1oAtNzmuFGiKWVUoD1%2bPxhhsb9GnVF5C%2bTgpJ8%3d" alt="" />
                            <img className="w-full h-full" src="https://th.bing.com/th/id/OIP.gW2yaM0YOcHCjYZ0_QV7-gHaFj?rs=1&pid=ImgDetMain" alt="" />
                            <img className="w-full h-full" src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1hZG9yZXN8ZW58MHx8MHx8fDA%3D" alt="" />
                            
                        </div>
                    </div>

                        

                        </div>


                        </div>
                    */}
                   
                </>

    )
}

