import { HStack, Label, RadioGroup, RadioGroupIndicator, RadioGroupItem, Stack, Text } from "@guruhotel/aura-ui";
import ImageSelect from "../../shared/ImageSelect";

export default function ModulesStyleWidth({ defaultValue, update }: any) {
  return (
    <>
      <HStack justifyContent="space-between" spacing="2" css={{ marginBottom: '4px' }}>
        <Text as="h5">Container width</Text>
      </HStack>
      <ImageSelect
        options={
          [
            { image: <img src="/builder/style/fullwidth.svg" alt="fullWidth" />, label: "Full width", value: "100%" },
            { image: <img src="/builder/style/boxed.svg" alt="boxed" />, label: "Boxed", value: "1240px" },
          ]
        }
        onChange={(e: any) => update("containerWidth", "container", e)}
        defaultValue={defaultValue}
      />
    </>
  )
}
