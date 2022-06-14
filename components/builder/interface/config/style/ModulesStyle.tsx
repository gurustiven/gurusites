import { HStack, Separator } from "@guruhotel/aura-ui";
import ModulesStyleBackground from "./ModulesStyleBackground";
import ModulesStyleBorder from "./ModulesStyleBorder";
import ModulesStyleColor from "./ModulesStyleColor";
import ModulesStyleMargin from "./ModulesStyleMargin";
import ModulesStylePadding from "./ModulesStylePadding";
import ModulesStyleRadius from "./ModulesStyleRadius";
import { useApp } from "components/context/AppContext"
import ModulesStyleWidth from "./ModulesStyleWidth";

export default function ModulesStyle({ component }: any) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Update parent module
  const update = (name: any, media: any, value: any) => {
    const values = { ...theme };
    if (values?.[component]?.style?.[media]) {
      values[component].style[media][name] = value
    } else {
      values[component].style[media] = { [name]: value }
    }
    setTheme(values)
  };

  return (
    <>
      <HStack spacing="4">
        <ModulesStyleBackground update={(e: any) => update("backgroundColor", "desktop", e.target.value)} />
        <ModulesStyleColor update={(e: any) => update("color", "desktop", e.target.value)} />
      </HStack>
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStyleWidth update={update} />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStyleRadius update={update} />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStyleMargin update={update} />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStylePadding update={update} />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStyleBorder update={update} />
    </>
  )
}
