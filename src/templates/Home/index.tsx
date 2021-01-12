// Dependencies
import { ReactElement } from 'react'
import Head from 'next/head'

// Components
import MainLayout from '../../layouts/Main'
import Hero from '../../components/Hero'

function HomeTemplate(): ReactElement {
  return (
    <>
      <Head>
        <title>Steroids ToDo | Simple ToDo with steroids</title>
      </Head>
      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  )
}

export default HomeTemplate
