import styles from '../Block.module.scss'
import Modules from 'components/builder/Modules'
import useWindowSize from 'utils/useWindowSize'
import PhoenixBlock from '../PhoenixBlock'
import ModulesConfigActionsNew from 'components/builder/interface/config/actions/new/ModulesConfigActionsNew'
import { Button, Stack, Text } from '@guruhotel/aura-ui'
import { PlusIcon } from '@radix-ui/react-icons'

export default function PhoenixBlockRender({ module }: any) {
  // Obtain windows width for medias
  const { width } = useWindowSize()

  // Update style from theme
  function style() {
    return Object.assign(
      {},
      width < 1024
        ? { ...module?.style?.desktop, ...module?.style?.mobile }
        : module?.style?.desktop
    )
  }

  return (
    <PhoenixBlock data={module} style={style()}>
      {module?.config?.items ? (
        module?.config?.items?.map((column: any, key: any) => (
          <div className={styles.column} key={key}>
            {column?.modules?.length ? (
              column?.modules?.map((moduleData: any) => {
                return (
                  <Modules
                    key={moduleData?.id}
                    moduleData={moduleData}
                    parentModuleId={module?.id}
                    columnId={column?.id}
                    isBlock
                  />
                )
              })
            ) : (
              <Stack
                alignItems="center"
                justifyContent="center"
                css={{ height: '100%', width: '100%' }}
              >
                <ModulesConfigActionsNew
                  isBlock
                  parentModuleId={module?.id}
                  columnId={column?.id}
                >
                  <Button colorScheme="darkie" type="button">
                    <span style={{ marginRight: '4px' }}>Add Module</span>
                    <PlusIcon />
                  </Button>
                </ModulesConfigActionsNew>
              </Stack>
            )}
          </div>
        ))
      ) : (
        <Stack
          justifyContent="center"
          css={{
            border: '2px dashed $darkie5',
            width: '100%',
          }}
        >
          <Text css={{ color: '$darkie8', margin: '20px 0' }}>
            Edit this block module and add columns
          </Text>
        </Stack>
      )}
    </PhoenixBlock>
  )
}
