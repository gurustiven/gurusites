import {
  Box,
  HStack,
  InputGroup,
  Label,
  Separator,
  Switch,
  SwitchThumb,
  Text,
  VStack,
} from '@guruhotel/aura-ui'
import { DesktopIcon, MobileIcon, ValueIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default function ModulesStyleBorder({ defaultValues, update }: any) {
  const [singleSwitch, setSingleSwitch] = useState(
    defaultValues?.general?.singleConfigBorder
  )
  const [responsiveSwitch, setResponsiveSwitch] = useState(
    defaultValues?.general?.responsiveConfigBorder
  )
  return (
    <>
      <HStack justifyContent="space-between" spacing="2">
        <Text as="h5">Border width</Text>
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
              defaultChecked={defaultValues?.general?.singleConfigBorder}
              onCheckedChange={() => {
                setSingleSwitch(!singleSwitch)
                update('singleConfigBorder', 'general', !singleSwitch)
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
              defaultChecked={defaultValues?.general?.responsiveConfigBorder}
              onCheckedChange={() => {
                setResponsiveSwitch(!responsiveSwitch)
                update('responsiveConfigBorder', 'general', !responsiveSwitch)
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
                id="borderWidth"
                defaultValue={defaultValues?.desktop?.borderWidth}
                type="text"
                onChange={(e: any) =>
                  update('borderWidth', 'desktop', e.target.value)
                }
              />
            </InputGroup>
            {responsiveSwitch && (
              <InputGroup size="sm" css={{ width: '50%' }}>
                <InputGroup.LeftIcon icon={<MobileIcon />} />
                <InputGroup.Input
                  id="borderWidthMobile"
                  defaultValue={defaultValues?.mobile?.borderWidth}
                  type="text"
                  onChange={(e: any) =>
                    update('borderWidth', 'mobile', e.target.value)
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
              <Label css={{ width: '100%' }}>Top</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input
                  id="borderTopWidth"
                  defaultValue={defaultValues?.desktop?.borderTopWidth}
                  type="text"
                  onChange={(e: any) =>
                    update('borderTopWidth', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="borderTopWidthMobile"
                    defaultValue={defaultValues?.mobile?.borderTopWidth}
                    type="text"
                    onChange={(e: any) =>
                      update('borderTopWidth', 'mobile', e.target.value)
                    }
                  />
                </InputGroup>
              )}
            </VStack>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Right</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input
                  id="borderRightWidth"
                  defaultValue={defaultValues?.desktop?.borderRightWidth}
                  type="text"
                  onChange={(e: any) =>
                    update('borderRightWidth', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="borderRightWidthMobile"
                    defaultValue={defaultValues?.mobile?.borderRightWidth}
                    type="text"
                    onChange={(e: any) =>
                      update('borderRightWidth', 'mobile', e.target.value)
                    }
                  />
                </InputGroup>
              )}
            </VStack>
          </HStack>
          <HStack spacing="4" css={{ margin: '12px 0' }}>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Bottom</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input
                  id="borderBottomWidth"
                  defaultValue={defaultValues?.desktop?.borderBottomWidth}
                  type="text"
                  onChange={(e: any) =>
                    update('borderBottomWidth', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="borderBottomWidthMobile"
                    defaultValue={defaultValues?.mobile?.borderBottomWidth}
                    type="text"
                    onChange={(e: any) =>
                      update('borderBottomWidth', 'mobile', e.target.value)
                    }
                  />
                </InputGroup>
              )}
            </VStack>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Left</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input
                  id="borderLeftWidth"
                  defaultValue={defaultValues?.desktop?.borderLeftWidth}
                  type="text"
                  onChange={(e: any) =>
                    update('borderLeftWidth', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="borderLeftWidthMobile"
                    defaultValue={defaultValues?.mobile?.borderLeftWidth}
                    type="text"
                    onChange={(e: any) =>
                      update('borderLeftWidth', 'mobile', e.target.value)
                    }
                  />
                </InputGroup>
              )}
            </VStack>
          </HStack>
        </>
      )}

      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />

      <VStack
        justifyContent="space-between"
        spacing="1"
        css={{ marginTop: '12px' }}
      >
        <Text as="h5">Border color</Text>
        <InputGroup size="sm" css={{ width: '50%' }}>
          <InputGroup.LeftIcon icon={<ValueIcon />} />
          <InputGroup.Input
            id="borderColor"
            defaultValue={defaultValues?.desktop?.borderColor}
            type="text"
            onChange={(e: any) =>
              update('borderColor', 'desktop', e.target.value)
            }
          />
        </InputGroup>
      </VStack>
    </>
  )
}
