import { useClickOutside, useHover } from '@guruhotel/aura-hooks'
import { Button } from '@guruhotel/aura-ui'
import { Pencil2Icon, PlusCircledIcon } from '@radix-ui/react-icons'
import { ReactNode, useState } from 'react'
import ModulesConfigActionsNew from './new/ModulesConfigActionsNew'
import Sidebar from '../../shared/Sidebar'
import ModulesConfigActionsDelete from './delete/ModulesConfigActionsDelete'
import ModulesConfigActionsDuplicate from './duplicate/ModulesConfigActionsDuplicate'
import styles from './Modules.module.scss'

interface ModulesConfigActionsProps {
  module: ReactNode
  config: ReactNode
  moduleData?: any
  onlyEdit?: boolean
  isBlock?: boolean
  columnId?: any
  parentModuleId?: any
}

export default function ModulesConfigActions({
  module,
  config,
  moduleData,
  onlyEdit,
  isBlock,
  columnId,
  parentModuleId,
}: ModulesConfigActionsProps) {
  // Set hover to allow edit options
  const { hovered, ref: hoverRef } = useHover()

  // Manage state when a module is active
  const [active, setActive] = useState(false)

  // Disable active state when click outside module
  const ref = useClickOutside(() => setActive(false))

  // set some repeated values
  let blockProps = {
    isBlock,
    parentModuleId,
    columnId,
    module: moduleData,
  }

  return (
    <div
      className={
        hovered || active
          ? `${styles.modules} ${styles.active}`
          : styles.modules
      }
      ref={hoverRef}
    >
      <div ref={ref}>
        <div
          className={`${styles.buttons} ${
            onlyEdit ? styles.bottom : styles.top
          }`}
        >
          <Sidebar
            title="Edit module"
            position="right"
            trigger={
              <Button onClick={() => setActive(true)} type="button">
                <Pencil2Icon />
              </Button>
            }
          >
            {config}
          </Sidebar>
          {!onlyEdit && (
            <>
              <ModulesConfigActionsDuplicate {...blockProps} />
              <ModulesConfigActionsDelete {...blockProps} />
              <ModulesConfigActionsNew {...blockProps}>
                <Button type="button">
                  <PlusCircledIcon />
                </Button>
              </ModulesConfigActionsNew>
            </>
          )}
        </div>
        <div className={styles.module}>{module}</div>
      </div>
    </div>
  )
}
