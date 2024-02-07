import stylesCard from "../styles/ArticleCard.module.css";

const resumeStyles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    borderBottom: "2px solid #333",
    paddingBottom: "5px",
    marginBottom: "10px",
    color: "#333",
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "10px",
  },
  skillItem: {
    marginBottom: "5px",
  },
};

const styleTable = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    marginBottom: "20px",
  },
  th: {
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: "normal",
    padding: "10px",
    borderBottom: "1px solid #fff",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <div style={resumeStyles.container}>
        <section style={resumeStyles.section}>
          <h2 className={stylesCard.title}>Summary</h2>
          <p>
            I am a seasoned software engineer with 8 years of experience. Over
            the years, I've been fortunate to work on various challenging
            projects that have not only honed my technical skills but also
            allowed me to lead and contribute to successful outcomes. Always
            eager to learn new things and looks for new challenges. I am ready
            to contribute my skills and drive impactful results.
          </p>
        </section>

        <section style={resumeStyles.section}>
          <h2 className={stylesCard.title}>Technical Skills</h2>

          <table style={styleTable.table}>
            <tbody>
              <tr>
                <th style={styleTable.th}>Languages:</th>
                <td style={styleTable.td}>JavaScript, TypeScript, Python</td>
              </tr>
              <tr>
                <th style={styleTable.th}>React Tools:</th>
                <td style={styleTable.td}>
                  React.js, Webpack, Vite, Redux and RTK
                </td>
              </tr>
              <tr>
                <th style={styleTable.th}>Libraries & Frameworks:</th>
                <td style={styleTable.td}>
                  MERN, React, Next.js, React-native, Vue.js, Angular, Node.js,
                  Express.js, Django
                </td>
              </tr>
              <tr>
                <th style={styleTable.th}>Testing:</th>
                <td style={styleTable.td}>
                  Jest, Mocha, Chai, Enzyme, React testing library, Cypress
                </td>
              </tr>
              <tr>
                <th style={styleTable.th}>UI Frameworks:</th>
                <td style={styleTable.td}>
                  Bootstrap, MUI, Tailwind CSS, Ant Design, Semantic UI, Chakra
                  UI
                </td>
              </tr>
              <tr>
                <th style={styleTable.th}>Databases:</th>
                <td style={styleTable.td}>
                  PostgreSQL, MySQL, MongoDB, DynamoDB, Redis, SQLite, Cassandra
                  DB
                </td>
              </tr>
              <tr>
                <th style={styleTable.th}>Tools:</th>
                <td style={styleTable.td}>
                  Git, GitHub, GitLab, Jenkins, Docker, Circle CI, Agile, Jira
                </td>
              </tr>
              <tr>
                <th style={styleTable.th}>Clouding Services:</th>
                <td style={styleTable.td}>
                  AWS (Lambda, EC2, S3, Route53, CloudWatch), Azure, Heroku,
                  Digital Ocean, GCP
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={resumeStyles.section}>
          <h2 className={stylesCard.title}>Soft Skills</h2>
          <p>
            Problem-Solving, Communication, Teamwork and Collaboration,
            Adaptability, Time Management, Critical Thinking, Conflict
            Resolution, Continuous Learning, Mentoring, Leadership
          </p>
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
