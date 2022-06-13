import { Box, HStack, InputGroup, Label, RadioGroup, RadioGroupIndicator, RadioGroupItem, Stack, Switch, SwitchThumb, Text, VStack } from "@guruhotel/aura-ui";
import { DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function ModulesStyleWidth({ update }: any) {
  const [singleSwitch, setSingleSwitch] = useState(false)
  const [responsiveSwitch, setResponsiveSwitch] = useState(false)
  return (
    <>
      <HStack justifyContent="space-between" spacing="2">
        <Text as="h5">Width</Text>
      </HStack>
      <RadioGroup onValueChange={(e: any) => update("width", "desktop", e)}>
        <HStack spacing="2">
          <Stack spacing="2">
            <RadioGroupItem value="100%" id="fullWidth">
              <RadioGroupIndicator />
            </RadioGroupItem>
            <Label htmlFor="fullWidth">Full width</Label>
          </Stack>
          <Stack spacing="2">
            <RadioGroupItem value="1240px" id="boxed">
              <RadioGroupIndicator />
            </RadioGroupItem>
            <Label htmlFor="boxed">Boxed</Label>
          </Stack>
        </HStack>
      </RadioGroup>
    </>
  )
}
