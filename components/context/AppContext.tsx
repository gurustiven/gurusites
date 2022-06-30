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
        main: '#000000',
        secondary: '#444444',
        utilitary: '#888888',
      },
      fonts: {
        main: 'inter',
        secondary: 'poppins',
      },
      container: {
        maxWidth: '1240px',
      },
    },
    footer: {
      style: {
        general: {
          containerWidth: '1240px',
        },
        desktop: {
          backgroundColor: 'white',
          borderTopWidth: '1px',
          borderTopColor: '#f2f2f2',
          color: 'black',
        },
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
          backgroundColor: '#211F5C',
          color: 'white',
        },
      },
    },
    pages: [
      {
        id: '798e4870-c94f-43f5-aff6-0023211a1f8f',
        config: {
          name: 'Home',
          title: 'My home page',
          route: 'home',
          description: 'This is my home page description for SEO',
        },
        modules: [],
      },
    ],
  }

  // Set theme
  const [theme, setTheme] = useState(defaultTheme)

  // Save theme in localstorage
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const getSavedTheme = JSON.parse(localStorage.getItem('theme') || '[]')
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
