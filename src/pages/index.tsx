import type { NextPage } from 'next';
import Header from '../components/Header';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {

  // const { error, isLoading, data } = trpc.useQuery(['hello']);

  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>{error.message}</div>
  
  return (
    <div className="bg-red-500">
      <Header />
    </div>
  )
}

export default Home
