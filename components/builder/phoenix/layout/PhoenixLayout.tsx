import styles from './Layout.module.scss'
import ModulesConfigActions from '../../interface/config/ModulesConfigActions';
import PhoenixHeaderConfig from '../modules/header/config/PhoenixHeaderConfig';
import LayoutPages from 'components/builder/interface/layout/pages/LayoutPages';
import PhoenixHeaderRender from '../modules/header/config/PhoenixHeaderRender';
import { Box, useTheme } from '@guruhotel/aura-ui';

export default function PhoenixLayout({ children }: any) {
  const { theme } = useTheme()
  return (
    <div className={styles.layout} style={{ backgroundColor: theme?.colors?.darkie3.toString() }}>
      <Box css={{ marginBottom: '12px', marginLeft: '20px' }}>
        <LayoutPages />
      </Box>
      <div className={styles.container}>
        <ModulesConfigActions module={<PhoenixHeaderRender />} config={<PhoenixHeaderConfig />} />
        {children}
      </div>
    </div>
  )
}
