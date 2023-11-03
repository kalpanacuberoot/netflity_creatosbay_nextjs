
import { MyProvider } from '@/components/AppContext';
import '@/styles/globals.css';



export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  )
}
