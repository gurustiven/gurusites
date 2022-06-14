/* eslint-disable @next/next/no-img-element */
import { Badge, Box, Button, Stack } from "@guruhotel/aura-ui";
import { LaptopIcon, MobileIcon } from '@radix-ui/react-icons'
import Link from "next/link";
import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter()
  const { pathname } = router
  return (
    <Stack alignItems="center" justifyContent="space-between" css={{ background: 'white', borderBottom: "1px solid $darkie4", height: "68px", padding: "0 20px", width: "100%" }}>
      <Box css={{ width: "33.33%" }}>
        <Link href="/">
          <Box css={{ borderRight: "1px solid $darkie4", cursor: 'pointer', display: "inline-block", paddingRight: "16px", verticalAlign: "middle" }}>
            <img src="/guruhotel.svg" alt="GuruHotel" style={{ height: "28px" }} />
          </Box>
        </Link>
        <Box css={{ display: 'inline-flex', marginLeft: '8px' }}>
          <Link href="/dashboard">
            <Button
              colorScheme={pathname?.includes('dashboard') ? 'guru' : 'darkie'}
              variant={pathname?.includes('dashboard') ? 'solid' : 'link'}
              type="button"
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/builder?p=798e4870-c94f-43f5-aff6-0023211a1f8f">
            <Button
              colorScheme={pathname?.includes('builder') ? 'guru' : 'darkie'}
              variant={pathname?.includes('builder') ? 'solid' : 'link'}
              type="button"
            >
              Builder
            </Button>
          </Link>
          <Link href="/settings/general">
            <Button
              colorScheme={pathname?.includes('settings') ? 'guru' : 'darkie'}
              variant={pathname?.includes('settings') ? 'solid' : 'link'}
              type="button"
            >
              Settings
            </Button>
          </Link>
        </Box>
      </Box>
      {pathname?.includes('builder') &&
        <>
          <Box css={{ display: "flex", justifyContent: "center", width: "33.33%" }}>
            <Button colorScheme="guru"><LaptopIcon /></Button>
            <Button colorScheme="darkie" variant="link"><MobileIcon /></Button>
          </Box>
          <Box css={{ display: "flex", justifyContent: "flex-end", width: "33.33%" }}>
            <Badge size="lg" css={{ background: 'transparent', color: '$darkie8', fontWeight: '$normal', marginRight: "8px" }}>Edited 2 hours ago</Badge>
            <Button colorScheme="darkie" size="sm" css={{ marginRight: "8px" }} variant="outline">Save</Button>
            <Button size="sm" colorScheme="guru">Publish</Button>
          </Box>
        </>
      }
    </Stack >
  )
}
