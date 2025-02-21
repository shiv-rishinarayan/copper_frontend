import Head from "next/head";

const SEO = ({ title, description, keywords, canonicalUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://musical-panda-75f15d.netlify.app/_next/image?url=%2Flogo.jpg&w=128&q=75"
      />
      <meta
        property="og:url"
        content={canonicalUrl || "https://musical-panda-75f15d.netlify.app/"}
      />
      <link
        rel="canonical"
        href={canonicalUrl || "https://musical-panda-75f15d.netlify.app/"}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          name: "Platinum Tracker",
          url: "https://musical-panda-75f15d.netlify.app/",
          logo: "https://musical-panda-75f15d.netlify.app/_next/image?url=%2Flogo.jpg&w=128&q=75",
          description,
        })}
      </script>
    </Head>
  );
};

export default SEO;
