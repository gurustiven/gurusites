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

export default function ModulesStylePadding({ defaultValues, update }: any) {
  const [singleSwitch, setSingleSwitch] = useState(
    defaultValues?.general?.singleConfigPadding
  )
  const [responsiveSwitch, setResponsiveSwitch] = useState(
    defaultValues?.general?.responsiveConfigPadding
  )
  return (
    <>
      <HStack justifyContent="space-between" spacing="2">
        <Text as="h5">Padding</Text>
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
              defaultChecked={defaultValues?.general?.singleConfigPadding}
              onCheckedChange={() => {
                setSingleSwitch(!singleSwitch)
                update('singleConfigPadding', 'general', !singleSwitch)
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
              defaultChecked={defaultValues?.general?.responsiveConfigPadding}
              onCheckedChange={() => {
                setResponsiveSwitch(!responsiveSwitch)
                update('responsiveConfigPadding', 'general', !responsiveSwitch)
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
                id="padding"
                defaultValue={defaultValues?.desktop?.padding}
                type="text"
                onChange={(e: any) =>
                  update('padding', 'desktop', e.target.value)
                }
              />
            </InputGroup>
            {responsiveSwitch && (
              <InputGroup size="sm" css={{ width: '50%' }}>
                <InputGroup.LeftIcon icon={<MobileIcon />} />
                <InputGroup.Input
                  id="paddingMobile"
                  defaultValue={defaultValues?.mobile?.padding}
                  type="text"
                  onChange={(e: any) =>
                    update('padding', 'mobile', e.target.value)
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
                  id="paddingTop"
                  defaultValue={defaultValues?.desktop?.paddingTop}
                  type="text"
                  onChange={(e: any) =>
                    update('paddingTop', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="paddingTopMobile"
                    defaultValue={defaultValues?.mobile?.paddingTop}
                    type="text"
                    onChange={(e: any) =>
                      update('paddingTop', 'mobile', e.target.value)
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
                  id="paddingRight"
                  defaultValue={defaultValues?.desktop?.paddingRight}
                  type="text"
                  onChange={(e: any) =>
                    update('paddingRight', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="paddingRightMobile"
                    defaultValue={defaultValues?.mobile?.paddingRight}
                    type="text"
                    onChange={(e: any) =>
                      update('paddingRight', 'mobile', e.target.value)
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
                  id="paddingBottom"
                  defaultValue={defaultValues?.desktop?.paddingBottom}
                  type="text"
                  onChange={(e: any) =>
                    update('paddingBottom', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="paddingBottomMobile"
                    defaultValue={defaultValues?.mobile?.paddingBottom}
                    type="text"
                    onChange={(e: any) =>
                      update('paddingBottom', 'mobile', e.target.value)
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
                  id="paddingLeft"
                  defaultValue={defaultValues?.desktop?.paddingLeft}
                  type="text"
                  onChange={(e: any) =>
                    update('paddingLeft', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="paddingLeftMobile"
                    defaultValue={defaultValues?.mobile?.paddingLeft}
                    type="text"
                    onChange={(e: any) =>
                      update('paddingLeft', 'mobile', e.target.value)
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
