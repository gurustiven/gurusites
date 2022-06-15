import {
  Input,
  Button,
  Box,
} from "@guruhotel/aura-ui";
import ModulesConfigTabs from "components/builder/interface/config/ModulesConfigTabs";
import { v4 as uuid_v4 } from "uuid";
import { useApp } from "components/context/AppContext";

interface PhoenixSliderConfigProps {
  module: any,
  pageId: any,
  isBlock?: boolean,
  columnId?: any
  moduleId?: any
}

export default function PhoenixSliderConfig({ module, pageId, isBlock, columnId, moduleId }: PhoenixSliderConfigProps) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Update parent
  function update(name: any, value: any) {
    const values = { ...theme };
    const index = values?.pages?.map(({ id }: any) => id).indexOf(pageId);
    if (index !== -1) {
      if (isBlock) {
        const indexModule = values?.pages[index]?.modules?.map(({ id }: any) => id).indexOf(moduleId);
        if (indexModule !== -1) {
          const indexColumn = values?.pages[index]?.modules[indexModule]?.config?.columns?.map(({ id }: any) => id).indexOf(columnId);
          if (indexColumn !== -1) {
            const indexModuleChild = values?.pages[index]?.modules[indexModule]?.config?.columns[indexColumn]?.modules?.map(({ id }: any) => id).indexOf(module?.id);
            indexModuleChild !== -1 && (values.pages[index].modules[indexModule].config.columns[indexColumn].modules[indexModuleChild].config[name] = value)
          }
        }
      } else {
        const indexChild = values?.pages[index]?.modules?.map((item: any) => item?.id).indexOf(module?.id);
        indexChild !== -1 && (values.pages[index].modules[indexChild].config[name] = value)
      }
    }
    setTheme(values)
  }

  // Add new item
  function newItem() {
    const values = { ...theme };
    const index = values?.pages?.map(({ id }: any) => id).indexOf(pageId);
    if (index !== -1) {
      if (isBlock) {
        const indexModule = values?.pages[index]?.modules?.map(({ id }: any) => id).indexOf(moduleId);
        if (indexModule !== -1) {
          const indexColumn = values?.pages[index]?.modules[indexModule]?.config?.columns?.map(({ id }: any) => id).indexOf(columnId);
          if (indexColumn !== -1) {
            const indexModuleChild = values?.pages[index]?.modules[indexModule]?.config?.columns[indexColumn]?.modules?.map(({ id }: any) => id).indexOf(module?.id);
            if (indexModuleChild !== -1) {
              if (values?.pages[index]?.modules[indexModule]?.config?.columns[indexColumn]?.modules[indexModuleChild].config.items) {
                values?.pages[index]?.modules[indexModule]?.config?.columns[indexColumn]?.modules[indexModuleChild].config.items.push({ id: uuid_v4(), source: "", text: "" })
              } else {
                values.pages[index].modules[indexModule].config.columns[indexColumn].modules[indexModuleChild].config = { items: [{ id: uuid_v4(), source: "", text: "" }] }
              }
            }
          }
        }
      } else {
        const indexModule = values?.pages[index]?.modules?.map(({ id }: any) => id).indexOf(module?.id);
        if (indexModule !== -1) {
          if (values.pages[index].modules[indexModule].config.items) {
            values.pages[index].modules[indexModule].config.items.push({ id: uuid_v4(), source: "", text: "" })
          } else {
            values.pages[index].modules[indexModule].config = { items: [{ id: uuid_v4(), source: "", text: "" }] }
          }
        }
      }
    }
    setTheme(values)
  }

  return (
    <ModulesConfigTabs isBlock={isBlock} columnId={columnId} pageId={pageId} module={module} moduleId={moduleId}>
      {module?.config?.items?.map(({ id }: any) => (
        <PhoenixSliderConfigItems key={id} itemId={id} items={module?.config?.items} setItems={e => update('items', e)} />
      ))}
      <Button
        variant="outline"
        onClick={() => newItem()}
        css={{ marginTop: '12px', width: '100%' }}
      >
        Add photo +
      </Button>
    </ModulesConfigTabs>
  )
}

function PhoenixSliderConfigItems({ itemId, items, setItems }: any) {
  // Update parent
  function update(name: any, value: any) {
    const values = [...items];
    const index = values?.map(({ id }: any) => id).indexOf(itemId);
    index !== -1 && (values[index][name] = value)
    setItems(values)
  }

  // Remove current item
  const removeItem = () => {
    const values = [...items];
    const index = values?.map(({ id }: any) => id).indexOf(itemId);
    index !== -1 && values.splice(index, 1)
    setItems(values)
  };

  return (
    <Box css={{ border: '1px solid $darkie4', borderRadius: '8px', margin: '12px 0', padding: '12px' }}>
      <Input
        id="itemUrl"
        placeholder="Image URL"
        css={{ margin: '4px 0', width: "100%" }}
        onChange={e => update('source', e.target.value)}
      />
      <Input
        id="itemText"
        placeholder="Image Text"
        css={{ margin: '4px 0', width: "100%" }}
        onChange={e => update('text', e.target.value)}
      />
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
