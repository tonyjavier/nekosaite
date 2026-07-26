import { FeatureItem, AppModuleItem, Testimonial, FAQItem, TechItem } from '../types';

export const WHY_CHOOSE_ITEMS: FeatureItem[] = [
  {
    id: 'tasks',
    iconName: 'CheckSquare',
    title: 'Organize tarefas',
    description: 'Nunca esqueça seus compromissos. Priorize com facilidade, categorias personalizadas e lembretes inteligentes.'
  },
  {
    id: 'finance',
    iconName: 'Wallet',
    title: 'Controle financeiro',
    description: 'Gerencie receitas, despesas e fluxo mensal com visões claras para alcançar suas metas orçamentárias.'
  },
  {
    id: 'habits',
    iconName: 'Flame',
    title: 'Hábitos e Streaks',
    description: 'Construa consistência diariamente com marcadores visuais de 1 toque e métricas de ofensiva.'
  },
  {
    id: 'notes',
    iconName: 'FileText',
    title: 'Notas rápidas',
    description: 'Capture ideias instantaneamente com suporte a tags, busca inteligente e organização sem esforço.'
  },
  {
    id: 'pomodoro',
    iconName: 'Timer',
    title: 'Pomodoro com Foco',
    description: 'Mantenha a concentração em ciclos customizados de trabalho e descanso com métricas de tempo total.'
  },
  {
    id: 'sync',
    iconName: 'CloudCheck',
    title: 'Sincronização em Nuvem',
    description: 'Todos os seus dados sempre seguros e sincronizados offline-first com respaldo na nuvem.'
  }
];

export const APP_MODULES: AppModuleItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard Inteligente',
    subtitle: 'Visão geral do seu dia em um relance',
    description: 'Saudação personalizada com o status atual do seu mascote gato preto, resumo do saldo financeiro, sequência de hábitos e prioridades máximas do dia.',
    highlights: [
      'Saudação personalizada ("Tudo pronto, Matheus! 😻")',
      'Cards estatísticos dinâmicos e resumidos',
      'Status emocional do gato preto companion',
      'Acesso rápido a todas as funções com 1 toque'
    ],
    category: 'Central',
    mockupData: {
      title: 'Tudo pronto, Matheus!',
      metrics: [
        { label: 'Foco Hoje', value: '4 / 5 Tarefas', color: '#FF6B00' },
        { label: 'Streak', value: '14 Dias 🔥', color: '#FFB693' },
        { label: 'Saldo', value: 'R$ 3.480,00', color: '#4CAF50' }
      ],
      listItems: [
        { text: 'Revisar protótipo da Landing Page', done: true, tag: 'Alta' },
        { text: 'Estudar Jetpack Compose e Room', done: false, tag: 'Média' },
        { text: 'Registrar gastos da semana', done: false, tag: 'Finanças' }
      ]
    }
  },
  {
    id: 'agenda',
    title: 'Agenda & Tarefas',
    subtitle: 'Gestão completa de compromissos',
    description: 'Organize tudo com prioridades visuais (Alta, Média, Baixa), datas limite e filtros instantâneos por projetos.',
    highlights: [
      'Níveis de prioridade codificados por cores',
      'Categorias customizáveis (Trabalho, Estudo, Pessoal)',
      'Subtarefas e check de conclusão gratificante',
      'Notificações locais sincronizadas com a agenda'
    ],
    category: 'Organização',
    mockupData: {
      title: 'Minhas Tarefas do Dia',
      metrics: [
        { label: 'Pendentes', value: '3', color: '#FF6B00' },
        { label: 'Concluídas', value: '8', color: '#4CAF50' }
      ],
      listItems: [
        { text: 'Finalizar testes de integração Supabase', done: true, tag: 'Trabalho' },
        { text: 'Comprar petiscos para o Neko 🐈‍⬛', done: true, tag: 'Pessoal' },
        { text: 'Reunião de alinhamento com a equipe', done: false, tag: 'Trabalho' },
        { text: 'Ler 20 páginas do livro de UX Design', done: false, tag: 'Estudo' }
      ]
    }
  },
  {
    id: 'financas',
    title: 'Controle Financeiro',
    subtitle: 'Simplicidade na gestão de dinheiro',
    description: 'Saiba exatamente para onde vai seu dinheiro. Adicione lançamentos em segundos e acompanhe a evolução do seu patrimônio.',
    highlights: [
      'Entradas e saídas categorizadas',
      'Gráficos limpos de distribuição mensal',
      'Cálculo automático de saldo acumulado',
      'Privacidade total dos seus dados orçamentários'
    ],
    category: 'Finanças',
    mockupData: {
      title: 'Resumo de Julho',
      metrics: [
        { label: 'Receitas', value: '+R$ 5.200,00', color: '#4CAF50' },
        { label: 'Despesas', value: '-R$ 1.720,00', color: '#FF4444' },
        { label: 'Saldo Atual', value: 'R$ 3.480,00', color: '#FF6B00' }
      ],
      listItems: [
        { text: 'Projeto Freelance Neko', done: true, amount: '+R$ 2.500,00' },
        { text: 'Supermercado da Semana', done: true, amount: '-R$ 340,00' },
        { text: 'Assinatura Serviços Cloud', done: true, amount: '-R$ 89,90' }
      ]
    }
  },
  {
    id: 'habitos',
    title: 'Hábitos e Streaks',
    subtitle: 'Construa uma rotina inabalável',
    description: 'Acompanhe seus hábitos diários através do grid de indicadores circulares (Habit Dots) com confirmação em 1 toque.',
    highlights: [
      'Indicadores "Habit Dots" de 28px no padrão MD3',
      'Contador automático de dias de sequência (Streak 🔥)',
      'Meta de frequência personalizada por dia da semana',
      'Estatísticas e gráficos de adesão ao longo do mês'
    ],
    category: 'Consistência',
    mockupData: {
      title: 'Hábitos em Progresso',
      metrics: [
        { label: 'Streak Atual', value: '14 Dias 🔥', color: '#FF6B00' },
        { label: 'Taxa Mensal', value: '92%', color: '#4CAF50' }
      ],
      listItems: [
        { text: 'Beber 2L de água diariamente', done: true, tag: '7/7 dias' },
        { text: 'Fazer 30 minutos de exercícios', done: true, tag: '5/7 dias' },
        { text: 'Meditar durante 10 minutos', done: false, tag: '6/7 dias' }
      ]
    }
  },
  {
    id: 'notas',
    title: 'Bloco de Notas Rápido',
    subtitle: 'Suas ideias no papel digital instantaneamente',
    description: 'Anote pensamentos, rascunhos de projetos e listas de verificação com busca em tempo real e tags de categorização.',
    highlights: [
      'Formatador leve e intuitivo',
      'Sistema de tags coloridas para filtragem',
      'Pesquisa instantânea offline',
      'Visualização em grid ou lista compacta'
    ],
    category: 'Ideias',
    mockupData: {
      title: 'Caderno de Anotações',
      metrics: [
        { label: 'Total Notas', value: '24', color: '#FFB693' },
        { label: 'Favoritas', value: '5', color: '#FF6B00' }
      ],
      listItems: [
        { text: 'Ideias de novas telas para o app Neko', done: true, tag: '#design' },
        { text: 'Receita de café cremoso da tarde', done: false, tag: '#pessoal' },
        { text: 'Checklist de lançamento da V3.0', done: true, tag: '#dev' }
      ]
    }
  },
  {
    id: 'pomodoro',
    title: 'Timer Pomodoro Integrado',
    subtitle: 'Foco ininterrupto em blocos de tempo',
    description: 'Trabalhe com máxima eficiência usando o timer de técnica Pomodoro com alertas sonoros e progresso circular.',
    highlights: [
      'Ciclos de 25 min de foco + 5 min de descanso',
      'Animação de progresso circular fluida',
      'Integração direta com o registro de tarefas focadas',
      'Estatísticas de horas totais de foco acumuladas'
    ],
    category: 'Foco',
    mockupData: {
      title: 'Sessão de Foco Ativa',
      metrics: [
        { label: 'Tempo Restante', value: '18:42 min', color: '#FF6B00' },
        { label: 'Ciclo Atual', value: '#3 de 4', color: '#FFB693' }
      ],
      listItems: [
        { text: 'Trabalhando em: Redação do Artigo Neko', done: true, tag: 'Em progresso' }
      ]
    }
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Cadastre-se',
    description: 'Crie sua conta em segundos digitando seu nome, e-mail e senha, ou conecte diretamente via Login com o Google com 1 clique.'
  },
  {
    step: '02',
    title: 'Personalize',
    description: 'Escolha suas metas, configure os hábitos que deseja cultivar e ative o acompanhamento personalizado do mascote gato preto.'
  },
  {
    step: '03',
    title: 'Organize',
    description: 'Insira suas tarefas prioritárias, defina categorias financeiras e configure seu bloco de notas para consulta rápida.'
  },
  {
    step: '04',
    title: 'Acompanhe seu Progresso',
    description: 'Mantenha suas sequências de hábitos ativas (streaks), execute sessões Pomodoro e veja seus indicadores evoluírem.'
  },
  {
    step: '05',
    title: 'Conquiste seus Objetivos',
    description: 'Transforme produtividade em um hábito leve e consistente com dados seguros na nuvem e o incentivo constante do Neko.'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Kotlin', category: 'Linguagem Native', description: 'Código conciso, seguro e altamente performático.', icon: 'Code' },
  { name: 'Jetpack Compose', category: 'UI Framework', description: 'Interface moderna e reativa baseada em Material 3.', icon: 'Layout' },
  { name: 'Material Design 3', category: 'Design System', description: 'Componentes fluidos, cores tonais e acessibilidade.', icon: 'Palette' },
  { name: 'MVVM Architecture', category: 'Padrão de Código', description: 'Separação clara de responsabilidades e testabilidade.', icon: 'Layers' },
  { name: 'Room Database', category: 'Persistence', description: 'Armazenamento local super rápido com suporte Offline First.', icon: 'Database' },
  { name: 'DataStore', category: 'Preferências', description: 'Gravação assíncrona e segura de configurações.', icon: 'Settings' },
  { name: 'Supabase', category: 'Cloud Backend', description: 'Autenticação e sincronização em nuvem criptografada.', icon: 'Cloud' },
  { name: 'Google Login', category: 'Auth', description: 'Autenticação rápida, segura e com 1 toque.', icon: 'ShieldCheck' },
  { name: 'StateFlow & Coroutines', category: 'Reatividade', description: 'Processamento assíncrono suave sem travamentos.', icon: 'Zap' },
  { name: 'Retrofit & OkHttp', category: 'Networking', description: 'Comunicação eficiente via APIs REST resilientes.', icon: 'Globe' },
  { name: 'Coil', category: 'Image Loading', description: 'Carregamento otimizado e cache inteligente de imagens.', icon: 'Image' },
  { name: 'Offline First', category: 'Arquitetura', description: 'Funciona 100% sem internet com sync posterior automático.', icon: 'WifiOff' }
];

export const DIFFERENTIALS = [
  { icon: 'Zap', title: 'Tudo em 1 App Completo', desc: 'Elimina a necessidade de pagar 4 ou 5 assinaturas separadas de produtividade.', badge: 'Economia Total' },
  { icon: 'WifiOff', title: '100% Offline First', desc: 'Acesse e edite tarefas, notas e finanças mesmo no metrô, avião ou sem sinal.', badge: 'Zero Lags' },
  { icon: 'Cat', title: 'Mascote Afetivo Companion', desc: 'Um parceiro gato preto que comemora seu progresso e estimula o foco sem cobranças chatas.', badge: 'Gamificação Leve' },
  { icon: 'Eye', title: 'Dark Mode Ergonômico', desc: 'Cores profundas #131313 e acentos quentes que protegem a visão em uso noturno.', badge: 'Conforto Visual' },
  { icon: 'ShieldCheck', title: 'Privacidade & Criptografia', desc: 'Seus dados orçamentários e anotações armazenados com segurança máxima e sem anúncios.', badge: 'Dados Protegidos' },
  { icon: 'Sparkles', title: 'Interface Jetpack Compose', desc: 'Desenvolvido nativamente em Material Design 3 com resposta ao toque em tempo real.', badge: 'Ultra Fluidez' },
];

export const APP_BENEFITS_COMPARISON = [
  {
    before: 'Antes do Neko',
    beforeDesc: 'Aplicativos espalhados, assinaturas caras, cadastros manuais repetitivos e telas poluídas que causam ansiedade.',
    after: 'Com o Neko Productivity',
    afterDesc: 'Rotina unificada, mascotinho incentivador, funcionamento offline instantâneo e paz de espírito em um ambiente dark elegante.',
    benefits: [
      'Centralização de Tarefas, Hábitos, Finanças, Notas e Pomodoro',
      'Companheiro Mascotinho Gato Preto que reage à sua produtividade',
      'Leve, rápido e sem travamentos por falta de conexão de internet',
      'Grátis e sem anúncios invasivos interrompendo seu fluxo'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina Mendes',
    role: 'Engenheira de Software',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: 'Eu vivia exausta trocando entre 4 apps diferentes!',
    text: 'Eu sou engenheira de software e trabalho de home office. Eu tinha um problema sério de organização: usava um app para tarefas do trabalho, outro pras finanças, bloco de notas no PC e timer no navegador. Minha cabeça vivia exausta! O Neko resolveu isso unificando tudo num só lugar. Ligo o Pomodoro, o mascotinho gatinho me acompanha nas horas de foco e o visual dark descansou minha vista.'
  },
  {
    id: '2',
    name: 'Lucas Gabriel',
    role: 'Designer Freelancer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: 'Eu esquecia prazos de projetos e faturava sem controle.',
    text: 'Eu sou designer freelancer e meu maior desafio era manter a disciplina com horários e controlar os recebimentos de clientes. Eu esquecia de cobrar e perdia prazos de entrega. O Neko resolveu minha rotina: organizo as tarefas dos freelas por prioridade, lanço os ganhos em finanças e a sequência de hábitos me motivou a ter constância diária.'
  },
  {
    id: '3',
    name: 'Juliana Rocha',
    role: 'Estudante de Medicina',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlight: 'Não conseguia estudar no hospital por falta de sinal.',
    text: 'Eu sou estudante de medicina e faço plantões exaustivos. Meu problema principal era que a internet do hospital vivia caindo e meus antigos apps travavam sem rede. O Neko resolveu isso 100%: ele funciona perfeitamente offline! Anoto resumos, marco pendências e, quando chego em casa no Wi-Fi, ele sincroniza tudo sozinho.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'sync',
    question: 'Como funciona a sincronização em nuvem?',
    answer: 'O Neko Productivity utiliza uma arquitetura Offline First com suporte do Supabase. Todos os seus dados são salvos localmente na base Room Database do seu celular e sincronizados automaticamente na nuvem sempre que houver conexão disponível.'
  },
  {
    id: 'offline',
    question: 'O aplicativo funciona 100% offline?',
    answer: 'Sim! Você pode criar tarefas, registrar gastos financeiro, adicionar notas e rodar o timer Pomodoro totalmente sem internet. Nada é bloqueado por falta de rede.'
  },
  {
    id: 'free',
    question: 'O aplicativo é gratuito?',
    answer: 'Sim, o Neko Productivity possui uma versão 100% gratuita com todos os recursos principais liberados (tarefas, hábitos, finanças, notas e Pomodoro).'
  },
  {
    id: 'ios',
    question: 'Quando a versão para iOS (iPhone) estará disponível?',
    answer: 'A versão nativa do Neko para iOS já está em desenvolvimento em Kotlin Multiplatform (KMP) e está prevista para lançamento no próximo trimestre.'
  },
  {
    id: 'password',
    question: 'Como funciona a recuperação de senha?',
    answer: 'Basta clicar em "Esqueci minha senha" na tela de login. Enviamos um e-mail de redefinição imediato e seguro através dos nossos servidores de autenticação.'
  },
  {
    id: 'google-login',
    question: 'Posso usar minha conta do Google para entrar?',
    answer: 'Com certeza! O Neko oferece suporte a 1 toque com Google Sign-In, permitindo acesso instantâneo sem a necessidade de criar senhas adicionais.'
  }
];
