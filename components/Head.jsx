import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tyler is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="tyler jex, tyler, jex, web developer portfolio, tyler web developer, tyler developer, mern stack, tyler jex portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Tyler Jex's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Tyler Jex",
};
