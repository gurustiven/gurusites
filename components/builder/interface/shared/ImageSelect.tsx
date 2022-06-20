/* eslint-disable @next/next/no-img-element */
import styles from './Shared.module.scss'
import { useEffect, useState } from "react";

interface ImageSelectProps {
  onChange: any,
  options: any,
  defaultValue: any
}

export default function ImageSelect({ onChange, options, defaultValue }: ImageSelectProps) {
  const [option, setOption] = useState(defaultValue)

  useEffect(() => {
    onChange(option)
  }, [option])

  return (
    <div className={styles.imageSelect}>
      {options?.map(({ label, value, image }: any, key: any) => (
        <ImageSelectItem key={key} label={label} value={value} image={image} option={option} setOption={setOption} />
      ))}
    </div>
  )
}

function ImageSelectItem({ image, label, value, option, setOption }: any) {
  return (
    <span onClick={() => setOption(value)} role="button" className={styles.option}>
      <div className={`${option === value ? `${styles.image} ${styles.active}` : styles.image}`}>{image}</div>
      <span className={styles.label}>{label}</span>
    </span>
  )
}
