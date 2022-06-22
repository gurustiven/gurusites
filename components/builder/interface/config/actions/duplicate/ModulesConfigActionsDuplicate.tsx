import { v4 as uuid_v4 } from 'uuid'
import { Button } from '@guruhotel/aura-ui'
import { CopyIcon } from '@radix-ui/react-icons'
import { useApp } from 'components/context/AppContext'

export default function ModulesConfigActionsDuplicate({ module }: any) {
  // Get theme
  const { theme, setTheme } = useApp()

  const pageIndex = theme?.pages
    .map(({ id }: any) => id)
    .indexOf(module?.pageId)

  // Duplicate function
  function duplicateModule() {
    const values = { ...theme }

    // Make a deep copy of the current module
    const moduleToDuplicate = JSON.parse(JSON.stringify(module))

    // Modify some parameters
    moduleToDuplicate['id'] = uuid_v4()
    moduleToDuplicate['copyOf'] = module?.id

    // Push to main array
    if (pageIndex !== -1)
      values?.pages?.[pageIndex]?.modules.push(moduleToDuplicate)
    setTheme(values)
  }

  return (
    <Button type="button" onClick={() => duplicateModule()}>
      <CopyIcon />
    </Button>
  )
}
