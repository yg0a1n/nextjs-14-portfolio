import About from '@/app/sections/about'
import Experience from '@/app/sections/experience'
import Feedback from '@/app/sections/feedback'
import Hero from '@/app/sections/hero'
import News from '@/app/sections/news'
import Tasks from '@/app/sections/tasks'
import Title from '@/app/sections/title'
import World from '@/app/sections/world'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default async function Home() {
  return (
    <div className="overflow-hidden bg-primary-black">
      <Navbar />
      <Title />
      <div className="relative">
        <Hero lang="en" />
        <div className="z-0 gradient-03" />
        <About lang="en" />
      </div>
      <div className="relative">
        <Experience lang="en" />
        <div className="z-0 gradient-04" />
        <News lang="en" />
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
