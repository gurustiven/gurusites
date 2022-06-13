import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Box, Button, HStack, Input, Label, RadioGroup, RadioGroupIndicator, RadioGroupItem, Separator, Stack, Tabs, TabsContent, TabsList, TabsTrigger } from "@guruhotel/aura-ui"
import ModulesStyle from "components/builder/interface/modules/style/ModulesStyle"
import { useApp } from "components/context/AppContext"
import { useEffect, useState } from "react"
import { uuid } from "uuidv4"

export default function PhoenixHeaderConfig() {
  // Get theme
  const { theme, setTheme } = useApp()

  // Get header config
  const getHeader = theme?.[0]?.header

  // Update parent module
  const update = (name: any, value: any) => {
    const values = [...theme];
    values[0].header[name] = value
    setTheme(values)
  };

  // Receive new data from config
  const [menu, setMenu] = useState(getHeader?.menu)

  useEffect(() => {
    if (menu?.length)
      update("menu", menu)
  }, [menu])

  // Add new element
  function newElement() {
    const values = [...menu]
    values.push({ id: uuid(), label: "", url: "" })
    setMenu(values)
  }

  return (
    <Tabs defaultValue="general" css={{ boxShadow: "none", width: '100%' }}>
      <TabsList css={{ margin: '0', marginBottom: '16px', padding: '0' }}>
        <TabsTrigger colorScheme="darkie" size="sm" value="general">General</TabsTrigger>
        <TabsTrigger colorScheme="darkie" size="sm" value="style">Style</TabsTrigger>
      </TabsList>
      <TabsContent value="general" css={{ padding: "0" }}>
        <Accordion type="single" defaultValue="item-1" collapsible size="md" css={{ border: '1px solid $darkie4', boxShadow: "none", overflow: 'hidden', width: '100%' }}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Order</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue={getHeader?.order} aria-label="Header order" onValueChange={e => update("order", e)}>
                <HStack spacing="2">
                  <Stack spacing="2">
                    <RadioGroupItem value="classic" id="classic">
                      <RadioGroupIndicator />
                    </RadioGroupItem>
                    <Label htmlFor="classic">Classic</Label>
                  </Stack>
                  <Stack spacing="2">
                    <RadioGroupItem value="centered" id="centered">
                      <RadioGroupIndicator />
                    </RadioGroupItem>
                    <Label htmlFor="centered">Centered</Label>
                  </Stack>
                  <Stack spacing="2">
                    <RadioGroupItem value="between" id="between">
                      <RadioGroupIndicator />
                    </RadioGroupItem>
                    <Label htmlFor="between">Between</Label>
                  </Stack>
                </HStack>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Branding</AccordionTrigger>
            <AccordionContent>
              <Input defaultValue={getHeader?.logo} placeholder="URL" style={{ width: "100%" }} onChange={(e) => update("logo", e.target.value)} />
              <Separator css={{ margin: '12px 0' }} />
              <Input defaultValue={getHeader?.name} placeholder="Hotel name" css={{ width: '100%' }} onChange={e => update("name", e.target.value)} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Menu</AccordionTrigger>
            <AccordionContent>
              {menu?.map((data: any, key: any) => (
                <PhoenixHeaderConfigMenu key={key} data={data} menu={menu} setMenu={setMenu} />
              ))}
              <Button onClick={() => newElement()}>Add new +</Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
      <TabsContent value="style" css={{ padding: "0" }}>
        <ModulesStyle component="header" />
      </TabsContent>
    </Tabs>

  )
}

function PhoenixHeaderConfigMenu({ data, menu, setMenu }: any) {

  const update = (name: any, value: any) => {
    const values = [...menu];
    const index = values?.map((item) => item?.id).indexOf(data?.id);
    index !== -1 && (values[index][name] = value);
    setMenu(values)
  };

  return (
    <Box>
      <Input defaultValue={data?.label} placeholder="Label" style={{ width: "100%" }} onChange={(e) => update("label", e.target.value)} />
    </Box>
  )
}
