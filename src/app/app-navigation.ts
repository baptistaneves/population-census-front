export const navigation = [
  {
    text: 'Painel',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Famílias',
    path: '/familias',
    icon: 'user'
  },
  {
    text: 'Configurações',
    icon: 'preferences',
    items: [
      {
        text: 'Províncias',
        path: '/provincias'
      },
      {
        text: 'Munícipios',
        path: '/municipios'
      },
      {
        text: 'Faixa Etária',
        path: '/'
      }
    ]
  }
];
