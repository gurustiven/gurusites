import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Input
} from "@guruhotel/aura-ui";
import { useEffect, useState } from "react";
import { uuid } from 'uuidv4';
import { useApp } from "../../../../../context/AppContext";

interface PhoenixTitleConfigProps {
  data: any,
  page: any
}

export default function PhoenixTitleConfig({ data, page }: PhoenixTitleConfigProps) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Receive new data from config
  const [config, setConfig] = useState([{ id: uuid(), type: "h2" }])

  // Update parent module
  const update = (value: any) => {
    const values = [...theme];
    const index = values?.[0]?.pages?.map(({ id }: any) => id).indexOf(page);
    if (index !== -1) {
      const indexChild = values?.[0]?.pages[index]?.modules?.map((item: any) => item?.id).indexOf(data?.id);
      indexChild !== -1 && (values[0].pages[index].modules[indexChild] = { id: data?.id, name: data?.name, config: value })
    }
    setTheme(values)
  };

  useEffect(() => {
    if (config?.length)
      update(config)
  }, [config])

  return (
    <Tabs css={{ boxShadow: "none", width: '100%' }}>
      <TabsList defaultValue="options">
        <TabsTrigger value="options">Config</TabsTrigger>
        <TabsTrigger value="style">Style</TabsTrigger>
      </TabsList>
      <TabsContent value="options" css={{ padding: "0" }}>
        {config?.map(({ id }, key) => (
          <PhoenixTitleConfigRepeater id={id} key={key} config={config} setConfig={setConfig} />
        ))}
      </TabsContent>
      <TabsContent value="style"></TabsContent>
    </Tabs>
  )
}

function PhoenixTitleConfigRepeater({ id, config, setConfig }: any) {

  const update = (name: any, value: any) => {
    const values = [...config];
    const index = values?.map((item) => item?.id).indexOf(id);
    index !== -1 && (values[index][name] = value);
    setConfig(values)
  };

  return (
    <form>
      <Input placeholder="Title" style={{ width: "100%" }} onChange={(e) => update("title", e.target.value)} />
    </form>
  )
}