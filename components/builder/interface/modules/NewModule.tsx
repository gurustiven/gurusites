import styles from './New.module.scss'
import { Box, Button, HStack } from "@guruhotel/aura-ui";
import { useApp } from "../../../context/AppContext";
import { v4 as uuid_v4 } from "uuid";
import { HeadingIcon, ImageIcon, TextIcon } from '@radix-ui/react-icons';
import Sidebar from "../shared/Sidebar";
import NewModuleButton from './NewModuleButton';

interface NewModuleProps {
  page: any
}

export default function NewModule({ page }: NewModuleProps) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Add new module
  function addNewModule(module: string, defaultStyle?: object) {
    const values = { ...theme }
    const index = values?.pages?.map(({ id }: any) => id).indexOf(page);
    index !== -1 && values?.pages[index]?.modules?.push({ id: uuid_v4(), name: module, config: [], style: defaultStyle || {} });
    setTheme(values)
  }

  return (
    <Box className={styles.new}>
      <Sidebar title="New module" position="right" trigger={<Button colorScheme="darkie" variant="outline">Add new module +</Button>}>
        <HStack spacing="2">
          <NewModuleButton
            icon={<ImageIcon />}
            label="Photo slider"
            onClick={() => addNewModule('slider', {
              container: {
                width: '100%'
              },
              desktop: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
              }
            })}
          />
          <NewModuleButton icon={<HeadingIcon />} label="Title" onClick={() => addNewModule('title')} />
          <NewModuleButton icon={<TextIcon />} label="Content" onClick={() => addNewModule('content')} />
        </HStack>
      </Sidebar>
    </Box>
  )
}
