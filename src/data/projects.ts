export interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  role: string;
  overview: string;
  problem: string;
  solution: string[];
  challenges: string[];
  impact: string[];
  links?: {
    live?: string;
    github?: string;
  };
}
export const projectsData: Record<string, ProjectData> = {
  'exp-reality': {
    slug: 'exp-reality',
    title: 'Exp Reality',
    summary: 'Enterprise-scale financial micro-frontend handling commissions, pricing, and tax workflows at scale.',
    role: 'Sole Frontend Owner',
    overview:
      'Exp Reality is a React-based micro-frontend platform serving 89K+ active EXP brokers...',
    problem:
      'The existing monolithic frontend caused deployment bottlenecks and performance degradation...',
    solution: [
      'Architected a scalable micro-frontend system enabling isolated feature development',
      'Implemented virtualized dashboards for large datasets',
      'Built shared UI component library',
      'Used Redux for predictable state management',
    ],
    challenges: [
      'Balancing bundle size optimization with feature richness',
      'Choosing virtualization over pagination for financial tables',
      'Avoiding heavy framework overhead with lightweight module federation',
    ],
    impact: [
      'Reduced release cycles from weeks to days',
      'Improved UI performance in financial workflows',
      'Handled enterprise-scale usage for 89K+ brokers',
    ],
    links: {
      live: '#',
    },
  },

  'huhoka-hrms': {
    slug: 'huhoka-hrms',
    title: 'Huhoka HRMS',
    summary: 'Enterprise workforce management platform with RBAC and approval workflows.',
    role: 'Full Stack Developer (Backend Heavy)',
    overview:
      'Huhoka HRMS is an enterprise HR management platform...',
    problem:
      'Organizations lacked centralized systems for HR operations...',
    solution: [
      'Implemented backend services for RBAC and workflow logic',
      'Developed secure REST APIs',
      'Built Angular components consuming backend workflows',
      'Implemented role-based access control',
      'Created configurable approval workflows',
    ],
    challenges: [
      'Balancing backend security with frontend usability',
      'Designing scalable workflow logic',
      'Managing reactive state updates using RxJS',
    ],
    impact: [
      'Reduced approval turnaround time',
      'Improved system reliability',
      'Enabled scalable organizational workflows',
    ],
    links: {
      live: '#',
    },
  },

  /* ---------------- BACKEND PROJECTS ---------------- */

  'devconnect-backend': {
    slug: 'devconnect-backend',
    title: 'DevConnect Backend',
    summary: 'Backend system for a developer networking platform supporting profiles, posts, and connections.',
    role: 'Backend Developer — Personal Project',
    overview:
      'DevConnect is a personal project built to explore scalable backend architecture for developer networking platforms. The system provides REST APIs for authentication, user profiles, posts, and developer connections using Node.js, Express, and MongoDB.',
    problem:
      'Developers often rely on fragmented platforms to showcase profiles and interact with other engineers. The goal was to design a backend architecture capable of handling social interactions, authentication, and data relationships in a scalable and maintainable way.',
    solution: [
      'Designed RESTful APIs using Node.js and Express',
      'Implemented JWT authentication for secure user sessions',
      'Created MongoDB schemas using Mongoose for users, posts, and connections',
      'Structured the backend with modular service and controller layers',
    ],
    challenges: [
      'Designing scalable data models for social connections',
      'Ensuring secure authentication and session handling',
      'Optimizing MongoDB queries for relationship-based data',
    ],
    impact: [
      'Built a fully functional backend architecture for a developer networking platform',
      'Demonstrated scalable API design patterns for social applications',
    ],
    links: {
      github: 'https://github.com/Rohan-Sharma00/devconnect-backend',
    },
  },

  'mental-health-conversation-backend': {
    slug: 'mental-health-conversation-backend',
    title: 'Mental Health Conversation Backend',
    summary: 'Backend challenge implementing APIs for AI-driven mental health conversations.',
    role: 'Backend Developer — Technical Challenge',
    overview:
      'This backend system was developed as a technical challenge to design APIs capable of managing AI-driven mental health conversations. The system handles chat sessions, message persistence, and integration with AI services for contextual responses.',
    problem:
      'The challenge required designing a backend architecture capable of supporting conversational interactions while maintaining session history, handling asynchronous responses, and storing conversation data efficiently.',
    solution: [
      'Built REST APIs for chat session creation and message exchange',
      'Stored conversation history using MongoDB',
      'Integrated external AI services to generate contextual responses',
      'Designed asynchronous request handling for conversational flows',
    ],
    challenges: [
      'Handling asynchronous AI response generation',
      'Maintaining conversation session consistency',
      'Designing flexible schemas for chat history',
    ],
    impact: [
      'Delivered a scalable backend API architecture for conversational systems',
      'Demonstrated ability to design APIs for AI-powered applications',
    ],
    links: {
      github: 'https://github.com/Rohan-Sharma00/mental-health-conversation-backend',
    },
  }
};