import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import ProjectCard from '@/components/projectCard/ProjectCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>


    I am index page

<ProjectCard/>
    </>

  )
}
