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
      'Exp Reality is a React-based micro-frontend platform serving 89K+ active EXP brokers. It enables independent development and deployment of complex financial calculation modules such as commission structures, pricing models, and tax workflows within a larger enterprise ecosystem.',
    problem:
      'The existing monolithic frontend caused deployment bottlenecks and performance degradation. Calculation-heavy workflows for commissions, pricing, and taxes introduced noticeable UI lag, and tightly coupled modules prevented teams from shipping features independently.',
    solution: [
      'Architected a scalable micro-frontend system enabling isolated feature development and independent deployments',
      'Implemented virtualized dashboards to ensure low-latency rendering of large, calculation-heavy datasets',
      'Built a shared UI component library to maintain visual and interaction consistency across micro-frontends',
      'Used Redux for predictable and isolated state management within each micro-frontend module',
    ],
    challenges: [
      'Balancing bundle size optimization with feature richness in a distributed micro-frontend architecture',
      'Choosing virtualization over pagination for data-heavy financial tables to preserve user context and usability',
      'Avoiding full framework overhead by implementing lightweight module federation patterns tailored to project needs',
    ],
    impact: [
      'Enabled independent deployments, reducing overall release cycles from weeks to days',
      'Significantly reduced UI lag in financial calculation workflows through optimized rendering strategies',
      'Successfully supported consistent performance for 89K+ active brokers at enterprise scale',
    ],
    links: {
      live: '#',
    },
  },

  'huhoka-hrms': {
  slug: 'huhoka-hrms',
  title: 'Huhoka HRMS',
  summary: 'Enterprise workforce management platform with role-based access control and approval workflows.',
  role: 'Full Stack Developer (Backend Heavy)',
  overview:
    'Huhoka HRMS is an enterprise human resource management system with an Angular frontend (25–30%) and backend-driven business logic. The platform manages employee data, attendance, leave requests, approvals, and reporting for mid-to-large organizations requiring granular access control and workflow orchestration.',
  problem:
    'Organizations lacked a centralized and flexible platform for workforce operations. Manual approval processes caused operational delays, and existing systems did not support customizable workflows, secure authorization, or complex role hierarchies.',
  solution: [
    'Designed and implemented backend services to handle RBAC, approval workflows, and core business logic',
    'Developed secure REST APIs supporting authentication, authorization, workflow orchestration, and data persistence',
    'Built modular Angular components (25–30% contribution) using reactive forms to consume backend-driven workflows and validations',
    'Implemented role-based access control with fine-grained permissions enforced primarily at the backend layer',
    'Created configurable multi-level approval workflows to automate HR decision processes',
    'Designed data-driven dashboards backed by aggregated backend APIs for HR analytics and reporting',
  ],
  challenges: [
    'Balancing strict backend security and authorization requirements with a clean and intuitive frontend experience',
    'Designing scalable approval and workflow logic without hardcoding role hierarchies',
    'Using RxJS observables on the frontend to efficiently reflect real-time backend state changes',
    'Avoiding over-engineering by building reusable, configurable backend workflow templates',
  ],
  impact: [
    'Reduced approval turnaround time through backend-driven automated workflow routing',
    'Improved data accuracy and system reliability by centralizing validation and business rules on the backend',
    'Enabled scalable access control and approval systems supporting complex organizational hierarchies',
  ],
    links: {
      live: '#',
    },
  },
};
