import styles from "../styles/ExperiencePage.module.css";
import StarIcon from "../components/icons/StarIcon";
import stylesCard from "../styles/ArticleCard.module.css";

const ExperiencePage = () => {
  return (
    <>
      <h3>Experience</h3>
      <div className={styles.container} style={{ display: "block" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={stylesCard.container}
          style={{ margin: "1%" }}
        >
          Tata Consultancy Services, 03/2021 - 12/2023
          <div className={stylesCard.content}>
            <h3 className={stylesCard.title}>Senior Full Stack Engineer</h3>
            <ul style={{ paddingLeft: "2%" }}>
              <li>
                Mentored and trained 10 junior developers, guiding them in the
                best practices of full stack development.
              </li>
              <li>
                Pioneered the development and subsequent deployment of a robust
                React and TypeScript-based application, elevating the team's
                project management capabilities by 27%.
              </li>
              <li>
                Accomplished in building responsive and intuitive user
                interfaces using React, and leveraging the power of Node.js for
                scalable and efficient server-side development.
              </li>
              <li>
                Architected and implemented a blogging platform using React 18,
                Node.js, Python 3.1.
              </li>
              <li>
                Developed front-end features, components, and libraries,
                translating designs and wireframes into high-quality, reusable
                code optimized for maximum performance across various
                web-capable devices and browsers.
              </li>
              <li>
                Orchestrated comprehensive website updates, incorporating
                Node.js tracking, HTML integration into CMS, and ongoing
                maintenance, culminating in a cumulative $20M revenue uplift for
                diverse clients.
              </li>
              <li>
                Developed a dynamic and interactive website using React,
                TypeScript, Node.js, Prisma, and GraphQL resulting in a 30%
                increase in sales revenue, high traffic, and page views.
              </li>
              <li>
                Used various ideas from distributed computing, large-scale
                design, real-time data processing, data storage, ML, and AI to
                solve challenging dataset problems.
              </li>
              <li>
                Worked extensively with React, Redux, Recoil, and RTK Query to
                create maintainable and reusable components, resulting in a 40%
                reduction in development time and a 30% improvement in code
                quality.
              </li>
              <li>
                Designed and Implemented GraphQL API using React Apollo to
                improve system performance by 20%.
              </li>
              <li>
                Used understanding of React fundamentals to promote better
                component lifecycle practices, increasing turnaround speed by
                23% with 100% deadline adherence.
              </li>
              <li>
                Built reusable React components using D3.js and Chart.js,
                supporting interactive visualizations and analysis of datasets.
              </li>
              <li>
                Implemented Tailwind CSS and Chakra UI libraries to create
                visually appealing and responsive user interfaces, resulting in
                a 25% increase in user satisfaction ratings.
              </li>
              <li>
                Modified an existing web app built with MERN stack to correct
                errors, upgrade interfaces, resulting in improvement in user
                engagement and satisfaction.
              </li>
              <li>
                Followed Agile methodology for project management and
                participated in sprint and ticket planning, resulting in a 16%
                decrease in project turnaround time.
              </li>
              <li>
                Created and maintained automated CI/CD pipelines and workflows
                using CircleCI, resulting in a 200% decrease in production
                outages and delays.
              </li>
              <li>
                Interacted with AWS cloud platforms to deploy and maintain
                developed products.
              </li>
            </ul>
          </div>
          <div className={stylesCard.stats} style={{ display: "block" }}>
            <div className={stylesCard.stat}>
              <StarIcon className={stylesCard.icon} />
              React
              <StarIcon className={stylesCard.icon} />
              React native
              <StarIcon className={stylesCard.icon} />
              MERN
              <StarIcon className={stylesCard.icon} />
              Tailwind CSS
              <StarIcon className={stylesCard.icon} />
              Django
              <StarIcon className={stylesCard.icon} />
              GraphQL
              <StarIcon className={stylesCard.icon} />
              Data Visualization
              <StarIcon className={stylesCard.icon} />
              AWS
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={stylesCard.container}
          style={{ margin: "1%" }}
        >
          Hydrasoft, 02/2019 - 02/2021
          <div className={stylesCard.content}>
            <h3 className={stylesCard.title}>Lead Developer</h3>
            <ul style={{ paddingLeft: "2%" }}>
              <li>
                Conducted regular code reviews and provided actionable feedback,
                resulting in a 75% decrease in post-deployment bug rates.
              </li>
              <li>
                Collaborated with management and users to develop e-commerce
                strategies and integrate them with websites, resulting in a 25%
                increase in online sales and a 30% increase in customer
                retention.
              </li>
              <li>
                Extensive proficiency in JavaScript, with a deep understanding
                of modern ES6+ features, closures, promises, async/await, and
                functional programming concepts.
              </li>
              <li>
                Significantly improved efficiency by implementing optimized
                stored procedures within the nationwide web portal, resulting in
                a remarkable 77% reduction in daily data processing time.
              </li>
              <li>
                Implemented GraphQL technology, resulting in a notable 40%
                decrease in data load times and a more efficient data fetching
                process.
              </li>
              <li>
                Leveraged Angular's powerful features to create a modular and
                scalable codebase for the ecommerce site, accommodating complex
                requirements such as product listings, shopping cart
                functionality, and secure payment processing.
              </li>
              <li>
                Enhanced application performance by 20% through proficient use
                of Vue.js and Vuex for front-end, along with Node.js and
                Express.js for back-end.
              </li>
              <li>
                Translated UX/UI wireframes into visual elements with
                Angular.js.
              </li>
              <li>
                Integrated with payment gateways (e.g., PayPal, Stripe) to
                enable secure and seamless online transactions.
              </li>
              <li>
                Utilized Material UI (MUI) and Tailwind CSS libraries to create
                visually appealing and responsive user interfaces, resulting in
                a 20% increase in user satisfaction ratings.
              </li>
              <li>
                Designed a custom search functionality using Algolia API with
                auto-complete suggestions, reducing the database operational
                costs by 33% and improving the user experience by 25%.
              </li>
            </ul>
          </div>
          <div className={stylesCard.stats}>
            <div className={stylesCard.stat}>
              <StarIcon className={stylesCard.icon} />
              E-commerce
              <StarIcon className={stylesCard.icon} />
              TypeScript
              <StarIcon className={stylesCard.icon} />
              React
              <StarIcon className={stylesCard.icon} />
              Next
              <StarIcon className={stylesCard.icon} />
              Angular
              <StarIcon className={stylesCard.icon} />
              UX/UI
              <StarIcon className={stylesCard.icon} />
              Unit Test
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={stylesCard.container}
          style={{ margin: "1%" }}
        >
          Meta, 04/2017 - 01/2019
          <div className={stylesCard.content}>
            <h3 className={stylesCard.title}>Software Developer</h3>
            <ul style={{ paddingLeft: "2%" }}>
              <li>
                Spearheaded the integration of Facebook's internal APIs,
                enhancing application functionalities and user engagement.
              </li>
              <li>
                Kept up-to-date with the latest React trends and best practices
                to deliver modern user experiences.
              </li>
              <li>
                Designed and developed responsive, mobile-optimized interfaces
                and websites aligned with user experience requirements.
              </li>
              <li>
                Gained understanding of the importance of cross-team
                collaboration and user-centered design principles in driving
                product development.
              </li>
              <li>
                Responsible for drafting and communicating daily production
                demands and increased efficiency and flexibility of products by
                20% and achieved 95% customer satisfaction.
              </li>
              <li>
                Developed a digital marketplace with React, Next.js, Node.js,
                and MongoDB for secure transactions and product information.
              </li>
              <li>
                Managed application state effectively using React Context API or
                third-party state management libraries like Redux.
              </li>
              <li>
                Implemented internationalization and localization in React
                applications using libraries like react-i18next.
              </li>
              <li>
                Utilized testing frameworks like Jest and React Testing Library
                for unit and integration testing of React components.
              </li>
              <li>
                Improved frontend coding culture by building JS and LESS
                style-guides, standardization of JS modules, and conducting
                monthly meetings to share knowledge between front end engineers.
              </li>
            </ul>
          </div>
          <div className={stylesCard.stats}>
            <div className={stylesCard.stat}>
              <StarIcon className={stylesCard.icon} />
              Facebook APIs
              <StarIcon className={stylesCard.icon} />
              React
              <StarIcon className={stylesCard.icon} />
              Node.js
              <StarIcon className={stylesCard.icon} />
              Customer Satisfaction
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={stylesCard.container}
          style={{ margin: "1%" }}
        >
          Rover, 11/2015 - 03/2017
          <div className={stylesCard.content}>
            <h3 className={stylesCard.title}>Web Developer</h3>
            <ul style={{ paddingLeft: "2%" }}>
              <li>
                Built and maintained a platform of services for pet “Rover.com”
                which increased customer satisfaction by 40% and retention by
                30% using React, Express.js.
              </li>
              <li>
                Worked on multiple new features including on-demand dog walking
                and market segmentation.
              </li>
              <li>
                Implemented automation scripts to add translation helpers to raw
                strings in the codebase.
              </li>
              <li>
                Designed and built an internal tool using Django, GraphQL, and
                React that automated and streamlined tasks for the engineering
                and operations teams, reducing time spent on tasks from 2 days
                to just a couple of minutes.
              </li>
              <li>
                Added new unit and integration tests to confirm that i18n and
                l10n works as expected.
              </li>
              <li>
                Worked on steps in the build pipeline to extract and request
                translations for English texts in the code.
              </li>
            </ul>
          </div>
          <div className={stylesCard.stats}>
            <div className={stylesCard.stat}>
              <StarIcon className={stylesCard.icon} />
              HTML
              <StarIcon className={stylesCard.icon} />
              CSS
              <StarIcon className={stylesCard.icon} />
              React
              <StarIcon className={stylesCard.icon} />
              Django
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ExperiencePage;
