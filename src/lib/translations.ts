export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      method: "Método",
      freeClass: "★ Aula Grátis",
    },
    hero: {
      badge: "★ Primeira aula GRÁTIS ★",
      title1: "APRENDA",
      title2: "INGLÊS",
      subtitle:
        "Aulas personalizadas que combinam com você. Comece sua jornada com uma aula experimental gratuita ✨",
      cta: "Agendar Aula Grátis ♡",
      learnMore: "Saiba Mais",
    },
    about: {
      label: "♡ Sobre Mim",
      title: "Apaixonada Pelo",
      titleHighlight: " Seu Sucesso",
      description:
        "Sou uma professora de inglês dedicada que torna o aprendizado empolgante, não entediante. Seja para trabalho, viagem ou simplesmente porque é legal — vou criar uma vibe que funcione pra você.",
      students: "Alunos",
      years: "Anos",
      rating: "Avaliação",
      teacherBadge: "✨ Teacher",
    },
    method: {
      label: "✦ O Método",
      title: "Evolua Seu",
      titleHighlight: " Inglês",
      subtitle:
        "Nada de livros chatos. Aprendizado moderno e envolvente que realmente funciona.",
      cards: [
        {
          icon: "🎯",
          title: "Personalizado",
          description:
            "Cada aula é feita pra você. Seu ritmo, seus interesses, seus objetivos.",
        },
        {
          icon: "💬",
          title: "Conversação",
          description:
            "Conversa real desde o primeiro dia. Ganhe confiança falando naturalmente.",
        },
        {
          icon: "📅",
          title: "Flexível",
          description:
            "Aulas online que encaixam na sua agenda. Manhã, noite — você escolhe.",
        },
        {
          icon: "🚀",
          title: "Resultados",
          description:
            "Acompanhe seu progresso. Veja sua evolução semana após semana.",
        },
      ],
    },
    contact: {
      label: "♡ Começar",
      title: "Pronto pra",
      titleHighlight: " Evoluir?",
      badge: "✨ Primeira aula = GRÁTIS ✨",
      description:
        "Preencha o formulário e entro em contato em até 24h pra agendar sua aula experimental. Zero pressão, só boas vibes.",
      benefits: [
        "Resposta em até 24 horas",
        "Online via Zoom / Google Meet",
        "Sessão experimental de 50 minutos",
      ],
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome completo",
        email: "Email",
        emailPlaceholder: "seu@email.com",
        phone: "Telefone / WhatsApp",
        phonePlaceholder: "Seu número",
        level: "Nível Atual de Inglês",
        levelPlaceholder: "Selecione seu nível",
        levels: [
          "Iniciante - Sei muito pouco",
          "Básico - Sei o básico",
          "Intermediário - Consigo manter uma conversa",
          "Avançado - Quero aprimorar",
        ],
        goals: "Quais seus objetivos?",
        goalsPlaceholder:
          "ex: Preciso de inglês pro trabalho, viagem, séries...",
        submit: "Chamar no WhatsApp ★",
      },
    },
    footer: {
      tagline: "Ajudando alunos a brilhar, uma aula de cada vez. ♡",
    },
  },
  en: {
    nav: {
      about: "About",
      method: "Method",
      freeClass: "★ Free Class",
    },
    hero: {
      badge: "★ First class is FREE ★",
      title1: "LEARN",
      title2: "ENGLISH",
      subtitle:
        "Personalized classes that match your vibe. Start your journey with a free experimental lesson ✨",
      cta: "Book Free Class ♡",
      learnMore: "Know More",
    },
    about: {
      label: "♡ About Me",
      title: "Passionate About",
      titleHighlight: " Your Success",
      description:
        "I'm a dedicated English teacher who makes learning feel exciting, not boring. Whether you need English for work, travel, or just because it's cool — I'll create a vibe that works for you.",
      students: "Students",
      years: "Years",
      rating: "Rating",
      teacherBadge: "✨ Teacher",
    },
    method: {
      label: "✦ The Method",
      title: "Level Up Your",
      titleHighlight: " English",
      subtitle:
        "No boring textbooks. Just engaging, modern learning that actually sticks.",
      cards: [
        {
          icon: "🎯",
          title: "Personalized",
          description:
            "Every lesson is crafted just for you. Your pace, your interests, your goals.",
        },
        {
          icon: "💬",
          title: "Conversational",
          description:
            "Real talk from day one. Build confidence speaking naturally.",
        },
        {
          icon: "📅",
          title: "Flexible",
          description:
            "Online classes that match your schedule. Morning, night — you pick.",
        },
        {
          icon: "🚀",
          title: "Results-Driven",
          description:
            "Track your progress. See yourself leveling up week by week.",
        },
      ],
    },
    contact: {
      label: "♡ Get Started",
      title: "Ready to",
      titleHighlight: " Level Up?",
      badge: "✨ First class = FREE ✨",
      description:
        "Fill out the form and I'll reach out within 24h to schedule your free trial. Zero pressure, all good vibes.",
      benefits: [
        "Reply within 24 hours",
        "Online via Zoom / Google Meet",
        "50-minute trial session",
      ],
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "Your phone number",
        level: "Current English Level",
        levelPlaceholder: "Select your level",
        levels: [
          "Beginner - I know very little",
          "Elementary - I know the basics",
          "Intermediate - I can hold a conversation",
          "Advanced - I want to refine my skills",
        ],
        goals: "What are your goals?",
        goalsPlaceholder:
          "e.g., I need English for work, travel, K-dramas...",
        submit: "Message on WhatsApp ★",
      },
    },
    footer: {
      tagline: "Helping students shine, one lesson at a time. ♡",
    },
  },
} as const;

export type Lang = keyof typeof translations;
