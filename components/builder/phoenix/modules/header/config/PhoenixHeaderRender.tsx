import { useApp } from 'components/context/AppContext'
import { useEffect, useState } from 'react'
import PhoenixHeader from '../Header'

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize(): any {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function PhoenixHeaderRender() {
  // Get theme
  const { theme } = useApp()

  // Obtain windows width for medias
  const size = useWindowSize();


  // Get header config
  const getHeader = theme?.header

  // Update style from theme
  function style() {
    return Object.assign(
      {},
      size?.width < 1024 ? { ...getHeader?.style?.desktop, ...getHeader?.style?.mobile } : getHeader?.style?.desktop
    );
  }

  return (
    <PhoenixHeader data={getHeader} style={style()} />
  )
}
