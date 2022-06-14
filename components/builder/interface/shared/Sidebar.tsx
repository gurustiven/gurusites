import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger, Text } from "@guruhotel/aura-ui";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode,
  title: string,
  trigger: any,
  position?: string
}

export default function Sidebar({ children, title, trigger, position }: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent size="sm" placement={position || "left"} style={{ borderRadius: '8px', margin: '12px', overflow: "auto", padding: "24px 28px" }}>
        <SheetClose css={{ alignItems: "center", background: "$transparent", border: '0', cursor: 'pointer', display: "flex", justifyContent: 'center', height: "40px", padding: '0', top: '20px', width: "40px" }}>
          <Cross1Icon />
        </SheetClose>
        <SheetTitle css={{ margin: '0 0 12px 0', padding: '0' }}>
          <Text fontSize="lg" css={{ color: "$darkie" }}>{title}</Text>
        </SheetTitle>
        {children}
      </SheetContent>
    </Sheet>
  )
}
