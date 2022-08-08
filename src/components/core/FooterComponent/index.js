import Image from 'next/image'

import classes from './styles.module.scss'

const FooterComponent = () => {
  return (
    <footer className={classes.footer}>
      <div>
          <p>Powered by</p>
          <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={classes.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </footer>
  )
}

export default FooterComponent
