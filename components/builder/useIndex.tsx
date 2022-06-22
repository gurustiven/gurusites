import { useApp } from 'components/context/AppContext'

export default function useIndex(
  isBlock: any,
  parentModuleId: any,
  columnId: any,
  moduleId: any,
  pageId: any
) {
  const { theme } = useApp()

  // Get current module page index based on prop
  const modulePageIndex = theme?.pages.map(({ id }: any) => id).indexOf(pageId)

  // Get current module based on page index
  const currentPageModule = theme?.pages[modulePageIndex]?.modules

  // Get current module index
  const moduleIndex = isBlock
    ? currentPageModule?.map(({ id }: any) => id).indexOf(parentModuleId)
    : currentPageModule?.map(({ id }: any) => id).indexOf(moduleId)

  // Get current column index if is block
  const columnIndex = currentPageModule?.[moduleIndex]?.config?.columns
    ?.map(({ id }: any) => id)
    .indexOf(columnId)

  // Get current column module index
  const moduleIndexChild = currentPageModule?.[moduleIndex]?.config?.columns?.[
    columnIndex
  ]?.modules
    ?.map(({ id }: any) => id)
    .indexOf(module?.id)

  return {
    modulePageIndex,
    currentPageModule,
    moduleIndex,
    columnIndex,
    moduleIndexChild,
  }
}
