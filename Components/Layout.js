import Header  from '../components/Header'
import Footer  from '../components/Footer'
export default function Layout({children}) {
  return (
    <>
    <div className='content'>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
    </>
  )
}