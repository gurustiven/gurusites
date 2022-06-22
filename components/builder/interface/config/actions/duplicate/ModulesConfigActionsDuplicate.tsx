import { v4 as uuid_v4 } from 'uuid'
import { Button } from '@guruhotel/aura-ui'
import { CopyIcon } from '@radix-ui/react-icons'
import { useApp } from 'components/context/AppContext'
import useIndex from 'components/builder/phoenix/utils/useIndex'

export default function ModulesConfigActionsDuplicate({
  module,
  isBlock,
  parentModuleId,
  columnId,
}: any) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Refresh data for constants
  const themeCopy = { ...theme }

  // Get child module from page module
  const currentPageModuleChild = isBlock
    ? theme?.pages.map(({ modules }: any) =>
        modules.filter(({ id }: any) => id === parentModuleId)
      )
    : themeCopy?.pages.map(({ modules }: any) =>
        modules.filter(({ id }: any) => id === module?.id)
      )

  // Set some constants
  const { modulePageIndex, moduleIndex, columnIndex } = useIndex(
    isBlock,
    parentModuleId,
    columnId,
    module?.id,
    currentPageModuleChild?.flat(1)[0]?.pageId
  )

  // Duplicate function
  function duplicateModule() {
    // Make a deep copy of the current module
    const moduleToDuplicate = JSON.parse(JSON.stringify(module))

    // Modify some parameters
    moduleToDuplicate['id'] = uuid_v4()
    moduleToDuplicate['copyOf'] = module?.id

    if (isBlock)
      // Push new module to current block
      themeCopy?.pages[modulePageIndex]?.modules[moduleIndex]?.config?.items[
        columnIndex
      ]?.modules.push(moduleToDuplicate)
    // Push new module to current page
    else themeCopy?.pages?.[modulePageIndex]?.modules.push(moduleToDuplicate)

    // Update theme
    setTheme(themeCopy)
  }

  return (
    <Button type="button" onClick={() => duplicateModule()}>
      <CopyIcon />
    </Button>
  )
}
