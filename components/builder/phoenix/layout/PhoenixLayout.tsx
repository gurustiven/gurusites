import styles from './Layout.module.scss'
import PhoenixHeader from "../modules/header/Header";
import ModulesConfig from '../../interface/modules/ModulesConfig';
import PhoenixHeaderConfig from '../modules/header/config/PhoenixHeaderConfig';
import { Box } from '@guruhotel/aura-ui';
import LayoutPages from 'components/builder/interface/layout/pages/LayoutPages';

export default function PhoenixLayout({ children }: any) {
  return (
    <div className={styles.layout}>
      <Box css={{ marginBottom: '12px' }}>
        <LayoutPages />
      </Box>
      <div className={styles.container}>
        <ModulesConfig module={<PhoenixHeader />} config={<PhoenixHeaderConfig />} />
        {children}
      </div>
    </div>
  )
}
