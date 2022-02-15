import { Helmet } from "react-helmet";

export default function Head({ data }) {
    const { title, description, keywords, image } = data
    return (
        <Helmet>
            <title>{title}</title>

            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.dhruvang.com" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

        </Helmet>
    )
}
