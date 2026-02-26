import { Injectable } from '@angular/core';
import {
  Experience, Project, Education, SkillGroup, Certificate
} from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getProfile() {
    return {
      name: 'Jenish Vekariya',
      title: 'Angular Developer | Frontend Developer',
      summary: 'Angular Developer with 1 year of professional experience building responsive web applications, reusable components, and REST API integrations — focused on clean code and performance.',
      phone: '+91 81288-25520',
      email: 'jp0275971@gmail.com',
      linkedin: 'https://linkedin.com/in/jenishvekariya-78995125b',
      github: 'https://github.com/jenishvekariya1212',
      chips: ['Angular 16+', 'TypeScript', 'NgRx', 'REST APIs', 'Bootstrap 4', 'Angular Material'],
      languages: ['English', 'Hindi', 'Gujarati'],
    };
  }

  getExperiences(): Experience[] {
    return [
      {
        company: 'Sapphire Software Solutions',
        role: 'Angular Developer',
        period: '2024 – 2025',
        points: [
          'Worked on Vidyalaya School Management Software, contributing to product modules and feature enhancements.',
          'Developed and maintained various screens and modules with responsive UI using Angular and Bootstrap 4.',
          'Integrated RESTful APIs and built common reusable services to streamline application functionality.',
          'Implemented state management using NgRx, ensuring efficient data flow and scalability across the product.',
          'Focused on performance optimization, clean code practices, and user-friendly UI/UX design.',
        ],
        technologies: ['Angular 16+', 'TypeScript', 'NgRx', 'Bootstrap 4', 'RESTful APIs', 'Angular Material', 'RxJS', 'Git'],
      },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'Vidyalaya – School Management',
        subtitle: 'Sapphire Software Solutions',
        badge: 'Professional · 2024–2025',
        color: 'linear-gradient(135deg, #283593, #3949AB)',
        description: 'A comprehensive school management product covering student records, attendance, fee management, and more — built with scalable Angular architecture.',
        responsibilities: [
          'Contributed to multiple product modules and feature enhancements.',
          'Built responsive UI screens using Angular 16+ and Bootstrap 4.',
          'Integrated RESTful APIs and created shared reusable services.',
          'Implemented NgRx state management for performance and scalability.',
          'Focused on clean code, performance optimization, and UX design.',
        ],
        stack: ['Angular 16+', 'TypeScript', 'NgRx', 'Bootstrap 4', 'Angular Material', 'REST APIs'],
        link: 'https://vidyalayaschoolsoftware.com',
      },
      {
        title: 'Supermarket Management System',
        subtitle: 'B.Tech Sem-7 Project',
        badge: 'Academic · B.Tech Sem-7',
        color: 'linear-gradient(135deg, #006064, #00838F)',
        description: 'A full-stack solution to efficiently manage supermarket operations — covering inventory, billing, customer management, and product cataloging.',
        responsibilities: [
          'Designed and developed RESTful APIs using ASP.NET Core Web API.',
          'Implemented inventory management: products, categories, subcategories.',
          'Created scalable architecture for billing and customer management.',
          'Collaborated with team to align requirements with project goals.',
          'Delivered seamless backend integration with the frontend system.',
        ],
        stack: ['ASP.NET Core', 'MVC 6.0', 'SQL Server', 'JavaScript', 'jQuery', 'Git'],
      },
    ];
  }

  getSkillGroups(): SkillGroup[] {
    return [
      { title: 'Frameworks & Technologies', icon: 'web', tags: ['Angular 16+', 'TypeScript', 'JavaScript', 'jQuery', 'Node.js', 'EJS'] },
      { title: 'UI Libraries & Design', icon: 'palette', tags: ['Angular Material', 'PrimeNG', 'Ngx-Bootstrap', 'Bootstrap 4', 'Adobe XD', 'Figma'] },
      { title: 'State & Reactive', icon: 'sync_alt', tags: ['NgRx', 'RxJS', 'RESTful APIs'] },
      { title: 'Backend & Database', icon: 'storage', tags: ['C#', 'ASP.NET Core', 'Java', 'Python', 'MySQL', 'SQL', 'MongoDB'] },
      { title: 'Version Control', icon: 'source', tags: ['GitHub', 'GitLab', 'Git'] },
      { title: 'AI Tools', icon: 'psychology', tags: ['GitHub Copilot', 'Gemini'] },
    ];
  }

  getEducation(): Education[] {
    return [
      { degree: 'B.Tech – Computer Science', institute: 'Darshan University, Rajkot', period: '2022 – 2025', score: 'CPI: 8.44', icon: 'school' },
      { degree: 'Diploma – Computer Engineering', institute: 'Atmiya University, Rajkot', period: '2019 – 2022', score: 'CPI: 8.99', icon: 'laptop_chromebook' },
      { degree: 'SSC – 10th Standard', institute: 'Shri Sant Gyaneshwar High School, Rajkot', period: '2010 – 2019', score: 'PR: 86%', icon: 'menu_book' },
    ];
  }

  getCertificates(): Certificate[] {
    return [
      { title: 'GNWebsoft Hackathon', icon: 'emoji_events' },
      { title: 'GDG Hackathon', icon: 'emoji_events' },
      { title: 'Python Programming – GUVI', icon: 'verified' },
      { title: 'Game Development using Python – GUVI', icon: 'verified' },
    ];
  }
}
