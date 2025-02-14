export const navigation = [
  {
    text: 'Painel',
    path: '/home',
    icon: 'home'
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
        text: 'Perfil',
        path: '/profile'
      },
      {
        text: 'Tarefas',
        path: '/tasks'
      }
    ]
  }
];
