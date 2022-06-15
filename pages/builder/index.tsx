import type { NextPage } from 'next'
import Layout from 'components/builder/interface/layout/Layout'
import { useApp } from 'components/context/AppContext'

import PhoenixSliderConfig from 'components/builder/phoenix/modules/slider/config/PhoenixSliderConfig';
import PhoenixLayout from 'components/builder/phoenix/layout/PhoenixLayout';
import PhoenixContentConfig from 'components/builder/phoenix/modules/content/PhoenixContentConfig';
import ModulesConfigActions from 'components/builder/interface/config/ModulesConfigActions';
import NewModule from 'components/builder/interface/layout/modules/NewModule';
import PhoenixTitle from 'components/builder/phoenix/modules/title/PhoenixTitle';
import PhoenixTitleConfig from 'components/builder/phoenix/modules/title/config/PhoenixTitleConfig';
import { useRouter } from 'next/router';
import PhoenixSliderRender from 'components/builder/phoenix/modules/slider/config/PhoenixSliderRender';
import PhoenixBlockRender from 'components/builder/phoenix/modules/block/config/PhoenixBlockRender';
import PhoenixBlockConfig from 'components/builder/phoenix/modules/block/config/PhoenixBlockConfig';

const BuilderHomePage: NextPage = () => {
  const router = useRouter()
  const { p: pageId } = router.query

  // Get theme
  const { theme } = useApp()

  // Filter modules by page
  const filterModulesByPage = theme?.pages?.filter(({ id }: any) => id === pageId)?.[0]?.modules

  return (
    <Layout page="home">
      <PhoenixLayout>
        {JSON.stringify(theme)}
        {filterModulesByPage?.map((moduleData: any) => {

          // Modules: Images slider
          if (moduleData?.name === 'slider') {
            return (
              <ModulesConfigActions
                key={moduleData?.id}
                module={<PhoenixSliderRender module={moduleData} />}
                config={<PhoenixSliderConfig pageId={pageId} module={moduleData} />}
              />
            )

          } else if (moduleData?.name === 'block') {
            // Modules: Block content
            return (
              <ModulesConfigActions
                key={moduleData?.id}
                module={<PhoenixBlockRender pageId={pageId} module={moduleData} />}
                config={<PhoenixBlockConfig pageId={pageId} module={moduleData} />}
              />
            )

          } else if (moduleData?.name === 'content') {
            // Modules: Text content
            return (<PhoenixContentConfig page={pageId} module={moduleData} key={moduleData?.id} />)

          } else if (moduleData?.name === 'title') {
            // Modules: Headings
            return (
              <ModulesConfigActions
                key={moduleData?.id}
                module={<PhoenixTitle data={moduleData} />}
                config={<PhoenixTitleConfig page={pageId} data={moduleData} />}
              />
            )
          }
        })}
        {pageId && <NewModule pageId={pageId} />}
      </PhoenixLayout>
    </Layout>
  )
}

export default BuilderHomePage
