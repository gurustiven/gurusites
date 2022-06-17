import { createContext, ReactNode, useContext, useState } from 'react'

type appContextType = {
  theme: any
  setTheme: any
}

const appContextDefaultValues: appContextType = {
  theme: {},
  setTheme: null,
}

const AppContext = createContext<appContextType>(appContextDefaultValues)

export function useApp() {
  return useContext(AppContext)
}

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
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
      name: 'Hotel name',
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

  const [theme, setTheme] = useState(defaultTheme)

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}
