import { useClickOutside } from '@guruhotel/aura-hooks';
import { ChevronRightRegular, GearRegular } from '@guruhotel/aura-icons';
import { Box, Button, Center, HStack, Input, Label, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger, Text, TextArea, VStack } from "@guruhotel/aura-ui";
import { ChevronRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useRouter } from 'next/router'
import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import { useApp } from "components/context/AppContext";
import Sidebar from '../../shared/Sidebar';

export default function LayoutPages() {
  const router = useRouter()
  const { p } = router.query
  const { theme, setTheme } = useApp()

  // Add new element
  function newElement() {
    const values = { ...theme }
    values?.pages?.push({ id: uuid_v4(), name: "-", route: "", modules: [] })
    setTheme(values)
  }

  if (theme && p) {
    return (
      <Sidebar
        title='Pages'
        trigger={
          <HStack>
            <GearRegular color='darkie' label='settings' css={{ marginRight: '2px' }} />
            <Button colorScheme="darkie" css={{ display: 'block' }} variant="link">Pages</Button>
            <ChevronRightRegular label="spacer" size="xs" css={{ marginRight: '12px' }} />
            <Button colorScheme="darkie" css={{ display: 'block' }} variant="flat">{p ? `${theme?.pages?.filter(({ id }: any) => id === p)[0]?.name}` : 'Home'}</Button>
          </HStack>
        }
      >
        <Box css={{ marginTop: '20px' }}>
          {theme?.pages?.map((item: any, key: any) => (
            <LayoutPagesCreator key={key} data={item} theme={theme} setTheme={setTheme} />
          ))}
        </Box>
        <Center>
          <Button colorScheme="darkie" variant="outline" onClick={() => newElement()}>Add new +</Button>
        </Center>
      </Sidebar>
    )
  }

  return null
}


function LayoutPagesCreator({ data, theme, setTheme }: any) {
  const router = useRouter()

  // Get current element
  const { id, name, route } = data

  // Update parent
  const update = (name: string, value: any) => {
    const values = { ...theme };
    const index = values?.pages?.map((page: any) => page?.id).indexOf(id);
    index !== -1 && (values.pages[index][name] = value);
    setTheme(values)
  };

  // Change state to edit
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <Box ref={ref} css={opened ? { border: "1px solid $darkie4", borderRadius: '8px', width: "100%", margin: "24px 0", padding: "16px", position: 'relative' } : { borderBottom: "1px solid $darkie4", marginBottom: "16px", paddingBottom: "16px", position: 'relative' }}>
      {opened ?
        <>
          <Text fontSize="sm" css={{ marginBottom: "4px" }}>Edit routes</Text>
          <Input id="pageName" defaultValue={name} placeholder="Name" size="sm" style={{ margin: "4px 0", width: "100%" }} onChange={(e) => update("name", e.target.value)} />
          <Input id="pageRoute" defaultValue={route} placeholder="Route" size="sm" style={{ margin: "4px 0", width: "100%" }} onChange={(e) => update("route", e.target.value)} />
          <Separator css={{ background: '$transparent', margin: '4px 0' }} />
          <Text fontSize="sm" css={{ marginBottom: "4px" }}>Edit SEO</Text>
          <Input placeholder='Page title' size="sm" style={{ margin: "4px 0", width: "100%" }} />
          <TextArea placeholder='Page description' style={{ margin: "4px 0", width: "100%" }} />
        </>
        :
        <>
          <Button colorScheme="darkie" variant="outline" onClick={() => router.push(`/builder/?p=${id}`)} css={{ height: "40px", marginTop: "-24px", position: 'absolute', right: '0', top: '50%', width: "40px" }}><ChevronRightIcon /></Button>
          <Text fontWeight="bold">{name || "-"}</Text>
          <Text as="span" fontSize="sm" css={{ color: "$text10" }}>Route: <Text fontWeight="bold" css={{ color: "$darkie", display: 'inline' }}>/{route || 'empty'}</Text></Text>
        </>
      }
      <HStack css={opened ? { margin: "4px 0 0 0" } : { justifyContent: "space-between", margin: '0 -8px', width: "100%" }}>
        <Button colorScheme={opened ? "darkie" : "primary"} variant={opened ? "flat" : "link"} size="xs" onClick={() => setOpened(!opened)} type="button">{opened ? 'Save' : 'Edit page'}</Button>
        {opened ? <Button colorScheme="text" variant="link" size="xs" onClick={() => setOpened(!opened)} type="button">Delete</Button> : ""}
      </HStack>
    </Box>
  )
}
