import { InputGroup, Text, VStack } from "@guruhotel/aura-ui";
import { ValueIcon } from "@radix-ui/react-icons";

export default function ModulesStyleColor({ defaultValue, update }: any) {
  return (
    <>
      <VStack justifyContent="space-between" spacing="1">
        <Text as="h5">Text color</Text>
        <InputGroup size="sm" css={{ width: '100%' }}>
          <InputGroup.LeftIcon icon={<ValueIcon />} />
          <InputGroup.Input id="" type="text" onChange={update} defaultValue={defaultValue} />
        </InputGroup>
      </VStack>
    </>
  )
}
