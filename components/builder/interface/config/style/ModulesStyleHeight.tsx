import {
  Box,
  HStack,
  InputGroup,
  Label,
  Switch,
  SwitchThumb,
  Text,
} from '@guruhotel/aura-ui'
import { DesktopIcon, MobileIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default function ModulesStyleHeight({ defaultValues, update }: any) {
  const [responsiveSwitch, setResponsiveSwitch] = useState(
    defaultValues?.general?.responsiveConfigHeight
  )
  return (
    <>
      <HStack justifyContent="space-between" spacing="2">
        <Text as="h5">Height</Text>
        <HStack spacing="2">
          <Box as="span">
            <Label
              htmlFor="responsive"
              fontSize="xs"
              css={{ margin: '0 8px 0 0' }}
            >
              Responsive
            </Label>
            <Switch
              id="responsive"
              defaultChecked={defaultValues?.general?.responsiveConfigHeight}
              onCheckedChange={() => {
                setResponsiveSwitch(!responsiveSwitch)
                update('responsiveConfigHeight', 'general', !responsiveSwitch)
              }}
            >
              <SwitchThumb />
            </Switch>
          </Box>
        </HStack>
      </HStack>
      <HStack spacing="4" css={{ margin: '4px 0' }}>
        <InputGroup size="sm" css={{ width: '50%' }}>
          <InputGroup.LeftIcon icon={<DesktopIcon />} />
          <InputGroup.Input
            id="height"
            defaultValue={defaultValues?.desktop?.height}
            type="text"
            onChange={(e: any) => update('height', 'desktop', e.target.value)}
          />
        </InputGroup>
        {responsiveSwitch && (
          <InputGroup size="sm" css={{ width: '50%' }}>
            <InputGroup.LeftIcon icon={<MobileIcon />} />
            <InputGroup.Input
              id="heightMobile"
              defaultValue={defaultValues?.mobile?.height}
              type="text"
              onChange={(e: any) => update('height', 'mobile', e.target.value)}
            />
          </InputGroup>
        )}
      </HStack>
    </>
  )
}
