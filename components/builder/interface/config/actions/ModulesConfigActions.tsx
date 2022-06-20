import { useClickOutside, useHover } from '@guruhotel/aura-hooks'
import { Button } from '@guruhotel/aura-ui'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { ReactNode, useState } from 'react'
import Sidebar from '../../shared/Sidebar'
import ModulesConfigActionsDelete from './delete/ModulesConfigActionsDelete'
import ModulesConfigActionsDuplicate from './duplicate/ModulesConfigActionsDuplicate'
import styles from './Modules.module.scss'

interface ModulesConfigActionsProps {
  module: ReactNode
  config: ReactNode
  onlyEdit?: boolean
  moduleData?: any
}

export default function ModulesConfigActions({
  module,
  config,
  onlyEdit,
  moduleData,
}: ModulesConfigActionsProps) {
  // Set hover to allow edit options
  const { hovered, ref: hoverRef } = useHover()

  // Manage state when a module is active
  const [active, setActive] = useState(false)

  // Disable active state when click outside module
  const ref = useClickOutside(() => setActive(false))
  return (
    <div className={styles.modules} ref={hoverRef}>
      <div
        ref={ref}
        className={
          hovered || active
            ? `${styles.options} ${styles.active}`
            : styles.options
        }
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
            <ModulesConfigActionsDuplicate module={moduleData} />
            <ModulesConfigActionsDelete module={moduleData} />
          </>
        )}
      </div>
      <div>{module}</div>
    </div>
  )
}
