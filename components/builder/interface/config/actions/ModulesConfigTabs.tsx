import { Tabs, TabsContent, TabsList, TabsTrigger } from '@guruhotel/aura-ui'
import { ReactNode } from 'react'
import ModulesStyle from '../style/ModulesStyle'

interface ModulesConfigTabsProps {
  children?: ReactNode
  module: any
  isBlock?: boolean
  columnId?: any
  parentModuleId?: any
}

export default function ModulesConfigTabs({
  children,
  module,
  isBlock,
  columnId,
  parentModuleId,
}: ModulesConfigTabsProps) {
  return (
    <Tabs
      defaultValue={children ? 'general' : 'style'}
      css={{ boxShadow: 'none', width: '100%' }}
    >
      <TabsList css={{ margin: '0', marginBottom: '16px', padding: '0' }}>
        {children && (
          <TabsTrigger colorScheme="darkie" size="sm" value="general">
            General
          </TabsTrigger>
        )}
        <TabsTrigger colorScheme="darkie" size="sm" value="style">
          Style
        </TabsTrigger>
      </TabsList>
      {children && (
        <TabsContent value="general" css={{ padding: '0' }}>
          {children}
        </TabsContent>
      )}
      <TabsContent value="style" css={{ padding: '0' }}>
        <ModulesStyle
          isBlock={isBlock}
          columnId={columnId}
          parentModuleId={parentModuleId}
          module={module}
        />
      </TabsContent>
    </Tabs>
  )
}
