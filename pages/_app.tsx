import { AuraUIProvider } from "@guruhotel/aura-ui";
import type { AppProps } from 'next/app'
import { AppProvider } from "../components/context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AuraUIProvider>
        <Component {...pageProps} />
      </AuraUIProvider>
    </AppProvider>
  );
}

export default MyApp;
