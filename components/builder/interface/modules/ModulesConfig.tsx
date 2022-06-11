import { useClickOutside, useHover } from '@guruhotel/aura-hooks'
import { Button } from '@guruhotel/aura-ui'
import { CopyIcon, MoveIcon, Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'
import { ReactNode, useState } from 'react'
import Sidebar from '../components/Sidebar'
import styles from './Modules.module.scss'

interface ModulesConfigProps {
  module: ReactNode,
  config: ReactNode
}

export default function ModulesConfig({ module, config }: ModulesConfigProps) {
  // Set hover to allow edit options
  const { hovered, ref: hoverRef } = useHover();

  // Manage state when a module is active
  const [active, setActive] = useState(false)

  // Disable active state when click outside module
  const ref = useClickOutside(() => setActive(false));
  return (
    <div className={styles.modules} ref={hoverRef}>
      <div ref={ref} className={hovered || active ? `${styles.options} ${styles.active}` : styles.options}>
        <Sidebar title='Edit module' position="right" trigger={<Button onClick={() => setActive(true)} type="button"><Pencil2Icon /></Button>}>{config}</Sidebar>
        <Button type="button"><MoveIcon /></Button>
        <Button type="button"><TrashIcon /></Button>
        <Button type="button"><CopyIcon /></Button>
      </div>
      <div>{module}</div>
    </div>
  )
}
