import {
  HStack,
  Label,
  Separator,
  Switch,
  SwitchThumb,
} from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'

export default function StickToFooter({
  moduleIndex,
  modulePageIndex,
  defaultValue,
}: any) {
  // Get theme
  const { theme, setTheme, pageIndex } = useApp()

  function stickToFooter() {
    const values = { ...theme }
    values.pages[pageIndex].modules[moduleIndex]['stickToFooter'] = true
    setTheme(values)
  }

  function removeFromFooter() {
    const values = { ...theme }
    values.pages[modulePageIndex].modules[moduleIndex]['stickToFooter'] = false
    setTheme(values)
  }

  return (
    <>
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <HStack spacing="2" css={{ width: '100%' }}>
        <Switch
          id="stickToFooter"
          defaultChecked={defaultValue}
          onCheckedChange={
            defaultValue ? () => removeFromFooter() : () => stickToFooter()
          }
        >
          <SwitchThumb />
        </Switch>
        <Label htmlFor="stickToFooter" css={{ whiteSpace: 'nowrap' }}>
          Stick to footer?
        </Label>
      </HStack>
    </>
  )
}
