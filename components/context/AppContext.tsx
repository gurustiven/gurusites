import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type appContextType = {
  theme: any;
  setTheme: any;
};

const appContextDefaultValues: appContextType = {
  theme: {},
  setTheme: null,
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function useApp() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const defaultTheme = {
    general: {
      colors: {
        main: "black",
        secondary: "blue",
        utilitary: "red"
      },
      fonts: {
        main: "Inter",
        secondary: "Inter"
      }
    },
    header: {
      name: "Hotel name",
      logo: "",
      menu: [],
      design: "classic",
      style: {
        container: {
          width: '1200px'
        },
        desktop: {
          backgroundColor: 'black',
          borderColor: 'black',
          color: 'white',
        }
      }
    },
    pages: [{
      id: "798e4870-c94f-43f5-aff6-0023211a1f8f",
      name: "home",
      route: "",
      modules: []
    }]
  }

  const [theme, setTheme] = useState(defaultTheme)

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}
