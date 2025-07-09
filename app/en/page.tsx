import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Feedback from '../sections/Feedback'
import GetStarted from '../sections/GetStarted'
import Hero from '../sections/Hero'
import Tasks from '../sections/Tasks'
import WhatsNew from '../sections/WhatsNew'
import World from '../sections/World'

export default async function Home() {
  return (
    <div className="overflow-hidden bg-primary-black">
      <Navbar />
      <Hero />
      <div className="relative">
        <GetStarted lang="en" />
        <div className="z-0 gradient-03" />
        <About lang="en" />
      </div>
      <div className="relative">
        <Experience lang="en" />
        <div className="z-0 gradient-04" />
        <WhatsNew lang="en" />
        <div className="z-0 gradient-04" />
        <Tasks lang="en" />
      </div>
      <World lang="en" />
      <div className="relative">
        <div className="z-0 gradient-04" />
        <Feedback lang="en" />
      </div>
      <Footer lang="en" />
    </div>
  )
}
