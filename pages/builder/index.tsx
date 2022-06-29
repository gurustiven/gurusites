import type { NextPage } from 'next'
import { useApp } from 'components/context/AppContext'
import Layout from 'components/builder/interface/layout/Layout'
import PhoenixLayout from 'components/builder/phoenix/layout/PhoenixLayout'
import Modules from 'components/builder/Modules'
import BuilderEmpty from 'components/builder/empty/BuilderEmpty'
import Head from 'next/head'

const BuilderHomePage: NextPage = () => {
  // Get theme
  const { theme, pageId } = useApp()

  // Get current page
  const currentPage = theme?.pages?.find((item: any) => item.id === pageId)

  return (
    <Layout page="home">
      <Head>
        <title>
          Builder{' '}
          {currentPage?.config?.title &&
            `- ${currentPage?.config?.title || '-'}`}
        </title>
      </Head>
      <PhoenixLayout>
        {currentPage?.modules?.length ? (
          currentPage?.modules?.map((moduleData: any) => {
            if (!moduleData?.stickToFooter)
              return <Modules key={moduleData?.id} moduleData={moduleData} />
            return null
          })
        ) : (
          <BuilderEmpty />
        )}
      </PhoenixLayout>
    </Layout>
  )
}

export default BuilderHomePage
