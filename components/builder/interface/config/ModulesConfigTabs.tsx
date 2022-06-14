import { Tabs, TabsContent, TabsList, TabsTrigger } from "@guruhotel/aura-ui";
import { ReactNode } from "react";
import ModulesStyle from "./style/ModulesStyle";

interface ModulesConfigTabsProps {
  children: ReactNode,
  module: any,
  pageId?: any
}

export default function ModulesConfigTabs({ children, module, pageId }: ModulesConfigTabsProps) {
  return (
    <Tabs defaultValue="general" css={{ boxShadow: "none", width: '100%' }}>
      <TabsList css={{ margin: '0', marginBottom: '16px', padding: '0' }}>
        <TabsTrigger colorScheme="darkie" size="sm" value="general">General</TabsTrigger>
        <TabsTrigger colorScheme="darkie" size="sm" value="style">Style</TabsTrigger>
      </TabsList>
      <TabsContent value="general" css={{ padding: "0" }}>
        {children}
      </TabsContent>
      <TabsContent value="style" css={{ padding: "0" }}>
        <ModulesStyle pageId={pageId} module={module} />
      </TabsContent>
    </Tabs>
  )
}
