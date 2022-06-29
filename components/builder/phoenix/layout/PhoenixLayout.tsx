import styles from './Layout.module.scss'
import ModulesConfigActions from '../../interface/config/actions/ModulesConfigActions'
import PhoenixHeaderConfig from '../modules/header/config/PhoenixHeaderConfig'
import LayoutPages from 'components/builder/interface/layout/pages/LayoutPages'
import PhoenixHeaderRender from '../modules/header/config/PhoenixHeaderRender'
import { Box, useTheme } from '@guruhotel/aura-ui'
import PhoenixFooterRender from '../modules/footer/config/PhoenixFooterRender'
import PhoenixFooterConfig from '../modules/footer/config/PhoenixFooterConfig'
import { useRouter } from 'next/router'

export default function PhoenixLayout({ children }: any) {
  const router = useRouter()
  const { viewport } = router.query
  const { theme } = useTheme()
  return (
    <div
      className={styles.layout}
      style={{ backgroundColor: theme?.colors?.darkie3.toString() }}
    >
      <Box css={{ marginBottom: '12px', marginLeft: '20px' }}>
        <LayoutPages />
      </Box>
      <div
        className={
          viewport === 'mobile'
            ? `${styles.container} ${styles.mobileContainer}`
            : styles.container
        }
      >
        <ModulesConfigActions
          onlyEdit
          module={<PhoenixHeaderRender />}
          config={<PhoenixHeaderConfig />}
        />
        {children}
        <ModulesConfigActions
          onlyEdit
          module={<PhoenixFooterRender />}
          config={<PhoenixFooterConfig />}
        />
      </div>
    </div>
  )
}
