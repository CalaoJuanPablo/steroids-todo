// Dependencies
import { ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import MainLayout from '../../layouts/Main'
import { getToDoState } from '../../utils/getToDoState'

function ToDosTemplate(): ReactElement {
  const { pathname } = useRouter()

  const toDoState = getToDoState(pathname)

  return (
    <>
      <Head>
        <title>Steroids ToDo | All ToDos</title>
      </Head>
      <MainLayout>
        <h1 className='f-headline lh-solid'>
          {toDoState?.toUpperCase()} ToDos Page
        </h1>
      </MainLayout>
    </>
  )
}

export default ToDosTemplate
