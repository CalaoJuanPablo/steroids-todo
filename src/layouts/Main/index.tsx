// Dependencies
import { ReactElement } from 'react'

// Types
import { MainLayoutPropTypes } from './Main.types'

// Components
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function MainLayout({ children }: MainLayoutPropTypes): ReactElement {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
