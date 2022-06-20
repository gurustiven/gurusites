import { v4 as uuid_v4 } from 'uuid'
import { Button } from '@guruhotel/aura-ui'
import { CopyIcon } from '@radix-ui/react-icons'
import { useApp } from 'components/context/AppContext'

export default function ModulesConfigActionsDuplicate({ module }: any) {
  // Get theme
  const { theme, setTheme, pageIndex } = useApp()

  // Duplicate function
  function duplicateModule() {
    const values = { ...theme }
    const moduleToDuplicate = { ...module }
    moduleToDuplicate['id'] = uuid_v4()
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
