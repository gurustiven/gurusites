/* eslint-disable @next/next/no-img-element */
import styles from './Shared.module.scss'
import { useEffect, useState } from 'react'
import { Stack, Text } from '@guruhotel/aura-ui'
import { UploadIcon } from '@radix-ui/react-icons'

export default function ImageUpload({ defaultValue, onChange, style }: any) {
  const [imageLink, setImageLink] = useState(defaultValue)

  function fileManage(e) {
    const file = e.target.files[0]
    setImageLink(URL.createObjectURL(file))
  }

  useEffect(() => {
    onChange(imageLink)
  }, [imageLink])

  return (
    <Stack
      justifyContent="center"
      css={{
        backgroundColor: style?.backgroundColor,
        color: style?.color,
        borderWidth: '1px',
        borderStyle: 'solid',
        bordercolor: style?.backgroundColor,
        borderRadius: '$md',
        padding: '8px',
      }}
      className={styles.imageUpload}
    >
      {imageLink ? (
        <img src={imageLink} style={{ maxHeight: '60px', maxWidth: '80%' }} />
      ) : (
        <>
          <UploadIcon />
          <Text as="span">Upload image</Text>
          <input type="file" onChange={(e) => fileManage(e)} />
        </>
      )}
    </Stack>
  )
}
