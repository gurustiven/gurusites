import styles from './Layout.module.scss'
import ModulesConfig from '../../interface/modules/ModulesConfig';
import PhoenixHeaderConfig from '../modules/header/config/PhoenixHeaderConfig';
import LayoutPages from 'components/builder/interface/layout/pages/LayoutPages';
import PhoenixHeaderRender from '../modules/header/config/PhoenixHeaderRender';
import { Box } from '@guruhotel/aura-ui';

export default function PhoenixLayout({ children }: any) {
  return (
    <div className={styles.layout}>
      <Box css={{ marginBottom: '12px' }}>
        <LayoutPages />
      </Box>
      <div className={styles.container}>
        <ModulesConfig module={<PhoenixHeaderRender />} config={<PhoenixHeaderConfig />} />
        {children}
      </div>
    </div>
  )
}
