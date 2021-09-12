import { GoogleSpreadsheet } from 'google-spreadsheet'

import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const api = async (request, response) => {
  try {
    // Inicia a conexão com a planilha
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    });
    await doc.loadInfo()

    // Pega os dados de uma tabela específica
    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B3')

    // Pegando a célula
    const showPromotionCell = sheet.getCell(2, 0) //linha, coluna

    const cellText = sheet.getCell(2, 1)

    response.end(JSON.stringify({
      showCoupon: showPromotionCell.value === 'Verdadeiro',
      message: cellText.value
    }))

  } catch(err) {
    response.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }
}

export default api
