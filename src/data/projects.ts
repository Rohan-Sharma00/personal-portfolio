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
    summary: 'Enterprise-scale financial micro-frontend platform handling commissions, pricing, and tax workflows for 89K+ users.',
    role: 'Sole Frontend Owner',

    overview:
      'Exp Reality is a React-based micro-frontend platform serving 89K+ active brokers, designed to handle complex financial workflows such as commission calculations, pricing, and tax processing. The system focuses on scalability, performance optimization, and modular frontend architecture.',

    problem:
      'The existing monolithic frontend caused deployment bottlenecks, slower release cycles, and performance issues when handling large financial datasets and complex UI workflows.',

    solution: [
      'Architected a scalable micro-frontend system enabling independent feature deployment',
      'Implemented virtualized dashboards to efficiently render large financial datasets',
      'Built a reusable UI component library to improve development speed and consistency',
      'Used Redux for predictable state management and optimized data flow',
    ],

    challenges: [
      'Balancing bundle size optimization with feature-rich financial dashboards',
      'Choosing virtualization over pagination for better performance',
      'Managing module federation without adding unnecessary overhead',
    ],

    impact: [
      'Reduced release cycles from weeks to days through modular architecture',
      'Improved UI performance for data-heavy financial workflows',
      'Successfully supported enterprise-scale usage for 89K+ active users',
    ],

    links: {
      live: '#',
    },
  },

  'huhoka-hrms': {
    slug: 'huhoka-hrms',
    title: 'Huhoka HRMS',
    summary: 'Enterprise workforce management platform with RBAC, approval workflows, and secure backend APIs.',
    role: 'Full Stack Developer (Backend Heavy)',

    overview:
      'Huhoka HRMS is an enterprise workforce management system designed to handle employee data, approval workflows, and role-based access control. The platform combines Angular frontend with a secure backend architecture for scalable organizational operations.',

    problem:
      'Organizations lacked a centralized system to manage employee data, approvals, and workflows efficiently, leading to manual processes and reduced operational efficiency.',

    solution: [
      'Built secure backend services for RBAC and workflow management',
      'Developed 10+ REST APIs for employee data and approval processes',
      'Integrated Angular frontend with backend workflows',
      'Implemented role-based access control for secure data access',
      'Designed configurable approval workflows for organizational processes',
    ],

    challenges: [
      'Balancing backend security with frontend usability',
      'Designing scalable and flexible workflow logic',
      'Managing reactive state updates using RxJS',
    ],

    impact: [
      'Reduced approval turnaround time through automated workflows',
      'Improved system reliability and data consistency',
      'Enabled scalable and structured HR operations',
    ],

    links: {
      live: '#',
    },
  },

  /* ---------------- BACKEND PROJECTS ---------------- */

  'devconnect-backend': {
    slug: 'devconnect-backend',
    title: 'DevConnect Backend',
    summary: 'Scalable backend system for a developer networking platform with authentication, social features, and modular API architecture.',
    role: 'Backend Developer — Personal Project',

    overview:
      'DevConnect is a backend system designed to support a developer networking platform, handling authentication, user profiles, posts, and connections. Built using Node.js, Express, and MongoDB, the system focuses on scalable API design and structured data relationships.',

    problem:
      'Developers rely on fragmented platforms for networking and showcasing profiles. A centralized backend was required to handle authentication, social interactions, and relational data efficiently while maintaining scalability.',

    solution: [
      'Designed and implemented 10+ REST API endpoints using Node.js and Express',
      'Implemented JWT-based authentication and secure session handling',
      'Modeled relational data using MongoDB and Mongoose for users, posts, and connections',
      'Structured backend using modular controllers, services, and middleware layers',
      'Implemented validation and centralized error handling for robust API behavior',
    ],

    challenges: [
      'Designing scalable schemas for relationship-based data',
      'Ensuring secure authentication and session handling',
      'Optimizing MongoDB queries for efficient data retrieval',
    ],

    impact: [
      'Designed a scalable backend architecture for social networking workflows',
      'Demonstrated production-level API design and modular architecture patterns',
      'Built a system structured for real-world extensibility and performance optimization',
    ],

    links: {
      github: 'https://github.com/Rohan-Sharma00/devconnect-backend',
    },
  },

  'mental-health-conversation-backend': {
    slug: 'mental-health-conversation-backend',
    title: 'Mental Health Conversation Backend',
    summary: 'Backend system for AI-driven conversational workflows with session management and asynchronous processing.',
    role: 'Backend Developer — Technical Challenge',

    overview:
      'This backend system was designed to support AI-driven mental health conversations, focusing on session-based chat handling, message persistence, and integration with external AI services. Built using Node.js and MongoDB, it demonstrates scalable backend design for conversational applications.',

    problem:
      'Conversational systems require handling asynchronous AI responses, maintaining session context, and efficiently storing chat data. The challenge was to design a backend capable of managing these requirements while ensuring scalability.',

    solution: [
      'Built REST APIs for chat session creation and message exchange',
      'Implemented session-based conversation management for contextual continuity',
      'Stored chat history using MongoDB with flexible schema design',
      'Integrated external AI services for generating contextual responses',
      'Designed asynchronous request handling for smooth conversational flows',
    ],

    challenges: [
      'Handling asynchronous AI response generation efficiently',
      'Maintaining session consistency across requests',
      'Designing flexible schemas for dynamic chat data',
    ],

    impact: [
      'Designed scalable API architecture for conversational AI systems',
      'Demonstrated handling of asynchronous workflows and session management',
      'Built a backend aligned with real-world AI application patterns',
    ],

    links: {
      github: 'https://github.com/Rohan-Sharma00/mental-health-conversation-backend',
    },
  }
};