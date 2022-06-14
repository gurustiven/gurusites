import styles from './Layout.module.scss'
import ModulesConfigActions from '../../interface/config/ModulesConfigActions';
import PhoenixHeaderConfig from '../modules/header/config/PhoenixHeaderConfig';
import LayoutPages from 'components/builder/interface/layout/pages/LayoutPages';
import PhoenixHeaderRender from '../modules/header/config/PhoenixHeaderRender';
import { Box } from '@guruhotel/aura-ui';

export default function PhoenixLayout({ children }: any) {
  return (
    <div className={styles.layout}>
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
