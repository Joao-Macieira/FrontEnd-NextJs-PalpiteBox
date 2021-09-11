import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1mUNXiBnibZXnK8vPs3_Oq7URxrbPcUfn2pjsDzObLrY')

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()

  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

const api = async (request, response) => {
  try {
    // Inicia a conexão com a planilha
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    // Pegando a planilha de resultados
    const sheet = doc.sheetsByIndex[1];

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B3')

    // Pegando a célula
    const showPromotionCell = sheetConfig.getCell(2, 0)
    const cellText = sheetConfig.getCell(2, 1)

    let Cupom = ''
    let Promo = ''

    if (showPromotionCell.value === 'Verdadeiro') {
      Cupom = genCupom()
      Promo = cellText.value

    }

    const data = JSON.parse(request.body)

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: parseInt(data.Nota),
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      Cupom,
      Promo
    });

    response.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))
  } catch(err) {
    response.end(err)
  }
}

export default api
