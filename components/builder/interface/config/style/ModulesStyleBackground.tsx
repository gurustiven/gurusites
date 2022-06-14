import { VStack, InputGroup, Text } from "@guruhotel/aura-ui";
import { ValueIcon } from "@radix-ui/react-icons";

export default function ModulesStyleBackground({ update }: any) {
  return (
    <VStack justifyContent="space-between" spacing="1">
      <Text as="h5">Background color</Text>
      <InputGroup size="sm" css={{ width: '100%' }}>
        <InputGroup.LeftIcon icon={<ValueIcon />} />
        <InputGroup.Input id="" type="text" onChange={update} />
      </InputGroup>
    </VStack>
  )
}
