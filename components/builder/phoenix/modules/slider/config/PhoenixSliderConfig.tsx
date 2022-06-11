import {
  Separator,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Input,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
} from "@guruhotel/aura-ui";
import { useEffect, useState } from "react";
import { uuid } from 'uuidv4';
import { useApp } from "../../../../../context/AppContext";

interface PhoenixSliderConfigProps {
  data: any,
  page: any
}

export default function PhoenixSliderConfig({ data, page }: PhoenixSliderConfigProps) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Receive new data from config
  const [config, setConfig] = useState([])

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

  // Add new element
  function newElement() {
    const values = [...config]
    values.push({ id: uuid(), url: "" })
    setConfig(values)
  }

  return (
    <Tabs defaultValue="general" css={{ boxShadow: "none", width: '100%' }}>
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="style">Style</TabsTrigger>
      </TabsList>
      <TabsContent value="general" css={{ padding: "0" }}>
        {config?.map(({ id }, key) => (
          <PhoenixSliderConfigItems id={id} key={key} config={config} setConfig={setConfig} />
        ))}
        <Button size="md" variant="outline" colorScheme="darkie" onClick={() => newElement()} css={{ marginTop: '12px', width: '100%' }}>Add photo</Button>
      </TabsContent>
      <TabsContent value="style">
      </TabsContent>
    </Tabs>
  )
}

function PhoenixSliderConfigItems({ id, key, config, setConfig }: any) {

  const update = (name: any, value: any) => {
    const values = [...config];
    const index = values?.map((item) => item?.id).indexOf(id);
    index !== -1 && (values[index][name] = value);
    setConfig(values)
  };

  return (
    <Accordion type="single" defaultValue="item-1" collapsible size="sm" css={{ boxShadow: "none", width: '100%' }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item #{key}</AccordionTrigger>
        <AccordionContent style={{ padding: "0", margin: "0" }}>
          <form>
            <Input placeholder="URL" style={{ width: "100%" }} onChange={(e) => update("url", e.target.value)} />
            <Separator css={{ margin: "8px 0" }} />
            <Input placeholder="Description" style={{ width: "100%" }} />
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
