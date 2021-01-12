// Types
import { NotFoundLayoutPropTypes } from './NotFound.types'
// Components
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function NotFoundLayout({ children }: NotFoundLayoutPropTypes) {
  return (
    <div className='vh-100 flex flex-column justify-between items-stretch'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default NotFoundLayout
