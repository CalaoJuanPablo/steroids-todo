// Dependencies
import classnames from 'classnames'
import Link from 'next/link'

// Styles
import styles from './Hero.module.scss'

function Hero() {
  return (
    <section id='hero' className='w-100 pa4'>
      <div className='w-100 mw8 center'>
        <h1 className='f-subheadline lh-solid'>Steroids ToDo App</h1>
        <p className='f4 f5-ns lh-copy'>
          This is a ToDos app with a very overkill tech stack:
        </p>
        <ul
          className={classnames(
            'f4',
            'f5-ns',
            'lh-copy',
            'list',
            'mb5',
            styles.stack_list
          )}
        >
          <li>Next JS</li>
          <li>Tachyons</li>
          <li>Sass</li>
          <li>Typescript</li>
          <li>Jest/React Testing Library</li>
          <li>GraphQL</li>
          <li>Apollo</li>
          <li>React Query</li>
          <li>Test Café</li>
        </ul>
        <Link href='/all'>
          <a className='pv3 ph5  br3 ba link black dim'>Go to all TODOs</a>
        </Link>
      </div>
    </section>
  )
}

export default Hero
