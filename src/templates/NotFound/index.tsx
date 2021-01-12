// Dependencies
import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// Components
import NotFoundLayout from '../../layouts/NotFound'

function NotFoundTemplate(): ReactElement {
  return (
    <>
      <Head>
        <title>Steroids ToDo | Not Found</title>
      </Head>
      <NotFoundLayout>
        <main className='w-100 ph4 pv3 tc'>
          <h1 className='f-headline lh-solid mv0'>404</h1>
          <h2 className='f1 lh-title'>Not Found</h2>
          <Link href='/'>
            <a className='link black underline'>Go to home</a>
          </Link>
        </main>
      </NotFoundLayout>
    </>
  )
}

export default NotFoundTemplate
