import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {

  return <div className='main'>
     <Component {...pageProps} />
  </div>
}

export default MyApp