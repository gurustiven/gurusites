/* eslint-disable @next/next/no-img-element */
import { ChevronDownRegular } from '@guruhotel/aura-icons'
import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectValue,
  SelectTrigger,
  SelectViewport,
  Separator,
  Text,
  VStack,
} from '@guruhotel/aura-ui'
import { DesktopIcon, MobileIcon } from '@radix-ui/react-icons'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import ImageSelect from 'components/builder/interface/shared/ImageSelect'
import ImageUpload from 'components/builder/interface/shared/ImageUpload'
import { useApp } from 'components/context/AppContext'
import { v4 as uuid_v4 } from 'uuid'

export default function PhoenixHeaderConfig() {
  // Get theme
  const { theme, setTheme } = useApp()

  // Get header config
  const getHeader = theme?.header

  // Update parent module
  const update = (name: any, value: any) => {
    const values = { ...theme }
    values.header[name] = value
    setTheme(values)
  }

  // Add new element
  function newMenuItem() {
    const values = { ...theme }
    values?.header?.menu?.push({ id: uuid_v4(), label: '', link: '' })
    setTheme(values)
  }

  return (
    <ModulesConfigTabs module="header">
      <Text as="h5" css={{ margin: '4px 0' }}>
        Design
      </Text>
      <ImageSelect
        options={[
          {
            image: <img src="/builder/header/classic.svg" alt="classic" />,
            label: 'Classic',
            value: 'classic',
          },
          {
            image: <img src="/builder/header/inverse.svg" alt="inverse" />,
            label: 'Inverse',
            value: 'inverse',
          },
          {
            image: <img src="/builder/header/centered.svg" alt="centered" />,
            label: 'Centered',
            value: 'centered',
          },
        ]}
        onChange={(e: any) => update('design', e)}
        defaultValue={getHeader?.design}
      />

      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <Text as="h5" css={{ margin: '8px 0' }}>
        Branding
      </Text>
      <ImageUpload
        style={getHeader?.style?.desktop}
        onChange={(e: any) => update('logo', e)}
        defaultValue={getHeader?.logo}
      />
      <HStack spacing="2" css={{ margin: '8px 0 0 0' }}>
        <InputGroup size="sm" css={{ width: '50%' }}>
          <InputGroup.LeftIcon icon={<DesktopIcon />} />
          <InputGroup.Input
            id="logoMaxHeight"
            placeholder="Max height"
            type="text"
            onChange={(e: any) => update('logoMaxHeight', e.target.value)}
            defaultValue={getHeader?.logoMaxHeight}
          />
        </InputGroup>
        <InputGroup size="sm" css={{ width: '50%' }}>
          <InputGroup.LeftIcon icon={<MobileIcon />} />
          <InputGroup.Input
            id="logoMaxHeightMobile"
            placeholder="Max height"
            type="text"
            onChange={(e: any) => update('logoMaxHeightMobile', e.target.value)}
            defaultValue={getHeader?.logoMaxHeightMobile}
          />
        </InputGroup>
      </HStack>

      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <Text as="h5" css={{ margin: '4px 0' }}>
        Name
      </Text>
      <Input
        id="name"
        defaultValue={getHeader?.name}
        placeholder="Name"
        css={{ width: '100%' }}
        onChange={(e) => update('name', e.target.value)}
      />

      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <Text as="h5" css={{ margin: '8px 0' }}>
        Navigation
      </Text>
      {getHeader?.menu?.map((item: any) => (
        <PhoenixHeaderConfigMenu
          key={item.id}
          item={item}
          theme={theme}
          setTheme={setTheme}
        />
      ))}
      <Button
        colorScheme="darkie"
        isFullWidth
        onClick={() => newMenuItem()}
        type="button"
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
    const index = values?.header?.menu
      ?.map((child: any) => child?.id)
      .indexOf(item?.id)
    index !== -1 && (values.header.menu[index][name] = value)
    setTheme(values)
  }

  // Remove current item
  const removeElement = () => {
    const values = { ...theme }
    const index = values?.header?.menu
      ?.map((child: any) => child?.id)
      .indexOf(item?.id)
    index !== -1 && values.header.menu.splice(index, 1)
    setTheme(values)
  }

  return (
    <Box>
      <HStack spacing="2" css={{ position: 'relative', width: '100%' }}>
        <VStack css={{ width: '60%' }}>
          <Input
            id="menuLabel"
            defaultValue={item?.label}
            placeholder="Label"
            css={{ width: '100%' }}
            onChange={(e) => update('label', e.target.value)}
            size="sm"
          />
        </VStack>
        <VStack css={{ width: '40%' }}>
          <Select defaultValue="page">
            <SelectTrigger id="linkTo" aria-label="Font">
              <SelectValue />
              <SelectIcon>
                <Box css={{ mb: '$1' }}>
                  <ChevronDownRegular label="" color="currentcolor" size="xs" />
                </Box>
              </SelectIcon>
            </SelectTrigger>
            <SelectContent>
              <SelectViewport>
                <SelectGroup>
                  <SelectItem value="without">
                    <SelectItemText>Without link</SelectItemText>
                  </SelectItem>
                  <SelectItem value="custom">
                    <SelectItemText>Custom link</SelectItemText>
                  </SelectItem>
                  <SelectItem value="page">
                    <SelectItemText>Link with page</SelectItemText>
                  </SelectItem>
                </SelectGroup>
              </SelectViewport>
            </SelectContent>
          </Select>
        </VStack>
      </HStack>
      <VStack css={{ margin: '4px 0', width: '100%' }}>
        <Input
          id="menuLink"
          defaultValue={item?.link}
          placeholder="Link"
          css={{ width: '100%' }}
          onChange={(e) => update('link', e.target.value)}
          size="sm"
        />
      </VStack>
      <Button
        colorScheme="red"
        onClick={() => removeElement()}
        size="xs"
        type="button"
        variant="link"
      >
        Remove -
      </Button>
      <Separator css={{ margin: '12px 0' }} />
    </Box>
  )
}
