import { HStack, Separator } from '@guruhotel/aura-ui'
import ModulesStyleBackground from './ModulesStyleBackground'
import ModulesStyleBorder from './ModulesStyleBorder'
import ModulesStyleColor from './ModulesStyleColor'
import ModulesStyleMargin from './ModulesStyleMargin'
import ModulesStylePadding from './ModulesStylePadding'
import ModulesStyleRadius from './ModulesStyleRadius'
import { useApp } from 'components/context/AppContext'
import ModulesStyleWidth from './ModulesStyleWidth'
import ModulesStyleHeight from './ModulesStyleHeight'

export default function ModulesStyle({
  module,
  isBlock,
  columnId,
  moduleId,
}: any) {
  // Get theme
  const { theme, setTheme } = useApp()

  const pageIndex = theme?.pages
    .map(({ id }: any) => id)
    .indexOf(module?.pageId)

  // Index constants
  const currentThemeCopy = { ...theme }
  const moduleIndex = currentThemeCopy?.pages[pageIndex]?.modules
    ?.map((item: any) => item?.id)
    .indexOf(module?.id)

  // Update parent module
  const update = (name: any, media: any, value: any) => {
    const values = { ...theme }
    if (module === 'header' || module === 'footer') {
      if (values?.[module]?.style?.[media]) {
        values[module].style[media][name] = value
      } else {
        values[module].style[media] = { [name]: value }
      }
    } else {
      if (pageIndex !== -1) {
        if (isBlock) {
          const indexModule = values?.pages[pageIndex]?.modules
            ?.map(({ id }: any) => id)
            .indexOf(moduleId)
          if (indexModule !== -1) {
            const indexColumn = values?.pages[pageIndex]?.modules[
              indexModule
            ]?.config?.columns
              ?.map(({ id }: any) => id)
              .indexOf(columnId)
            if (indexColumn !== -1) {
              const indexModuleChild = values?.pages[pageIndex]?.modules[
                indexModule
              ]?.config?.columns[indexColumn]?.modules
                ?.map(({ id }: any) => id)
                .indexOf(module?.id)
              if (indexModuleChild !== -1) {
                const indexModuleChildChild =
                  values?.pages[pageIndex]?.modules[indexModule]?.config
                    ?.columns[indexColumn]?.modules[indexModuleChild]
                if (indexModuleChildChild !== -1) {
                  if (
                    values?.pages[pageIndex]?.modules[indexModule]?.config
                      ?.columns[indexColumn]?.modules[indexModuleChild]
                      ?.style?.[media]
                  ) {
                    values.pages[pageIndex].modules[indexModule].config.columns[
                      indexColumn
                    ].modules[indexModuleChild].style[media][name] = value
                  } else {
                    values.pages[pageIndex].modules[indexModule].config.columns[
                      indexColumn
                    ].modules[indexModuleChild].style[media] = { [name]: value }
                  }
                }
              }
            }
          }
        } else {
          const moduleIndex = values?.pages[pageIndex]?.modules
            ?.map((item: any) => item?.id)
            .indexOf(module?.id)
          if (moduleIndex !== -1) {
            if (
              values?.pages[pageIndex]?.modules[moduleIndex]?.style?.[media]
            ) {
              values.pages[pageIndex].modules[moduleIndex].style[media][name] =
                value
            } else {
              values.pages[pageIndex].modules[moduleIndex].style[media] = {
                [name]: value,
              }
            }
          }
        }
      }
    }
    setTheme(values)
  }

  // Get default values
  const defaultValues =
    module === 'header' || module === 'footer'
      ? theme?.[module]?.style
      : theme.pages[pageIndex].modules[moduleIndex]?.style

  return (
    <>
      <ModulesStyleHeight update={update} defaultValues={defaultValues} />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <ModulesStyleWidth
        update={update}
        defaultValue={defaultValues?.general?.containerWidth}
      />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <HStack spacing="4">
        <ModulesStyleBackground
          update={update}
          defaultValue={defaultValues?.desktop?.background}
        />
        <ModulesStyleColor
          update={update}
          defaultValue={defaultValues?.desktop?.color}
        />
      </HStack>
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <ModulesStyleRadius update={update} defaultValues={defaultValues} />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <ModulesStyleMargin update={update} defaultValues={defaultValues} />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <ModulesStylePadding update={update} defaultValues={defaultValues} />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <ModulesStyleBorder update={update} defaultValues={defaultValues} />
    </>
  )
}
