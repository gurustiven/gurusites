import React, { useCallback, useMemo } from 'react'
import { Editable, withReact, useSlate, Slate, ReactEditor } from 'slate-react'
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
  BaseEditor,
} from 'slate'
import { HistoryEditor, withHistory } from 'slate-history'
import {
  CodeIcon,
  FontBoldIcon,
  FontItalicIcon,
  ListBulletIcon,
  QuoteIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextAlignTopIcon,
  UnderlineIcon,
} from '@radix-ui/react-icons'
import { Box, Button, HStack } from '@guruhotel/aura-ui'

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
  }
}

const RichText = ({ defaultValue, setValue }: any) => {
  const renderElement = useCallback((props: any) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <Slate
      editor={editor}
      value={defaultValue || initialValue}
      onChange={setValue}
    >
      <Box css={{ border: '1px solid $darkie4' }}>
        <HStack justifyContent="center" css={{ backgroundColor: '$darkie4' }}>
          <MarkButton format="bold" icon={FontBoldIcon} />
          <MarkButton format="italic" icon={FontItalicIcon} />
          <MarkButton format="underline" icon={UnderlineIcon} />
          <MarkButton format="code" icon={CodeIcon} />
          <BlockButton format="block-quote" icon={QuoteIcon} />
          <BlockButton format="numbered-list" icon={TextAlignTopIcon} />
          <BlockButton format="bulleted-list" icon={ListBulletIcon} />
          <BlockButton format="left" icon={TextAlignLeftIcon} />
          <BlockButton format="center" icon={TextAlignCenterIcon} />
          <BlockButton format="right" icon={TextAlignRightIcon} />
          <BlockButton format="justify" icon={TextAlignJustifyIcon} />
        </HStack>
        <Box css={{ padding: '12px 20px' }}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter content..."
            spellCheck
            autoFocus
          />
        </Box>
      </Box>
    </Slate>
  )
}

const toggleBlock = (editor: any, format: any) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties: Partial<SlateElement>
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor: any, format: any) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor: any, format: any, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  )

  return !!match
}

const isMarkActive = (editor: any, format: any) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }: any) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }: any) => {
  const editor = useSlate()
  const Icon = icon
  return (
    <Button
      onClick={(event: any) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
      colorScheme="darkie"
      variant="flat"
      css={{ borderRadius: '0', backgroundColor: '$darkie4' }}
    >
      <Icon />
    </Button>
  )
}

const MarkButton = ({ format, icon }: any) => {
  const editor = useSlate()
  const Icon = icon
  return (
    <Button
      onClick={(event: any) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
      colorScheme="darkie"
      variant="flat"
      css={{ borderRadius: '0', backgroundColor: '$darkie4' }}
    >
      <Icon />
    </Button>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'Your content goes here...' }],
  },
]

export default RichText
