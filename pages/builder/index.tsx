import type { NextPage } from 'next'
import Layout from 'components/builder/interface/layout/Layout'
import { useApp } from 'components/context/AppContext'

import PhoenixSliderConfig from 'components/builder/phoenix/modules/slider/config/PhoenixSliderConfig';
import PhoenixLayout from 'components/builder/phoenix/layout/PhoenixLayout';
import PhoenixContentConfig from 'components/builder/phoenix/modules/content/PhoenixContentConfig';
import ModulesConfigActions from 'components/builder/interface/config/ModulesConfigActions';
import PhoenixSlider from 'components/builder/phoenix/modules/slider/PhoenixSlider';
import NewModule from 'components/builder/interface/layout/modules/NewModule';
import PhoenixTitle from 'components/builder/phoenix/modules/title/PhoenixTitle';
import PhoenixTitleConfig from 'components/builder/phoenix/modules/title/config/PhoenixTitleConfig';
import { useRouter } from 'next/router';
import PhoenixSliderRender from 'components/builder/phoenix/modules/slider/config/PhoenixSliderRender';

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
        {filterModulesByPage?.map((moduleData: any) => {

          // Modules: Images slider
          if (moduleData?.name === 'slider') {
            return (
              <ModulesConfigActions
                key={module?.id}
                module={<PhoenixSliderRender module={moduleData} />}
                config={<PhoenixSliderConfig pageId={pageId} module={moduleData} />}
              />
            )

          } else if (moduleData?.name === 'content') {
            // Modules: Text content
            return (<PhoenixContentConfig page={pageId} module={moduleData} key={module?.id} />)

          } else if (moduleData?.name === 'title') {
            // Modules: Headings
            return (
              <ModulesConfigActions
                key={module?.id}
                module={<PhoenixTitle data={moduleData} />}
                config={<PhoenixTitleConfig page={pageId} data={moduleData} />}
              />
            )
          }
        })}
        {pageId && <NewModule page={pageId} />}
      </PhoenixLayout>
    </Layout>
  )
}

export default BuilderHomePage
