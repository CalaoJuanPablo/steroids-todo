// Dependencies
import { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

// Styles
import styles from './Header.module.scss'

function Header(): ReactElement {
  const { pathname } = useRouter()

  return (
    <header className='w-100 pa4'>
      <div className='w-100 mw8 flex items-center'>
        <Link href='/'>
          <a className={classnames('link', 'black', 'w4', styles.logo)}>
            <i className='far fa-check-square'></i>
          </a>
        </Link>
        <nav className='f4 lh-copy tr w-100'>
          <ul className='list flex items-center justify-end'>
            <li className='ml3'>
              <Link href='/all'>
                <a
                  className={classnames(
                    'link',
                    'black',
                    pathname.includes('/all')
                      ? styles['nav_link--active']
                      : styles.nav_link
                  )}
                >
                  All
                </a>
              </Link>
            </li>
            <li className='ml3'>
              <Link href='/undone'>
                <a
                  className={classnames(
                    'link',
                    'black',
                    pathname.includes('/undone')
                      ? styles['nav_link--active']
                      : styles.nav_link
                  )}
                >
                  Undone
                </a>
              </Link>
            </li>
            <li className='ml3'>
              <Link href='/done'>
                <a
                  className={classnames(
                    'link',
                    'black',
                    pathname.includes('/done')
                      ? styles['nav_link--active']
                      : styles.nav_link
                  )}
                >
                  Done
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
