import {
  Box,
  HStack,
  InputGroup,
  Label,
  Switch,
  SwitchThumb,
  Text,
  VStack,
} from '@guruhotel/aura-ui'
import { DesktopIcon, MobileIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default function ModulesStyleRadius({ defaultValues, update }: any) {
  const [singleSwitch, setSingleSwitch] = useState(
    defaultValues?.general?.singleConfigRadius
  )
  const [responsiveSwitch, setResponsiveSwitch] = useState(
    defaultValues?.general?.responsiveConfigRadius
  )
  return (
    <>
      <HStack justifyContent="space-between" spacing="2">
        <Text as="h5">Corner radius</Text>
        <HStack spacing="2">
          <Box as="span">
            <Label
              htmlFor="individual"
              fontSize="xs"
              css={{ margin: '0 8px 0 0' }}
            >
              Individual
            </Label>
            <Switch
              id="individual"
              defaultChecked={defaultValues?.general?.singleConfigRadius}
              onCheckedChange={() => {
                setSingleSwitch(!singleSwitch)
                update('singleConfigRadius', 'general', !singleSwitch)
              }}
            >
              <SwitchThumb />
            </Switch>
          </Box>
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
              defaultChecked={defaultValues?.general?.responsiveConfigRadius}
              onCheckedChange={() => {
                setResponsiveSwitch(!responsiveSwitch)
                update('responsiveConfigRadius', 'general', !responsiveSwitch)
              }}
            >
              <SwitchThumb />
            </Switch>
          </Box>
        </HStack>
      </HStack>
      {!singleSwitch && (
        <>
          <HStack spacing="4" css={{ margin: '4px 0' }}>
            <InputGroup size="sm" css={{ width: '50%' }}>
              <InputGroup.LeftIcon icon={<DesktopIcon />} />
              <InputGroup.Input
                id="borderRadius"
                defaultValue={defaultValues?.desktop?.borderRadius}
                type="text"
                onChange={(e: any) =>
                  update('borderRadius', 'desktop', e.target.value)
                }
              />
            </InputGroup>
            {responsiveSwitch && (
              <InputGroup size="sm" css={{ width: '50%' }}>
                <InputGroup.LeftIcon icon={<MobileIcon />} />
                <InputGroup.Input
                  id="borderRadiusMobile"
                  defaultValue={defaultValues?.mobile?.borderRadius}
                  type="text"
                  onChange={(e: any) =>
                    update('borderRadius', 'mobile', e.target.value)
                  }
                />
              </InputGroup>
            )}
          </HStack>
        </>
      )}
      {singleSwitch && (
        <>
          <HStack spacing="4" css={{ margin: '12px 0' }}>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Top left</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input
                  id="borderTopLeftRadius"
                  defaultValue={defaultValues?.desktop?.borderTopLeftRadius}
                  type="text"
                  onChange={(e: any) =>
                    update('borderTopLeftRadius', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="borderTopLeftRadiusMobile"
                    defaultValue={defaultValues?.mobile?.borderTopLeftRadius}
                    type="text"
                    onChange={(e: any) =>
                      update('borderTopLeftRadius', 'mobile', e.target.value)
                    }
                  />
                </InputGroup>
              )}
            </VStack>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Top right</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input
                  id="borderTopRightRadius"
                  defaultValue={defaultValues?.desktop?.borderTopRightRadius}
                  type="text"
                  onChange={(e: any) =>
                    update('borderTopRightRadius', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="borderTopRightRadiusMobile"
                    defaultValue={defaultValues?.mobile?.borderTopRightRadius}
                    type="text"
                    onChange={(e: any) =>
                      update('borderTopRightRadius', 'mobile', e.target.value)
                    }
                  />
                </InputGroup>
              )}
            </VStack>
          </HStack>
          <HStack spacing="4" css={{ margin: '12px 0' }}>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Bottom left</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input
                  id="borderBottomLeftRadius"
                  defaultValue={defaultValues?.desktop?.borderBottomLeftRadius}
                  type="text"
                  onChange={(e: any) =>
                    update('borderBottomLeftRadius', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="borderBottomLeftRadiusMobile"
                    defaultValue={defaultValues?.mobile?.borderBottomLeftRadius}
                    type="text"
                    onChange={(e: any) =>
                      update('borderBottomLeftRadius', 'mobile', e.target.value)
                    }
                  />
                </InputGroup>
              )}
            </VStack>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Bottom right</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input
                  id="borderBottomRightRadius"
                  defaultValue={defaultValues?.desktop?.borderBottomRightRadius}
                  type="text"
                  onChange={(e: any) =>
                    update('borderBottomRightRadius', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="borderBottomRightRadiusMobile"
                    defaultValue={
                      defaultValues?.mobile?.borderBottomRightRadius
                    }
                    type="text"
                    onChange={(e: any) =>
                      update(
                        'borderBottomRightRadius',
                        'mobile',
                        e.target.value
                      )
                    }
                  />
                </InputGroup>
              )}
            </VStack>
          </HStack>
        </>
      )}
    </>
  )
}
