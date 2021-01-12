// Dependencies
import { ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import MainLayout from '../../layouts/Main'

function ToDosTemplate(): ReactElement {
  const { pathname } = useRouter()
  const thisPageIs = pathname.includes('/all')
    ? 'All'
    : pathname.includes('/undone')
    ? 'Undone'
    : pathname.includes('/done')
    ? 'Done'
    : null

  return (
    <>
      <Head>
        <title>Steroids ToDo | All ToDos</title>
      </Head>
      <MainLayout>
        <h1 className='f-headline lh-solid'>{thisPageIs} ToDos Page</h1>
      </MainLayout>
    </>
  )
}

export default ToDosTemplate
