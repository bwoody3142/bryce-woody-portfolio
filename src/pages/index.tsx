import type { NextPage } from 'next';
import Contact from '../components/contact/Contact';
import WorkExperience from '../components/experience/WorkExperience';
import Header from '../components/Header';
import Intro from '../components/intro/Intro';
import Fca from '../components/projects/fca/Fca';
import SideLinks from '../components/SideLinks';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {

  // const { error, isLoading, data } = trpc.useQuery(['sendEmail']);

  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>{error.message}</div>
  
  return (
    <>
      <Header />
      <SideLinks />
      <div className="content">
        <Intro />
        <Fca />
        <WorkExperience />
        <Contact />
      </div>
    </>
  )
}

export default Home
