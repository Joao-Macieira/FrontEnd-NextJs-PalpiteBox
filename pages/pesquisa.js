import { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })

  const grades = [0, 1, 2, 3, 4, 5]

  const [success, setSuccess] = useState(false)
  const [response, setResponse] = useState({})

  const save = async () => {
    try {
      const response = await fetch('api/save', {
        method: 'Post',
        body: JSON.stringify(form)
      })

      const data = await response.json()

      setSuccess(true)
      setResponse(data)

    } catch (error) {
      throw error
    }
  }

  const onChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold text-2xl'>Críticas e Sugestões</h1>
      <p className='text-center my-6'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>

      { !success &&
        <div className='w-1/5 mx-auto mt-4'>
          <label className='font-bold'>Seu Nome:</label>
          <input className='p-2 block shadow bg-blue-100 my-2 rounded' type='text' placeholder='Nome' name='Nome' onChange={onChange} value={form.Nome} />

          <label className='font-bold'>Seu E-mail:</label>
          <input className='p-2 block shadow bg-blue-100 my-2 rounded' type='text' placeholder='E-mail' name='Email' onChange={onChange} value={form.Email} />

          <label className='font-bold'>Seu Whatsapp:</label>
          <input className='p-2 block shadow bg-blue-100 my-2 rounded' type='text' placeholder='Whatsapp' name='Whatsapp' onChange={onChange} value={form.Whatsapp} />

          <label className='font-bold'>Nota:</label>
          <div className='flex pb-6'>
            {
              grades.map(grade => {
                return (
                  <label key={grade} className='block w-1/6 text-center'>
                    {grade}<br />
                    <input type='radio' name='Nota' value={grade} onChange={onChange} />
                  </label>
                )
              })
            }
          </div>

          <button
            className='
                bg-blue-400
                px-12
                py-4
                font-bold
                rounded-lg
                shadow-lg
                hover:shadow
              '
            onClick={save}>
              Salvar
          </button>
        </div>
      }

      {
        success &&
          <div className='w-1/5 mx-auto mt-4'>
            <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica</p>
            {
              response.showCoupon &&
                <>
                  <div className='text-center border p-4 mb-4'>
                    Seu Cupom: <br />
                    <span className='font-bold text-2xl'>{response.Cupom}</span>
                  </div>
                  <div className='text-center border p-4'>
                    <span className='font-bold block mb-2'>{response.Promo}</span>
                    <br />
                    <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom.</span>
                  </div>
                </>
            }
          </div>
      }
    </div>
  )
}

export default Pesquisa
