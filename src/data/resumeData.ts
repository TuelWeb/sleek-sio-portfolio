
export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  pdfUrl?: string;
}

export interface ExamE4 {
  competence: string;
  description: string;
}

export interface ExamE5 {
  subject: string;
  date: string;
  summary: string;
  pdfUrl?: string;
}

const resumeData = {
  personalInfo: {
    name: "Prénom NOM",
    title: "Étudiant en BTS SIO - Option SLAM",
    email: "email@example.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    linkedin: "https://www.linkedin.com/in/prenom-nom/",
    github: "https://github.com/prenom-nom",
    profileImage: "/placeholder.svg", // Replace with actual image
    cvUrl: "#", // Replace with actual CV URL
  },
  about: {
    description: "Passionné d'informatique depuis mon plus jeune âge, je suis actuellement en formation BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers). Curieux, persévérant et créatif, j'aime résoudre des problèmes complexes et apprendre de nouvelles technologies. Mon parcours académique et mes projets personnels m'ont permis de développer des compétences solides en développement logiciel et en gestion de projets informatiques.",
  },
  education: [
    {
      degree: "BTS SIO - Option SLAM",
      institution: "École Informatique",
      location: "Paris",
      period: "2022 - 2024",
      description: "Formation en développement d'applications, bases de données, cybersécurité, et gestion de projets informatiques.",
    },
    {
      degree: "Baccalauréat Général - Spécialité Mathématiques et NSI",
      institution: "Lycée",
      location: "Paris",
      period: "2019 - 2022",
    },
  ],
  experiences: [
    {
      position: "Développeur Web (Stage)",
      company: "Entreprise Exemple",
      location: "Paris",
      period: "Mai 2023 - Juillet 2023",
      description: "Participation au développement d'une application web de gestion pour les clients de l'entreprise. Mise en place de fonctionnalités et correction de bugs.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      skills: ["Développement frontend", "Développement backend", "Tests unitaires", "Git"],
    },
    {
      position: "Technicien support informatique (Stage)",
      company: "IT Solutions",
      location: "Paris",
      period: "Janvier 2023 - Février 2023",
      description: "Assistance aux utilisateurs, maintenance du parc informatique, résolution des incidents techniques.",
      technologies: ["Windows", "Linux", "Active Directory"],
      skills: ["Support technique", "Résolution de problèmes", "Communication"],
    },
  ],
  projects: [
    {
      title: "Application de gestion de bibliothèque",
      description: "Développement d'une application web permettant de gérer les emprunts et les retours de livres dans une bibliothèque. Fonctionnalités de recherche, de réservation et de gestion des utilisateurs.",
      image: "/placeholder.svg", // Replace with actual image
      technologies: ["React", "Node.js", "MySQL", "Express"],
      githubUrl: "#",
    },
    {
      title: "Site vitrine pour une association",
      description: "Création d'un site web responsive pour une association locale, avec système de gestion de contenu personnalisé permettant aux administrateurs de modifier les pages facilement.",
      image: "/placeholder.svg", // Replace with actual image
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "#",
    },
    {
      title: "Application mobile de suivi sportif",
      description: "Développement d'une application mobile permettant aux utilisateurs de suivre leurs activités sportives et de définir des objectifs personnalisés.",
      image: "/placeholder.svg", // Replace with actual image
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "#",
    },
  ],
  skills: [
    { name: "HTML/CSS", level: 5 },
    { name: "JavaScript", level: 4 },
    { name: "TypeScript", level: 3 },
    { name: "React", level: 4 },
    { name: "Node.js", level: 3 },
    { name: "PHP", level: 3 },
    { name: "SQL", level: 4 },
    { name: "Git", level: 4 },
    { name: "Linux", level: 3 },
    { name: "Windows", level: 4 },
  ],
  certifications: [
    {
      name: "TOEIC - Score 850",
      issuer: "ETS Global",
      date: "Juin 2023",
      pdfUrl: "#",
    },
    {
      name: "CISCO CCNA",
      issuer: "Cisco",
      date: "Mars 2023",
      pdfUrl: "#",
    },
  ],
  examE4: [
    {
      competence: "Participer à la gestion du patrimoine informatique",
      description: "Mise en place d'un système d'inventaire du matériel informatique et des licences logicielles",
    },
    {
      competence: "Développer la présence en ligne de l'organisation",
      description: "Création et maintenance du site web de l'entreprise, optimisation pour le référencement",
    },
    {
      competence: "Travailler en mode projet",
      description: "Participation à un projet de développement d'application en équipe, utilisation de méthodologies agiles",
    },
  ],
  examE5: [
    {
      subject: "Intelligence Artificielle dans le développement web",
      date: "Janvier 2023",
      summary: "Étude des différentes applications de l'IA dans le développement web moderne, focus sur les assistants de code et la génération de contenu.",
      pdfUrl: "#",
    },
    {
      subject: "Sécurité des applications web",
      date: "Avril 2023",
      summary: "Analyse des vulnérabilités courantes dans les applications web et des bonnes pratiques pour les prévenir.",
      pdfUrl: "#",
    },
  ],
};

export default resumeData;
