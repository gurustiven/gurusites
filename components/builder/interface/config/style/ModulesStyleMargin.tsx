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

export default function ModulesStyleMargin({ defaultValues, update }: any) {
  const [singleSwitch, setSingleSwitch] = useState(
    defaultValues?.general?.singleConfigMargin
  )
  const [responsiveSwitch, setResponsiveSwitch] = useState(
    defaultValues?.general?.responsiveConfigMargin
  )
  return (
    <>
      <HStack justifyContent="space-between" spacing="2">
        <Text as="h5">Margin</Text>
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
              defaultChecked={defaultValues?.general?.singleConfigMargin}
              onCheckedChange={() => {
                setSingleSwitch(!singleSwitch)
                update('singleConfigMargin', 'general', !singleSwitch)
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
              defaultChecked={defaultValues?.general?.responsiveConfigMargin}
              onCheckedChange={() => {
                setResponsiveSwitch(!responsiveSwitch)
                update('responsiveConfigMargin', 'general', !responsiveSwitch)
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
                id="margin"
                defaultValue={defaultValues?.desktop?.margin}
                type="text"
                onChange={(e: any) =>
                  update('margin', 'desktop', e.target.value)
                }
              />
            </InputGroup>
            {responsiveSwitch && (
              <InputGroup size="sm" css={{ width: '50%' }}>
                <InputGroup.LeftIcon icon={<MobileIcon />} />
                <InputGroup.Input
                  id="margin"
                  defaultValue={defaultValues?.mobile?.margin}
                  type="text"
                  onChange={(e: any) =>
                    update('margin', 'mobile', e.target.value)
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
                  id="topMargin"
                  defaultValue={defaultValues?.desktop?.topMargin}
                  type="text"
                  onChange={(e: any) =>
                    update('topMargin', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="topMarginMobile"
                    defaultValue={defaultValues?.mobile?.topMargin}
                    type="text"
                    onChange={(e: any) =>
                      update('topMargin', 'mobile', e.target.value)
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
                  id="rightMargin"
                  defaultValue={defaultValues?.desktop?.rightMargin}
                  type="text"
                  onChange={(e: any) =>
                    update('rightMargin', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="rightMarginMobile"
                    defaultValue={defaultValues?.mobile?.rightMargin}
                    type="text"
                    onChange={(e: any) =>
                      update('rightMargin', 'mobile', e.target.value)
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
                  id="bottomMargin"
                  defaultValue={defaultValues?.desktop?.bottomMargin}
                  type="text"
                  onChange={(e: any) =>
                    update('bottomMargin', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="bottomMarginMobile"
                    defaultValue={defaultValues?.mobile?.bottomMargin}
                    type="text"
                    onChange={(e: any) =>
                      update('bottomMargin', 'mobile', e.target.value)
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
                  id="leftMargin"
                  defaultValue={defaultValues?.desktop?.leftMargin}
                  type="text"
                  onChange={(e: any) =>
                    update('leftMargin', 'desktop', e.target.value)
                  }
                />
              </InputGroup>
              {responsiveSwitch && (
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input
                    id="leftMarginMobile"
                    defaultValue={defaultValues?.mobile?.leftMargin}
                    type="text"
                    onChange={(e: any) =>
                      update('leftMargin', 'mobile', e.target.value)
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
