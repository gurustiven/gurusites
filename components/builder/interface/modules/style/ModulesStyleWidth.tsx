import { HStack, Label, RadioGroup, RadioGroupIndicator, RadioGroupItem, Stack, Text } from "@guruhotel/aura-ui";

export default function ModulesStyleWidth({ update }: any) {
  return (
    <>
      <HStack justifyContent="space-between" spacing="2" css={{ marginBottom: '8px' }}>
        <Text as="h5">Width</Text>
      </HStack>
      <RadioGroup onValueChange={(e: any) => update("containerWidth", "container", e)}>
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
