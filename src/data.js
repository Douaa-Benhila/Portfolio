/* ════════════════════════════════════════════════════════════
   Tout le texte du site est ici.
   Couleurs et polices : en haut de src/styles/global.css
   Photos : public/img
   ⚠️ Ne jamais supprimer un bloc "export const", seulement modifier son contenu
   ════════════════════════════════════════════════════════════ */

export const profile = {
  name: 'Douaa',
  full: 'Douaa Benhila',
  role: 'Future développeuse Full Stack',
  location: 'Marseille, France',
  email: 'douaa.benhila10@gmail.com',
  intro: "Étudiante en Master Informatique à Aix-Marseille Université, j'aime concevoir des applications complètes, de l'architecture à l'interface. Je recherche un stage de fin d'études d'avril à septembre 2027.",
  github: 'https://github.com/Douaa-Benhila',
  linkedin: 'https://www.linkedin.com/in/douaa-benhila-b2062a2aa/',
  avatar: 'img/faces/avatar.png',
  photo: 'public/img/stickers/lg/sticker_douaa.png', 
}

export const heroCounts = [
  { value: 'Bac+5', label: 'Master Informatique' },
  { value: '3+', label: 'projets réalisés' },
  { value: 'Avril 2027', label: "à la recherche d'un stage de 6 mois" },
]

export const about = {
  photos: ['img/photos/douaa.jpeg'],
  roles: ['Étudiante'],
  paragraphs: [
    "J'ai 23 ans et je suis en deuxième année de Master Informatique, parcours Ingénierie du Développement Logiciel. Passionnée par le développement full-stack, je progresse à travers des projets personnels et universitaires.",
  ],
  stats: [
    { value: '2021', label: 'Bac Sciences Maths · Maroc (2020–2021)' },
    { value: '2025', label: 'Licence Informatique · Aix-Marseille Université (2021–2025)' },
    { value: '2027', label: 'Master Informatique, Ingénierie du Développement Logiciel · Aix-Marseille Université (2025–2027)' },
    { value: '2027+', label: 'Développeuse full-stack… et plein de surprises ✨' },
  ],
}

/* visual : 'gauge' | 'heatmap' | 'outfit' (illustrations), ou ajouter image: 'img/...' */
export const projects = [
  {
    title: '',
    tag: '',
    visual: '',
    text: '',
    tech: [''],
    link: 'https://github.com/Douaa-Benhila',
    color: '#EDE6FB',
  },
   {
    title: '',
    tag: '',
    visual: '',
    text: '',
    tech: [''],
    link: 'https://github.com/Douaa-Benhila',
    color: '#EDE6FB',
  },
  {
    title: '',
    tag: '',
    visual: '',
    text: '',
    tech: [''],
    link: 'https://github.com/Douaa-Benhila',
    color: '#EDE6FB',
  },
]

export const skills = [
  'Java', 'Python', 'JavaScript', 'TypeScript',  'Kotlin', 'SQL', 'XML',
  'HTML', 'CSS', 'React', 'Angular', 'Vue.js', 'Bootstrap',
  'Spring Boot', 'Node.js', 'Express', 'Flask', 'Hibernate / JPA', 'API REST', 'JavaFX',
  'MySQL', 'MongoDB', 'SQLite',
  'JUnit', 'Mockito', 'SonarQube',
  'Git', 'GitHub', 'GitLab', 'Scrum / Agile', 'CI/CD',
]


// images découpées de l'accueil (la tête qui suit la souris)
export const lookFrames = { from: 0, to: 28 }
export const contactSticker = 'public/img/stickers/lg/sticker_douaa.png'