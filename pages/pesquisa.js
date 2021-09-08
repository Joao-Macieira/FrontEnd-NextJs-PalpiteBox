import Link from 'next/link'

const Pesquisa = () => {
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold text-2xl'>Críticas e Sugestões</h1>
      <p className='text-center my-6'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>

      <div className='w-1/5 mx-auto mt-4'>
        <label className='font-bold'>Seu Nome:</label>
        <input className='p-2 block shadow bg-blue-100 my-2 rounded' type='text' />
      </div>
    </div>
  )
}

export default Pesquisa
