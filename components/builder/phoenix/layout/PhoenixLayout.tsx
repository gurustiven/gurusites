import styles from './Layout.module.scss'
import ModulesConfigActions from '../../interface/config/actions/ModulesConfigActions'
import PhoenixHeaderConfig from '../modules/header/config/PhoenixHeaderConfig'
import LayoutPages from 'components/builder/interface/layout/pages/LayoutPages'
import PhoenixHeaderRender from '../modules/header/config/PhoenixHeaderRender'
import { Box } from '@guruhotel/aura-ui'
import PhoenixFooterRender from '../modules/footer/config/PhoenixFooterRender'
import PhoenixFooterConfig from '../modules/footer/config/PhoenixFooterConfig'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import LoadFonts from '../utils/LoadFonts'

export default function PhoenixLayout({ children }: any) {
  const router = useRouter()

  // Get viewport based on query param
  const { viewport } = router.query

  return (
    <div className={styles.layout}>
      <Box css={{ marginBottom: '12px', marginLeft: '20px' }}>
        <LayoutPages />
      </Box>
      <div
        id="phoenix--layout"
        className={
          viewport === 'mobile'
            ? `${styles.container} ${styles.mobileContainer}`
            : styles.container
        }
      >
        <LoadFonts />
        <ModulesConfigActions
          onlyEdit
          module={<PhoenixHeaderRender />}
          config={<PhoenixHeaderConfig />}
        />
        <Fragment>{children}</Fragment>
        <ModulesConfigActions
          onlyEdit
          module={<PhoenixFooterRender />}
          config={<PhoenixFooterConfig />}
        />
      </div>
    </div>
  )
}
