// Dependencies
import { ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import MainLayout from '../../layouts/Main'
import { getToDoState } from '../../utils/getToDoState'
import { capitalizeString } from '../../utils/capitalizeString'

function ToDosTemplate(): ReactElement {
  const { pathname } = useRouter()

  const toDoState = getToDoState(pathname)
  const capitalToDoState = toDoState !== null ? capitalizeString(toDoState) : ''

  return (
    <>
      <Head>
        <title>Steroids ToDo | {capitalToDoState} ToDos</title>
      </Head>
      <MainLayout>
        <h1 className='f-headline lh-solid'>{capitalToDoState} ToDos Page</h1>
      </MainLayout>
    </>
  )
}

export default ToDosTemplate
