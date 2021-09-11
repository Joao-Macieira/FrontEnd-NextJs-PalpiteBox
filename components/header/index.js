import Link from 'next/link'

import styles from './styles.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <img className='mx-auto' src="img/logo_palpitebox.png" alt="PalpiteBox" />
        </div>
      </div>

      <div className='bg-gray-200 p-4 shadow-md text-center'>
          <Link href="/">
            <a className="px-2 hover:underline">Home</a>
          </Link>
          <Link href="/sobre">
            <a className="px-2 hover:underline">Sobre</a>
          </Link>
          <Link href="/contato">
            <a className="px-2 hover:underline">Contato</a>
          </Link>
          <Link href="/pesquisa">
            <a className="px-2 hover:underline">Pesquisa</a>
          </Link>
      </div>
    </>
  )
}

export default Header
