import { HStack, Separator } from "@guruhotel/aura-ui";
import { useEffect, useState } from "react";
import ModulesStyleBackground from "./ModulesStyleBackground";
import ModulesStyleBorder from "./ModulesStyleBorder";
import ModulesStyleColor from "./ModulesStyleColor";
import ModulesStyleMargin from "./ModulesStyleMargin";
import ModulesStylePadding from "./ModulesStylePadding";
import ModulesStyleRadius from "./ModulesStyleRadius";
import { useApp } from "components/context/AppContext"

export default function ModulesStyle({ component }: any) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Receive new data from config
  const [data, setData] = useState([])

  // Update parent module
  const update = (name: any, value: any) => {
    const values = [...theme];
    if (values[0]?.[component]?.style) {
      values[0][component].style[name] = value
    } else {
      values[0][component].style = { [name]: value }
    }
    setTheme(values)
  };

  return (
    <>
      <HStack spacing="4">
        <ModulesStyleBackground update={(e: any) => update("backgroundColor", e.target.value)} />
        <ModulesStyleColor update={(e: any) => update("color", e.target.value)} />
      </HStack>
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStyleRadius />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStyleMargin />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStylePadding />
      <Separator css={{ background: '$darkie2', margin: '16px 0 12px 0' }} />
      <ModulesStyleBorder />
    </>
  )
}
