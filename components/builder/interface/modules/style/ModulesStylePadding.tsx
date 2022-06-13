import { Box, HStack, InputGroup, Label, Switch, SwitchThumb, Text, VStack } from "@guruhotel/aura-ui";
import { DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function ModulesStylePadding() {
  const [singleSwitch, setSingleSwitch] = useState(false)
  const [responsiveSwitch, setResponsiveSwitch] = useState(false)
  return (
    <>
      <HStack justifyContent="space-between" spacing="2">
        <Text as="h5">Padding</Text>
        <HStack spacing="2">
          <Box as="span">
            <Label htmlFor="individual" fontSize="xs" css={{ margin: '0 8px 0 0' }}>Individual</Label>
            <Switch id="individual" onCheckedChange={() => setSingleSwitch(!singleSwitch)}>
              <SwitchThumb />
            </Switch>
          </Box>
          <Box as="span">
            <Label htmlFor="responsive" fontSize="xs" css={{ margin: '0 8px 0 0' }}>Responsive</Label>
            <Switch id="responsive" onCheckedChange={() => setResponsiveSwitch(!responsiveSwitch)}>
              <SwitchThumb />
            </Switch>
          </Box>
        </HStack>
      </HStack>
      {!singleSwitch &&
        <>
          <HStack spacing="4" css={{ margin: '4px 0' }}>
            <InputGroup size="sm" css={{ width: '50%' }}>
              <InputGroup.LeftIcon icon={<DesktopIcon />} />
              <InputGroup.Input id="" type="number" />
            </InputGroup>
            {responsiveSwitch &&
              <InputGroup size="sm" css={{ width: '50%' }}>
                <InputGroup.LeftIcon icon={<MobileIcon />} />
                <InputGroup.Input id="" type="number" />
              </InputGroup>
            }
          </HStack>
        </>
      }
      {singleSwitch &&
        <>
          <HStack spacing="4" css={{ margin: '12px 0' }}>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Top</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input id="" type="number" />
              </InputGroup>
              {responsiveSwitch &&
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input id="" type="number" />
                </InputGroup>
              }
            </VStack>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Right</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input id="" type="number" />
              </InputGroup>
              {responsiveSwitch &&
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input id="" type="number" />
                </InputGroup>
              }
            </VStack>
          </HStack>
          <HStack spacing="4" css={{ margin: '12px 0' }}>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Bottom</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input id="" type="number" />
              </InputGroup>
              {responsiveSwitch &&
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input id="" type="number" />
                </InputGroup>
              }
            </VStack>
            <VStack spacing="2" css={{ width: '50%' }}>
              <Label css={{ width: '100%' }}>Left</Label>
              <InputGroup size="sm">
                <InputGroup.LeftIcon icon={<DesktopIcon />} />
                <InputGroup.Input id="" type="number" />
              </InputGroup>
              {responsiveSwitch &&
                <InputGroup size="sm">
                  <InputGroup.LeftIcon icon={<MobileIcon />} />
                  <InputGroup.Input id="" type="number" />
                </InputGroup>
              }
            </VStack>
          </HStack>
        </>
      }
    </>
  )
}
