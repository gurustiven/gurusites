import {
  HStack,
  Label,
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  Stack,
  Text,
} from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'
import ImageSelect from '../../shared/ImageSelect'

export default function ModulesStyleWidth({ defaultValue, update }: any) {
  const { theme } = useApp()
  return (
    <>
      <HStack
        justifyContent="space-between"
        spacing="2"
        css={{ marginBottom: '4px' }}
      >
        <Text as="h5">Container width</Text>
      </HStack>
      <ImageSelect
        options={[
          {
            image: <img src="/builder/style/fullwidth.svg" alt="fullWidth" />,
            label: 'Full width',
            value: '100%',
          },
          {
            image: <img src="/builder/style/boxed.svg" alt="boxed" />,
            label: 'Boxed',
            value: theme?.general?.container?.maxWidth,
          },
        ]}
        onChange={(e: any) => update('containerWidth', 'container', e)}
        defaultValue={defaultValue}
      />
    </>
  )
}
