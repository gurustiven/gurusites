import { useApp } from 'components/context/AppContext'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import RickText from 'components/builder/interface/shared/Slate'
import { Input } from '@guruhotel/aura-ui'

interface PhoenixTitleConfigProps {
  module: any
  pageId: any
  isBlock?: boolean
  columnId?: any
  moduleId?: any
}

export default function PhoenixTitleConfig({
  module,
  pageId,
  isBlock,
  columnId,
  moduleId,
}: PhoenixTitleConfigProps) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Set some constants
  const pageIndex = theme?.pages?.map(({ id }: any) => id).indexOf(pageId)
  const moduleIndex = isBlock
    ? theme?.pages[pageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(moduleId)
    : theme?.pages[pageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(module?.id)

  // Update parent
  function update(name: any, value: any) {
    const values = { ...theme }
    if (pageIndex !== -1) {
      if (isBlock) {
        if (moduleIndex !== -1) {
          const indexColumn = values?.pages[pageIndex]?.modules[
            moduleIndex
          ]?.config?.columns
            ?.map(({ id }: any) => id)
            .indexOf(columnId)
          if (indexColumn !== -1) {
            const moduleIndexChild = values?.pages[pageIndex]?.modules[
              moduleIndex
            ]?.config?.columns[indexColumn]?.modules
              ?.map(({ id }: any) => id)
              .indexOf(module?.id)
            moduleIndexChild !== -1 &&
              (values.pages[pageIndex].modules[moduleIndex].config.columns[
                indexColumn
              ].modules[moduleIndexChild].config[name] = value)
          }
        }
      } else {
        moduleIndex !== -1 &&
          (values.pages[pageIndex].modules[moduleIndex].config = {
            [name]: value,
          })
      }
    }
    setTheme(values)
  }

  return (
    <ModulesConfigTabs
      isBlock={isBlock}
      columnId={columnId}
      pageId={pageId}
      module={module}
      moduleId={moduleId}
    >
      <Input
        id="content"
        onChange={(e: any) => update('content', e.target.value)}
        defaultValue={module?.config?.content}
        css={{ width: '100%' }}
      />
    </ModulesConfigTabs>
  )
}
