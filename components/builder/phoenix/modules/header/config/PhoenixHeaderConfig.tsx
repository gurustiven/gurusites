import { Box, Button, HStack, Input, InputGroup, Separator, Text } from "@guruhotel/aura-ui"
import { DesktopIcon, MobileIcon } from "@radix-ui/react-icons"
import ModulesConfigTabs from "components/builder/interface/config/ModulesConfigTabs"
import ImageSelect from "components/builder/interface/shared/ImageSelect"
import ImageUpload from "components/builder/interface/shared/ImageUpload"
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

  console.log(getHeader?.logoMaxHeight)

  return (
    <ModulesConfigTabs module="header">
      <Text as="h5" css={{ margin: '4px 0' }}>Design</Text>
      <ImageSelect
        options={
          [
            { image: <img src="/builder/header/classic.svg" alt="classic" />, label: "Classic", value: "classic" },
            { image: <img src="/builder/header/inverse.svg" alt="inverse" />, label: "Inverse", value: "inverse" },
            { image: <img src="/builder/header/centered.svg" alt="centered" />, label: "Centered", value: "centered" }
          ]
        }
        onChange={(e) => update("design", e)}
        defaultValue={getHeader?.design}
      />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <Text as="h5" css={{ margin: '8px 0' }}>Branding</Text>
      <ImageUpload style={getHeader?.style?.desktop} onChange={(e) => update("logo", e)} defaultValue={getHeader?.logo} />
      <HStack spacing="2" css={{ margin: '8px 0 0 0' }}>
        <InputGroup size="sm" css={{ width: '50%' }}>
          <InputGroup.LeftIcon icon={<DesktopIcon />} />
          <InputGroup.Input id="" placeholder="Max height" type="number" onChange={(e: any) => update("logoMaxHeight", `${e.target.value}px`)} defaultValue={Number(getHeader?.logoMaxHeight)} />
        </InputGroup>
        <InputGroup size="sm" css={{ width: '50%' }}>
          <InputGroup.LeftIcon icon={<MobileIcon />} />
          <InputGroup.Input id="" placeholder="Max height" type="number" onChange={(e: any) => update("logoMaxHeightMobile", `${e.target.value}px`)} defaultValue={Number(getHeader?.logoMaxHeightMobile)} />
        </InputGroup>
      </HStack>
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
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
        colorScheme="darkie"
        onClick={() => newMenuItem()}
        type="button"
        isFullWidth
        variant="outline"
      >
        New menu item +
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
