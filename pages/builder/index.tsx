import type { NextPage } from 'next'
import { useApp } from 'components/context/AppContext'
import Layout from 'components/builder/interface/layout/Layout'
import PhoenixLayout from 'components/builder/phoenix/layout/PhoenixLayout'
import Modules from 'components/builder/Modules'
import BuilderEmpty from 'components/builder/empty/BuilderEmpty'

const BuilderHomePage: NextPage = () => {
  // Get theme
  const { theme, pageId } = useApp()

  // Filter modules by page
  const filterModulesByPage = theme?.pages?.filter(
    ({ id }: any) => id === pageId
  )?.[0]?.modules

  return (
    <Layout page="home">
      <PhoenixLayout>
        {filterModulesByPage?.length ? (
          filterModulesByPage?.map((moduleData: any) => {
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
