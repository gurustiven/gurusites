import { Box, Button, HStack, Input, Label, RadioGroup, RadioGroupIndicator, RadioGroupItem, Separator, Stack, Text } from "@guruhotel/aura-ui"
import ModulesConfigTabs from "components/builder/interface/config/ModulesConfigTabs"
import { useApp } from "components/context/AppContext"
import { v4 as uuid_v4 } from "uuid"

export default function PhoenixHeaderConfig() {
  // Get theme
  const { theme, setTheme } = useApp()

  // Get header config
  const getHeader = theme?.header

  // Update parent module
  const update = (name: any, value: any) => {
    const values = { ...theme };
    values.header[name] = value
    setTheme(values)
  };

  // Add new element
  function newMenuItem() {
    const values = { ...theme }
    values?.header?.menu?.push({ id: uuid_v4(), label: "", link: "" })
    setTheme(values)
  }

  return (
    <ModulesConfigTabs module="header">
      <Text as="h5" css={{ margin: '8px 0' }}>Order</Text>
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
            <RadioGroupItem value="inverse" id="inverse">
              <RadioGroupIndicator />
            </RadioGroupItem>
            <Label htmlFor="inverse">Inverse</Label>
          </Stack>
        </HStack>
      </RadioGroup>
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <Text as="h5" css={{ margin: '8px 0' }}>Branding</Text>
      <Input
        id="logo"
        defaultValue={getHeader?.logo}
        placeholder="Logo URL"
        css={{ margin: '4px 0', width: "100%" }}
        onChange={(e) => update("logo", e.target.value)}
        type="url"
      />
      <Input
        id="name"
        defaultValue={getHeader?.name}
        placeholder="Name"
        css={{ margin: '4px 0', width: "100%" }}
        onChange={(e) => update("name", e.target.value)}
      />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <Text as="h5" css={{ margin: '8px 0' }}>Navigation</Text>
      {getHeader?.menu?.map((item: any) => (
        <PhoenixHeaderConfigMenu key={item.id} item={item} theme={theme} setTheme={setTheme} />
      ))}
      <Button
        variant="outline"
        css={{ width: '100%' }}
        onClick={() => newMenuItem()}
        type="button"
      >
        Add new +
      </Button>
    </ModulesConfigTabs>
  )
}

function PhoenixHeaderConfigMenu({ item, theme, setTheme }: any) {

  // Update parent elements
  const update = (name: any, value: any) => {
    const values = { ...theme }
    const index = values?.header?.menu?.map((child: any) => child?.id).indexOf(item?.id)
    index !== -1 && (values.header.menu[index][name] = value)
    setTheme(values)
  };

  // Remove current item
  const removeElement = () => {
    const values = { ...theme }
    const index = values?.header?.menu?.map((child: any) => child?.id).indexOf(item?.id)
    index !== -1 && values.header.menu.splice(index, 1)
    setTheme(values)
  };

  return (
    <Box css={{ border: '1px solid $darkie4', borderRadius: '8px', margin: '12px 0', padding: '12px' }}>
      <Input
        id="menuLabel"
        defaultValue={item?.label}
        placeholder="Label"
        css={{ margin: '4px 0', width: "100%" }}
        onChange={(e) => update("label", e.target.value)}
      />
      <Input
        id="menuLink"
        defaultValue={item?.link}
        placeholder="Link"
        css={{ margin: '4px 0', width: "100%" }}
        onChange={(e) => update("link", e.target.value)}
      />
      <Button
        colorScheme="red"
        variant="link"
        css={{ width: '100%' }}
        onClick={() => removeElement()}
        type="button"
      >
        Remove -
      </Button>
    </Box>
  )
}
