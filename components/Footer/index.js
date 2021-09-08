// Colocar link do linkedin, curriculo e github

const Footer = () => {
  return (
    <div className='bg-gray-600 p-4 mt-12'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: João Macieira / Linkedin / Github
        <div className='p-2'>
          <img className="inline p-4" src='img/logo_semana_fsm.png' />
          <img className="inline p-4" src='img/logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}

export default Footer
