import styles from './Shared.module.scss'
import { useEffect, useState } from "react";

interface ImageSelectProps {
  onChange: any,
  options: any,
}

export default function ImageSelect({ onChange, options }: ImageSelectProps) {
  const [option, setOption] = useState()

  useEffect(() => {
    onChange(option)
  }, [option])

  return (
    <div className={styles.imageSelect}>
      {options?.map(({ label, value }: any, key: any) => (
        <ImageSelectItem key={key} label={label} value={value} option={option} setOption={setOption} />
      ))}
    </div>
  )
}

function ImageSelectItem({ label, value, option, setOption }: any) {
  return (
    <span onClick={() => setOption(value)} role="button" className={`${option === value ? `${styles.option} ${styles.active}` : styles.option}`}>
      {label}
    </span>
  )
}
