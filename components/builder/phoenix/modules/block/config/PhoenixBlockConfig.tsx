import { Button, Box } from '@guruhotel/aura-ui'
import ModulesConfigTabs from 'components/builder/interface/config/ModulesConfigTabs'
import { v4 as uuid_v4 } from 'uuid'
import { useApp } from 'components/context/AppContext'

interface PhoenixBlockConfigProps {
  module: any
  pageId: any
}

export default function PhoenixBlockConfig({
  module,
  pageId,
}: PhoenixBlockConfigProps) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Update parent
  function update(name: any, value: any) {
    const values = { ...theme }
    const index = values?.pages?.map(({ id }: any) => id).indexOf(pageId)
    if (index !== -1) {
      const indexChild = values?.pages[index]?.modules
        ?.map((item: any) => item?.id)
        .indexOf(module?.id)
      indexChild !== -1 &&
        (values.pages[index].modules[indexChild].config[name] = value)
    }
    setTheme(values)
  }

  // Add new item
  function newColumn() {
    const values = { ...theme }
    const index = values?.pages?.map(({ id }: any) => id).indexOf(pageId)
    if (index !== -1) {
      const indexChild = values?.pages[index]?.modules
        ?.map((item: any) => item?.id)
        .indexOf(module?.id)
      if (indexChild !== -1) {
        if (values.pages[index].modules[indexChild].config.columns) {
          values.pages[index].modules[indexChild].config.columns.push({
            id: uuid_v4(),
            modules: [],
          })
        } else {
          values.pages[index].modules[indexChild].config = {
            columns: [{ id: uuid_v4(), modules: [] }],
          }
        }
      }
    }
    setTheme(values)
  }

  return (
    <ModulesConfigTabs pageId={pageId} module={module}>
      {module?.config?.columns?.map(({ id }: any) => (
        <PhoenixBlockConfigItems
          key={id}
          itemId={id}
          columns={module?.config?.columns}
          setColumns={(e) => update('columns', e)}
        />
      ))}
      <Button
        variant="outline"
        onClick={() => newColumn()}
        css={{ marginTop: '12px', width: '100%' }}
      >
        Add column +
      </Button>
    </ModulesConfigTabs>
  )
}

function PhoenixBlockConfigItems({ itemId, columns, setColumns }: any) {
  // Remove current item
  const removeItem = () => {
    const values = [...columns]
    const index = values?.map(({ id }: any) => id).indexOf(itemId)
    index !== -1 && values.splice(index, 1)
    setColumns(values)
  }

  return (
    <Box
      css={{
        border: '1px solid $darkie4',
        borderRadius: '8px',
        margin: '12px 0',
        padding: '12px',
      }}
    >
      <Button
        colorScheme="red"
        variant="link"
        css={{ width: '100%' }}
        onClick={() => removeItem()}
        type="button"
      >
        Remove -
      </Button>
    </Box>
  )
}
