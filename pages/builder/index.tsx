import type { NextPage } from 'next'
import Layout from 'components/builder/interface/layout/Layout'
import { useApp } from 'components/context/AppContext'

import PhoenixSliderConfig from 'components/builder/phoenix/modules/slider/config/PhoenixSliderConfig'
import PhoenixLayout from 'components/builder/phoenix/layout/PhoenixLayout'
import ModulesConfigActions from 'components/builder/interface/config/actions/ModulesConfigActions'
import NewModule from 'components/builder/interface/layout/modules/NewModule'
import { useRouter } from 'next/router'
import PhoenixSliderRender from 'components/builder/phoenix/modules/slider/config/PhoenixSliderRender'
import PhoenixBlockRender from 'components/builder/phoenix/modules/block/config/PhoenixBlockRender'
import PhoenixBlockConfig from 'components/builder/phoenix/modules/block/config/PhoenixBlockConfig'
import PhoenixContentRender from 'components/builder/phoenix/modules/content/config/PhoenixContentRender'
import PhoenixContentConfig from 'components/builder/phoenix/modules/content/config/PhoenixContentConfig'
import PhoenixTitleRender from 'components/builder/phoenix/modules/title/config/PhoenixTitleRender'
import PhoenixTitleConfig from 'components/builder/phoenix/modules/title/config/PhoenixTitleConfig'

const BuilderHomePage: NextPage = () => {
  const router = useRouter()
  const { p: pageId } = router.query

  // Get theme
  const { theme } = useApp()

  // Filter modules by page
  const filterModulesByPage = theme?.pages?.filter(
    ({ id }: any) => id === pageId
  )?.[0]?.modules

  // Filter modules by stick
  const filterModulesByStick = theme?.pages?.map((page: any) =>
    page?.modules?.filter((module: any) => module?.stickToFooter)
  )

  return (
    <Layout page="home">
      <PhoenixLayout>
        {filterModulesByPage?.map((moduleData: any) => {
          if (!moduleData?.stickToFooter)
            if (moduleData?.name === 'slider') {
              // Modules: Images slider
              return (
                <ModulesConfigActions
                  key={moduleData?.id}
                  moduleData={moduleData}
                  module={<PhoenixSliderRender module={moduleData} />}
                  config={
                    <PhoenixSliderConfig pageId={pageId} module={moduleData} />
                  }
                />
              )
            } else if (moduleData?.name === 'block') {
              // Modules: Block content
              return (
                <ModulesConfigActions
                  key={moduleData?.id}
                  moduleData={moduleData}
                  module={
                    <PhoenixBlockRender pageId={pageId} module={moduleData} />
                  }
                  config={
                    <PhoenixBlockConfig pageId={pageId} module={moduleData} />
                  }
                />
              )
            } else if (moduleData?.name === 'title') {
              // Modules: Title content
              return (
                <ModulesConfigActions
                  key={moduleData?.id}
                  moduleData={moduleData}
                  module={
                    <PhoenixTitleRender pageId={pageId} module={moduleData} />
                  }
                  config={
                    <PhoenixTitleConfig pageId={pageId} module={moduleData} />
                  }
                />
              )
            } else if (moduleData?.name === 'content') {
              // Modules: Content content
              return (
                <ModulesConfigActions
                  key={moduleData?.id}
                  moduleData={moduleData}
                  module={
                    <PhoenixContentRender pageId={pageId} module={moduleData} />
                  }
                  config={
                    <PhoenixContentConfig pageId={pageId} module={moduleData} />
                  }
                />
              )
            }
          return null
        })}

        {filterModulesByStick.flat(1)?.map((moduleData: any) => {
          // Modules: Images slider
          if (moduleData?.name === 'slider') {
            return (
              <ModulesConfigActions
                key={moduleData?.id}
                moduleData={moduleData}
                module={<PhoenixSliderRender module={moduleData} />}
                config={
                  <PhoenixSliderConfig pageId={pageId} module={moduleData} />
                }
              />
            )
          } else if (moduleData?.name === 'block') {
            // Modules: Block content
            return (
              <ModulesConfigActions
                key={moduleData?.id}
                moduleData={moduleData}
                module={
                  <PhoenixBlockRender pageId={pageId} module={moduleData} />
                }
                config={
                  <PhoenixBlockConfig pageId={pageId} module={moduleData} />
                }
              />
            )
          } else if (moduleData?.name === 'title') {
            // Modules: Title content
            return (
              <ModulesConfigActions
                key={moduleData?.id}
                moduleData={moduleData}
                module={
                  <PhoenixTitleRender pageId={pageId} module={moduleData} />
                }
                config={
                  <PhoenixTitleConfig pageId={pageId} module={moduleData} />
                }
              />
            )
          } else if (moduleData?.name === 'content') {
            // Modules: Content content
            return (
              <ModulesConfigActions
                key={moduleData?.id}
                moduleData={moduleData}
                module={
                  <PhoenixContentRender pageId={pageId} module={moduleData} />
                }
                config={
                  <PhoenixContentConfig pageId={pageId} module={moduleData} />
                }
              />
            )
          }
          return null
        })}
        {pageId && <NewModule pageId={pageId} />}
      </PhoenixLayout>
    </Layout>
  )
}

export default BuilderHomePage
