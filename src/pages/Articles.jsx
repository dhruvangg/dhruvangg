import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import DateFormat from '../helper/Articles/DateFormat';
import Skeleton from '../helper/Articles/Skeleton';
import Head from '../helper/Head';

export default function Articles() {
    const GET_POSTS = gql`query {
        posts{ _id, name, slug, featured_image, excerpt, tags, createdAt }
    }`;

    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <Skeleton />;
    if (error) return <p>Error :(</p>;

    return (
        <section>
            <Head data={{ title: 'Articles | Dhruvang', description: 'Articles modern web technologies by Dhruvang Gajjar', keywords: 'JavaScript, React, Web Development', image: '' }} />
            <div className='prose prose-xl mx-auto dark:prose-invert'>
                {data && data.posts.map((item, i) => {
                    const { name, tags, featured_image, excerpt, createdAt, slug } = item;
                    return <div key={i} className='mt-4 p-4 rounded hover:shadow'>
                        {featured_image && <img src={featured_image} />}
                        <h4 className="text-sm">{tags.map(el => `${el} `)} | <DateFormat>{createdAt}</DateFormat></h4>
                        <h3>{name}</h3>
                        <p className="mb-3">{excerpt}</p>
                        <Link to={`/article/${slug}`} className="no-underline inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h24"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                })}
            </div>
        </section>
    )
}
