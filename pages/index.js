import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p className='mt-12 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='text-center my-12'>
        <Link href='pesquisa'>
          <a
            className='
              bg-blue-400
              px-12
              py-4
              font-bold
              rounded-lg
              shadow-lg
              hover:shadow
            '
          >
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      <p className='mt-12 text-center'>
        Mensagem dinâmica do desconto
      </p>
    </div>
  )
}
