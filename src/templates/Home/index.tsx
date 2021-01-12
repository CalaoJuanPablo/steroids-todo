// Dependencies
import { ReactElement } from 'react'
import Head from 'next/head'

// Components
import MainLayout from '../../layouts/Main'

function HomeTemplate(): ReactElement {
  return (
    <>
      <Head>
        <title>Steroids ToDo | Simple ToDo with steroids</title>
      </Head>
      <MainLayout>
        <h1 className='f-headline lh-solid'>Steroids ToDo App</h1>
      </MainLayout>
    </>
  )
}

export default HomeTemplate
