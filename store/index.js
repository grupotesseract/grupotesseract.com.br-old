/* eslint-disable */

export const state = () => ({
  about: {
    topTitle: 'QUEM',
    bottomTitle: 'SOMOS',
    text: 'Grupo de prossionais da área de TI que acredita na importância da transparência e da cultura colaborativa em seus processos. Oferecemos serviços dos mais variados tipos, como: desenvolvimento de SITES, APLICATIVOS, SISTEMAS EMPRESARIAIS e SOLUÇÔES DE INFRAESTRUTURA.'
  },
  projectGallery: {
    header: {
      topTitle: 'PROJETOS',
      bottomTitle: 'RECENTES'
    },
    projects: [
      {
        templateType: 1,
        imageUrl: '/v1563949586/grupo-tesseract/coletivoboitata.png',
        imageAlt: 'Site do Coletivo Boitatá',
        topTitle: 'COLETIVO',
        bottomTitle: 'BOITATÁ',
        technologys: [
          'Website',
          'Laravel',
          'Sass',
          'RESTful API'
        ],
        url: 'https://coletivoboitata.com.br/',
        urlInfo: 'Ver projeto ➜'
      },
      {
        templateType: 2,
        imageUrl: '/v1564376973/grupo-tesseract/chicabrasil.png',
        imageAlt: 'Site da Chica Brasil',
        topTitle: 'CHICA',
        bottomTitle: 'BRASIL',
        technologys: [
          'WordPress',
          'Ecommerce',
          'Sass'
        ],
        url: 'https://chicabrasil.com.br/',
        urlInfo: 'Ver projeto ➜'
      },
      {
        templateType: 1,
        imageUrl: '/v1564377277/grupo-tesseract/3dfinancialacademy.png',
        imageAlt: 'App 3D Financial Academy',
        topTitle: '3D FINANCIAL',
        bottomTitle: 'ACADEMY',
        technologys: [
          'PWA',
          'React',
          'Laravel',
          'RESTful API'
        ],
        url: 'https://app.3dfinancialacademy.com.br/',
        urlInfo: 'Ver projeto ➜'
      },
      {
        templateType: 2,
        imageUrl: '/v1564377519/grupo-tesseract/vestylle.png',
        imageAlt: 'Site da Vestylle Megastore',
        topTitle: 'VESTYLLE',
        bottomTitle: 'MEGASTORE',
        technologys: [
          'PWA',
          'React',
          'Laravel',
          'RESTful API'
        ],
        url: 'http://stage-vestylle-pwa.herokuapp.com/',
        urlInfo: 'Ver projeto ➜'
      }
    ]
  }
})
