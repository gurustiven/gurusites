import styles from './New.module.scss'
import { Box, Button, HStack } from "@guruhotel/aura-ui";
import { useApp } from "../../../../context/AppContext";
import { uuid } from 'uuidv4';
import { HeadingIcon, ImageIcon, TextIcon } from '@radix-ui/react-icons';
import Sidebar from "../Sidebar";
import NewModuleButton from './NewModuleButton';

interface NewModuleProps {
  page: any
}

export default function NewModule({ page }: NewModuleProps) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Add new module
  function addNewModule(module: string) {
    const values = [...theme]
    const index = values?.[0]?.pages?.map(({ id }: any) => id).indexOf(page);
    index !== -1 && values?.[0]?.pages[index]?.modules?.push({ id: uuid(), name: module, config: [] });
    setTheme(values)
  }

  return (
    <Box className={styles.new}>
      <Sidebar title="New module" position="right" trigger={<Button colorScheme="darkie" variant="outline">Add new module +</Button>}>
        <HStack spacing="2">
          <NewModuleButton icon={<ImageIcon />} label="Photo slider" onClick={() => addNewModule('slider')} />
          <NewModuleButton icon={<HeadingIcon />} label="Title" onClick={() => addNewModule('title')} />
          <NewModuleButton icon={<TextIcon />} label="Content" onClick={() => addNewModule('content')} />
        </HStack>
      </Sidebar>
    </Box>
  )
}
