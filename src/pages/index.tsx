import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/zeit-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>Ayush's Blog</h1>
      <h2>
        Blazing Fast <Link href="/blog">Blog</Link> Powered By NextJS
      </h2>

      <Features />

      <div className="explanation">
        <p>
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> blog with a{' '}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
          is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>.
          Visit my <Link href="/blog">blog</Link> from here.
        </p>
        <p>
          Credits:{' '}
          <ExtLink href="https://github.com/ijjk/notion-blog">
            {' '}
            notion-blog{' '}
          </ExtLink>
        </p>
      </div>
    </div>
  </>
)
