import type { NextPage } from 'next'
import { useApp } from 'components/context/AppContext'
import Layout from 'components/builder/interface/layout/Layout'
import PhoenixLayout from 'components/builder/phoenix/layout/PhoenixLayout'
import Modules from 'components/builder/Modules'
import ModulesConfigActionsNew from 'components/builder/interface/config/actions/new/ModulesConfigActionsNew'

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
          <>
            <p>Empty modules</p>
            <ModulesConfigActionsNew />
          </>
        )}
      </PhoenixLayout>
    </Layout>
  )
}

export default BuilderHomePage
