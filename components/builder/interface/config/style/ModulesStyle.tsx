import { useApp } from 'components/context/AppContext'
import { HStack, Separator } from '@guruhotel/aura-ui'
import { useEffect, useState } from 'react'
import ModulesStyleBackground from './ModulesStyleBackground'
import ModulesStyleBorder from './ModulesStyleBorder'
import ModulesStyleColor from './ModulesStyleColor'
import ModulesStyleMargin from './ModulesStyleMargin'
import ModulesStylePadding from './ModulesStylePadding'
import ModulesStyleRadius from './ModulesStyleRadius'
import ModulesStyleWidth from './ModulesStyleWidth'
import ModulesStyleHeight from './ModulesStyleHeight'

export default function ModulesStyle({
  module,
  isBlock,
  columnId,
  parentModuleId,
}: any) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Get current module page index based on prop
  const modulePageIndex = theme?.pages
    .map(({ id }: any) => id)
    .indexOf(module?.pageId)

  // Index constants
  const [themeCopy, setThemeCopy] = useState({ ...theme })
  const moduleIndex = isBlock
    ? themeCopy?.pages[modulePageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(parentModuleId)
    : themeCopy?.pages[modulePageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(module?.id)
  const columnIndex = themeCopy?.pages?.[modulePageIndex]?.modules?.[
    moduleIndex
  ]?.config?.columns
    ?.map(({ id }: any) => id)
    .indexOf(columnId)
  const moduleIndexChild = themeCopy?.pages?.[modulePageIndex]?.modules?.[
    moduleIndex
  ]?.config?.columns?.[columnIndex]?.modules
    ?.map(({ id }: any) => id)
    .indexOf(module?.id)

  // Refresh data for constants
  useEffect(() => setThemeCopy({ ...theme }), [theme])

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
      if (modulePageIndex !== -1) {
        if (isBlock) {
          if (moduleIndex !== -1)
            if (columnIndex !== -1)
              if (moduleIndexChild !== -1) {
                const moduleIndexChildChild =
                  values?.pages[modulePageIndex]?.modules[moduleIndex]?.config
                    ?.columns[columnIndex]?.modules[moduleIndexChild]
                if (moduleIndexChildChild !== -1)
                  if (
                    values?.pages[modulePageIndex]?.modules[moduleIndex]?.config
                      ?.columns[columnIndex]?.modules[moduleIndexChild]
                      ?.style?.[media]
                  ) {
                    values.pages[modulePageIndex].modules[
                      moduleIndex
                    ].config.columns[columnIndex].modules[
                      moduleIndexChild
                    ].style[media][name] = value
                  } else {
                    values.pages[modulePageIndex].modules[
                      moduleIndex
                    ].config.columns[columnIndex].modules[
                      moduleIndexChild
                    ].style[media] = { [name]: value }
                  }
              }
        } else {
          if (moduleIndex !== -1)
            if (
              values?.pages[modulePageIndex]?.modules[moduleIndex]?.style?.[
                media
              ]
            ) {
              values.pages[modulePageIndex].modules[moduleIndex].style[media][
                name
              ] = value
            } else {
              values.pages[modulePageIndex].modules[moduleIndex].style[media] =
                {
                  [name]: value,
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
      : theme.pages[modulePageIndex].modules[moduleIndex]?.style

  return (
    <>
      {JSON.stringify(moduleIndex)}
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
