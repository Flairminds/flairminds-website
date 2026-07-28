import { Helmet } from 'react-helmet';

const SITE_URL = 'https://www.flairminds.com';

// path must start with "/" and match the route exactly, e.g. "/case-study/swiftiq-guard"
export default function Seo({ title, description, path }) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
