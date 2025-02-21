import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    keywords = [],
    image = '/logo.png',
    url = window.location.href
}) {
    const siteTitle = 'Monad Lottery';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            {/* 基本 Meta 标签 */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />

            {/* Open Graph Meta 标签 */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter Card Meta 标签 */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* 其他重要的 Meta 标签 */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="robots" content="index, follow" />

            {/* 结构化数据 */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": siteTitle,
                    "description": description,
                    "url": url
                })}
            </script>
        </Helmet>
    );
}