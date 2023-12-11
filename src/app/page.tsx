
import { Footer } from './components/footer/page'
import CardProjects from "./components/CardProjects";
import Header from "./components/Header";
import About from './components/About';

export default function Home() {
  return (
    <div className=" justify-between  min-h-screen w-full m-0 flex flex-col gap-5">
      <div className='mb-8'>

          <Header />
      </div>
     <About />
    <CardProjects />
      

      <Footer />
      
    </div>
  )
}
