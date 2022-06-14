import styles from './New.module.scss'
import { Box } from "@guruhotel/aura-ui"
import { ReactNode } from "react"

interface NewModuleButtonProps {
  icon: ReactNode,
  label: string,
  onClick: () => void
}

export default function NewModuleButton({ icon, label, onClick }: NewModuleButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      <Box as="span" className={styles.icon}>{icon}</Box>
      <Box as="span" className={styles.label}>{label}</Box>
    </button>
  )
}
