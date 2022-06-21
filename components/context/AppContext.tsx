import { useRouter } from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type appContextType = {
  theme: any
  setTheme: any
  pageIndex: any
  pageId: any
}

const appContextDefaultValues: appContextType = {
  theme: {},
  setTheme: null,
  pageIndex: undefined,
  pageId: undefined,
}

const AppContext = createContext<appContextType>(appContextDefaultValues)

export function useApp() {
  return useContext(AppContext)
}

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  const router = useRouter()
  const { p: pageId } = router.query

  const defaultTheme = {
    general: {
      colors: {
        main: 'black',
        secondary: 'blue',
        utilitary: 'red',
      },
      fonts: {
        main: 'Inter',
        secondary: 'Inter',
      },
      container: {
        maxWidth: '1240px',
      },
    },
    header: {
      name: 'Site name',
      logo: '',
      logoMaxHeight: '40px',
      logoMaxHeightMobile: '32px',
      menu: [],
      design: 'classic',
      style: {
        general: {
          containerWidth: '1240px',
        },
        desktop: {
          backgroundColor: 'black',
          color: 'white',
        },
      },
    },
    pages: [
      {
        id: '798e4870-c94f-43f5-aff6-0023211a1f8f',
        name: 'home',
        route: '',
        modules: [],
      },
    ],
  }

  // Set theme
  const [theme, setTheme] = useState(defaultTheme)

  // Save theme in localstorage
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const getSavedTheme = JSON.parse(localStorage.getItem('theme'))
      setTheme(getSavedTheme)
    }
  }, [])

  // Current page index
  const pageIndex = theme?.pages?.map(({ id }: any) => id).indexOf(pageId)

  return (
    <AppContext.Provider value={{ theme, setTheme, pageIndex, pageId }}>
      {children}
    </AppContext.Provider>
  )
}
