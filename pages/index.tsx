import type { NextPage } from 'next'
import { Center, Separator } from '@guruhotel/aura-ui';
import Layout from '../components/builder/interface/layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout page="builder--home">
      <Center css={{ flexDirection: 'column' }}>
        <h2>Hello kitty! 👋</h2>
        <Separator />
        <p>This is a welcome screen</p>
      </Center>
    </Layout>
  )
}

export default Home
