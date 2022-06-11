import PhoenixContent from "./PhoenixContent";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
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
import { useApp } from "../../../../context/AppContext";
import PlainTextExample from "../../../interface/components/Slate";

export default function PhoenixContentConfig({ module, page }) {
  const { theme, setTheme } = useApp()

  const [data, setData] = useState([{ id: uuid(), content: "" }])

  // Update parent module
  const update = (value) => {
    const values = [...theme];
    const index = values?.[0]?.pages?.map(({ id }) => id).indexOf(page);
    if (index !== -1) {
      const indexChild = values?.[0]?.pages[index]?.modules?.map((item) => item?.id).indexOf(module?.id);
      indexChild !== -1 && (values[0].pages[index].modules[indexChild] = { id: module?.id, name: module?.name, config: value })
    }
    setTheme(values)
  };

  useEffect(() => {
    if (data?.length)
      update(data)
  }, [data])

  return (
    <div>
      <PhoenixContent module={module} />
      <Sheet>
        <SheetTrigger />
        <SheetContent css={{ padding: "32px" }}>
          <SheetClose>Cerrar</SheetClose>
          <SheetTitle>Editar</SheetTitle>
          <SheetDescription>Descripción</SheetDescription>
          {JSON.stringify(data)}
          <Tabs css={{ boxShadow: "none", width: '100%' }}>
            <TabsList defaultValue="options">
              <TabsTrigger value="options">Config</TabsTrigger>
              <TabsTrigger value="style">Style</TabsTrigger>
            </TabsList>
            <TabsContent value="options" css={{ padding: "0" }}>
              {data?.map(({ id }, key) => (
                <PhoenixContentConfigRepeater id={id} key={key} data={data} setData={setData} />
              ))}
            </TabsContent>
            <TabsContent value="style"></TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function PhoenixContentConfigRepeater({ id, key, data, setData }) {

  const update = (name, value, id) => {
    const values = [...data];
    const index = values?.map((item) => item?.id).indexOf(id);
    index !== -1 && (values[index][name] = value);
    setData(values)
  };

  return (
    <form>
      <PlainTextExample setValue={(e) => update("content", e, id)} />
    </form>
  )
}
