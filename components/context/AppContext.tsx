import { createContext, ReactNode, useContext, useState } from "react";

type appContextType = {
  theme: any;
  setTheme: any;
};

const appContextDefaultValues: appContextType = {
  theme: [],
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
  const [theme, setTheme] = useState([
    {
      general: {
        colors: {
          main: "",
          secondary: "",
          utilitary: ""
        },
        fonts: {
          main: "",
          secondary: ""
        }
      },
      header: {
        name: "",
        logo: "",
        menu: [],
        order: "classic"
      },
      pages: [{
        id: "798e4870-c94f-43f5-aff6-0023211a1f8f",
        name: "home",
        route: "",
        modules: []
      }]
    }
  ])

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}
