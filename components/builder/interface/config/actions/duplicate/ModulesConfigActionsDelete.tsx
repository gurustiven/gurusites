import { Button } from '@guruhotel/aura-ui'
import { TrashIcon } from '@radix-ui/react-icons'
import { useApp } from 'components/context/AppContext'

export default function ModulesConfigActionsDelete({ module }: any) {
  // Get theme
  const { theme, setTheme, pageIndex } = useApp()

  // Duplicate function
  function deleteModule() {
    const values = { ...theme }
    const moduleIndex = values?.pages?.[pageIndex]?.modules
      ?.map(({ id }: any) => id)
      .indexOf(module?.id)
    if (pageIndex !== -1 && moduleIndex !== -1)
      values?.pages?.[pageIndex]?.modules?.splice(moduleIndex, 1)
    setTheme(values)
  }

  return (
    <Button type="button" onClick={() => deleteModule()}>
      <TrashIcon />
    </Button>
  )
}
