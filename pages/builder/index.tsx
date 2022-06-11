import type { NextPage } from 'next'
import Layout from 'components/builder/interface/layout/Layout'
import { useApp } from 'components/context/AppContext'

import PhoenixSliderConfig from 'components/builder/phoenix/modules/slider/config/PhoenixSliderConfig';
import PhoenixLayout from 'components/builder/phoenix/layout/PhoenixLayout';
import PhoenixContentConfig from 'components/builder/phoenix/modules/content/PhoenixContentConfig';
import ModulesConfig from 'components/builder/interface/modules/ModulesConfig';
import PhoenixSlider from 'components/builder/phoenix/modules/slider/PhoenixSlider';
import NewModule from 'components/builder/interface/components/modules/NewModule';
import PhoenixTitle from 'components/builder/phoenix/modules/title/PhoenixTitle';
import PhoenixTitleConfig from 'components/builder/phoenix/modules/title/config/PhoenixTitleConfig';
import { useRouter } from 'next/router';

const BuilderHomePage: NextPage = () => {
  const router = useRouter()
  const { p } = router.query

  // Get theme
  const { theme } = useApp()

  // Filter modules by page
  const filterModulesByPage = theme?.[0]?.pages?.filter(({ id }: any) => id === p)?.[0]?.modules

  return (
    <Layout page="home">
      <PhoenixLayout>
        {filterModulesByPage?.map((moduleData: any) => {

          // Modules: Images slider
          if (moduleData?.name === 'slider') {
            return (
              <ModulesConfig
                key={module?.id}
                module={<PhoenixSlider data={moduleData} />}
                config={<PhoenixSliderConfig page={p} data={moduleData} />}
              />
            )

          } else if (moduleData?.name === 'content') {
            // Modules: Text content
            return (<PhoenixContentConfig page={p} module={moduleData} key={module?.id} />)

          } else if (moduleData?.name === 'title') {
            // Modules: Headings
            return (
              <ModulesConfig
                key={module?.id}
                module={<PhoenixTitle data={moduleData} />}
                config={<PhoenixTitleConfig page={p} data={moduleData} />}
              />
            )
          }
        })}
        {p && <NewModule page={p} />}
      </PhoenixLayout>
    </Layout>
  )
}

export default BuilderHomePage
