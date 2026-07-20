export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string
  mission: string
  values: string[]
  photo: string
  location: string
  phone: string
  email: string
  linkedin: string
  indeed: string
  whatsapp: string
  cvUrl: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  responsibilities: string[]
  results: string[]
  technologies: string[]
  logo?: string
}

export interface Skill {
  name: string
  level: number
  category: 'hard' | 'soft'
  icon: string
}

export interface Project {
  id: string
  title: string
  description: string
  objective: string
  architecture: string
  technologies: string[]
  roadmap: string[]
  images: string[]
  videos?: string[]
  link?: string
}

export interface Stat {
  label: string
  value: string
  suffix?: string
  icon: string
  description: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: 'treinamentos' | 'operacoes' | 'eventos' | 'projetos'
  title: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  pdfUrl?: string
  credentialUrl?: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  type: 'career' | 'education' | 'milestone'
}

export interface Language {
  nav: {
    home: string
    about: string
    experience: string
    results: string
    skills: string
    projects: string
    gallery: string
    certificates: string
    contact: string
  }
  hero: {
    downloadCV: string
    contact: string
  }
  about: {
    title: string
    mission: string
    values: string
    timeline: string
  }
  experience: {
    title: string
    responsibilities: string
    results: string
    technologies: string
  }
  results: {
    title: string
    indicators: string
  }
  skills: {
    title: string
    hard: string
    soft: string
  }
  projects: {
    title: string
    objective: string
    architecture: string
    technologies: string
    roadmap: string
  }
  gallery: {
    title: string
    all: string
  }
  certificates: {
    title: string
    view: string
  }
  contact: {
    title: string
    form: {
      name: string
      email: string
      message: string
      send: string
    }
  }
  footer: {
    rights: string
  }
}
