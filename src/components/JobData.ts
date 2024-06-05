export interface JobHistory {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    experiences: string[];
    skills: string[];
}

export const jobData: JobHistory[] = [
    {
        company: 'Outside Analytics',
        title: 'Principle Software Engineer',
        startDate: '2021',
        endDate: '2023',
        experiences: ['Led a team of developers as the principal engineer in the design and development of REACT applications for a high-profile missile defense client in an agile environment.',
            'Spearheaded the UI/UX design efforts as a senior consultant, contributing to the development of an Angular application for an aerospace client to interface with a REST API, enhancing user experience and functionality.',
            'Played a key role in the hiring process by participating in interviews and providing valuable insights to help onboard new developers, ensuring a cohesive and skilled team dynamic.'],
        skills: ['TypeScript','JavaScript', 'React', 'Angular', 'Node.js', 'Unit Testing', 'Docker', 'Docker Compose', 'HTML5', 'CSS3', 'Git', 'GitLab', 'AWS', 'Vite', 'MUI Controls', 'Recoil', 'Python']

    },
    {
        company: 'Mortgage Cadence',
        title: 'Senior Developer',
        startDate: '2017',
        endDate: '2020',
        experiences: ['Worked as a technical lead in a SAFe agile environment, orchestrating the creation and design of features for a comprehensive enterprise application. Skillfully employed C# for backend development and Angular for frontend implementation.',
           'Conducted full-stack development, migrating client-facing code from Microsoft Silverlight to Angular. Implemented GraphQL calls for data querying and backend interaction, alongside backend tasks such as reworking configuration engines and designing services for third-party integration. Ensured quality through comprehensive integration and unit testing at every level.' 
        ],
        skills: ['C#', '.NET Framework', '.NET Core', 'JavaScript', 'Angular', 'VS Code', 'MS Visual Studio', 'NUnit Testing', 'Integration Testing', 'SQL', 'Docker', 'Redis', 'HTML5', 'CSS3', 'Bootstrap', 'GraphQL', 'Silverlight', 'XAML', 'Git']
    },
    {
        company: 'Planet Telex Inc.',
        title: 'Senior Developer / Consultant',
        startDate: '2013',
        endDate: '2017',
        experiences: ['Collaborated with a client\'s team in Agile Development as a senior developer to build an ecosystem of web applications using Orchard CMS. The project aimed to provide insurance leads for the client',
            'Provided extensive development on the Orchard platform, leveraging its capability for suppressing core functionality and dependency injection to deliver custom features beyond the platform\'s default offerings. Developed numerous custom modules for various functionalities, including session and token management, insurance quote widgets, advertisement banners, and flexible SEO options.',
            'Contributed to the development of internal products, including an Android app and an AngularJS administration web application.'
        ],
        skills: ['C#', '.NET Framework', 'ASP.NET', 'MVC 3.0', 'JQuery', 'JavaScript', 'AJAX', 'HTML', 'CSS', 'SQL', 'Visual Studio .NET', 'NUnit Testing', 'Git']
    },
    {
        company: 'Test America Inc.',
        title: 'Senior Developer',
        startDate: '2010',
        endDate: '2013',
        experiences: ['Served as a Senior Engineer/Analyst, responsible for developing and maintaining the company\'s public website, internal intranet, and secured internet site TotalAccess. TotalAccess provided clients with real-time access to sample results.',
            'Led the redesign of the TotalAccess application, enabling users to instantly access all sample results and documentation upon completion. Utilized MVC design with .NET 4.0, C#, JQuery, AJAX, HTML5, and CSS3 to enhance user experience and functionality.'
        ],
        skills: ['C#', '.NET 4.0', 'ASP.NET', 'MVC 3.0', 'JQuery', 'JavaScript', 'AJAX', 'HTML', 'CSS', 'SQL', 'Visual Studio .NET', 'NUnit Testing', 'Git']
    },
    {
        company: 'Bridgeline Digital, Inc.',
        title: '.NET Lead Engineerr',
        startDate: '2006',
        endDate: '2010',
        experiences: ['Oversaw the conception, design, and upkeep of various web applications for Bridgeline\'s diverse clientele. Managed a team of up to three Engineers, coordinating task assignments, conducting thorough code reviews, and ensuring projects adhered to budgeted billable hours.',
            'Directed multiple web projects utilizing the DotNetNuke framework, capitalizing on its robust user and content management capabilities. Managed database design through SQL Enterprise Manager, developed applications in VB or C# .NET, incorporated CSS for styling, and integrated advanced functionality with AJAX and JavaScript.'
        ],
        skills: ['C#', 'ASP.NET', 'JavaScript', 'JQuery', 'AJAX', 'HTML', 'CSS', 'SQL', 'Microsoft Visual Studio .NET', 'NUnit Testing']
    }



]