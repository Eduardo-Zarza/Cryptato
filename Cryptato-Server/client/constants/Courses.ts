// constants/Courses.ts
export const courses = [
    {
        id: 'intro',
        title: 'Introducción a Blockchain',
        subtitle: 'Blockchain & MetaMask',
        pages: [
          'Blockchain es una estructura de datos distribuida que permite registrar transacciones de forma inmutable, sin necesidad de una autoridad central. Cada bloque contiene información cifrada que depende del bloque anterior, creando una cadena difícil de alterar sin consenso.',
          'La descentralización de blockchain significa que no hay un servidor central. En su lugar, una red de nodos mantiene una copia del libro contable y verifica las transacciones mediante algoritmos de consenso como Proof of Work o Proof of Stake.',
          'MetaMask es una wallet digital que permite a los usuarios almacenar criptomonedas y conectarse con aplicaciones descentralizadas (dApps) directamente desde el navegador o móvil. Funciona como puente entre el usuario y la blockchain, facilitando la gestión de claves y firmas.',
          'Con MetaMask puedes realizar transacciones en la red Ethereum, firmar contratos inteligentes, y explorar el mundo Web3. Esta herramienta es fundamental para interactuar con finanzas descentralizadas, juegos blockchain, marketplaces de NFTs y mucho más.',
          'Además de facilitar el uso de blockchain, MetaMask también integra funciones de seguridad como gestión de múltiples cuentas, redes personalizadas y protección contra sitios web maliciosos. Entender su uso es clave para cualquier usuario que quiera participar activamente en Web3.',
          'Ahora que comprendes qué es blockchain y cómo MetaMask actúa como puente, estás listo para aprender cómo estas tecnologías se aplican en el mundo real, especialmente en las criptomonedas.',
        ],
    },

   {
  id: 'aplicacion',
  title: 'Aplicación en criptomonedas',
  subtitle: 'Blockchain & MetaMask',
  pages: [
    'Las criptomonedas son activos digitales que utilizan blockchain como sistema subyacente. Las más conocidas son Bitcoin, Ethereum y muchas altcoins. Su valor se basa en oferta-demanda, utilidad del proyecto y confianza en el sistema descentralizado.',
    'Con MetaMask puedes interactuar con tokens ERC-20 (fungibles) y ERC-721/ERC-1155 (NFTs). Puedes recibir pagos, participar en preventas (ICO), votar en DAOs o interactuar con mercados NFT como OpenSea.',
    'Al conectar MetaMask con dApps puedes acceder a servicios de intercambio (como Uniswap), jugar videojuegos que recompensan con tokens, o acceder a protocolos financieros sin intermediarios.',
    'Es fundamental comprender que las transacciones en blockchain no pueden revertirse. Por eso, al firmar una operación desde MetaMask, debes revisar cuidadosamente el contrato y los datos involucrados.',
    'Cada transacción en Ethereum requiere pagar un "gas fee", que compensa a los mineros o validadores. La tarifa puede cambiar según la congestión de la red, lo cual debes considerar al usar dApps frecuentemente.',
    'Dominar estas herramientas te permitirá moverte con soltura en el ecosistema cripto, ya sea para invertir, crear o simplemente experimentar con una tecnología que está transformando el mundo financiero.',
  ],
},

{
    id: 'seguridad',
    title: 'Seguridad en blockchain',
    subtitle: 'Wallets y Seguridad',
    pages: [
      'La seguridad en blockchain recae completamente en el usuario. A diferencia de los sistemas bancarios tradicionales, no hay instituciones que puedan recuperar fondos perdidos. Por ello, la gestión responsable es crucial.',
      'La clave privada y la frase semilla son las puertas de acceso a tus fondos. Si alguien las obtiene, puede vaciar tu wallet. Deben almacenarse offline, preferentemente en papel o dispositivos físicos como Trezor o Ledger.',
      'Existen wallets calientes (hot wallets) que están conectadas a internet —como MetaMask— y frías (cold wallets) que operan offline. Las wallets frías son ideales para almacenamiento a largo plazo por su seguridad superior.',
      'Además de proteger tu clave, es fundamental verificar la autenticidad de las dApps con las que te conectas. Muchos ataques se hacen a través de contratos maliciosos que parecen legítimos.',
      'Los contratos inteligentes también pueden tener errores. Muchos ataques han aprovechado vulnerabilidades para drenar fondos de pools o contratos. Utiliza siempre plataformas auditadas y confiables.',
      'Un enfoque responsable incluye actualizar regularmente tu software, evitar redes Wi-Fi públicas para transacciones, y no reutilizar contraseñas. La educación constante es clave para mantenerte protegido en este entorno cambiante.',
    ],
  },
  {
    id: 'defi',
    title: 'Finanzas Descentralizadas (DeFi)',
    subtitle: 'DeFi',
    pages: [
      'DeFi es un ecosistema de aplicaciones financieras construidas sobre blockchains públicas como Ethereum. Permiten realizar funciones como préstamos, ahorros, intercambios y seguros sin necesidad de intermediarios.',
      'Las plataformas DeFi usan contratos inteligentes para automatizar operaciones. Esto permite a los usuarios prestar criptomonedas, ganar intereses (lending), o bloquear activos a cambio de recompensas (staking).',
      'Una práctica común es el yield farming: los usuarios proporcionan liquidez a un protocolo y reciben recompensas en forma de tokens. Sin embargo, estos sistemas implican riesgos como la pérdida impermanente o bugs en contratos.',
      'DeFi también habilita DAOs (organizaciones autónomas descentralizadas), que toman decisiones colectivas sobre el futuro del protocolo mediante votaciones en cadena.',
      'El acceso es completamente global. Cualquiera con una wallet como MetaMask puede participar sin pasar por procesos bancarios tradicionales. Esto democratiza el acceso, pero también implica más responsabilidad del usuario.',
      'Aunque revolucionario, DeFi no está exento de riesgos: estafas, proyectos sin auditoría y mercados altamente volátiles. La educación y la prudencia son tus mejores herramientas antes de comprometer fondos.',
    ],
  },
  ];