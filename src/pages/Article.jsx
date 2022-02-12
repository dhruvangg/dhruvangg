import { gql, useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import DateFormat from '../helper/Articles/DateFormat';
import Skeleton from '../helper/Articles/Skeleton';

export default function Article() {
    const { slug } = useParams();
    console.log(slug);
    const GET_POST = gql`{
        post(slug:"${slug}"){
          _id, name, content, featured_image, excerpt, tags, createdAt
        }
    }`;

    const { loading, error, data } = useQuery(GET_POST, {
        onCompleted: (data) => {
            setTimeout(() => {
                document.querySelectorAll("pre").forEach(el => el.addEventListener('click', copyToClipboard))
                return () => {
                    document.querySelectorAll("pre").forEach(el => el.removeEventListener('click', copyToClipboard))
                }
            }, 500);
        }
    })

    if (loading) return <Skeleton />;
    if (error) return `Error! ${error.message}`;

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(e.currentTarget.querySelector("code").innerHTML)
        alert("Copied")
    }

    return (
        <section>
            <div className='prose prose-xl mx-auto my-12 dark:prose-invert'>
                <p className="font-bold mb-2 text-sm"><span className="uppercase">{data.post.tags.map(el => `${el} `)}</span> | <DateFormat>{data.post.createdAt}</DateFormat></p>
                <h1>{data.post.name}</h1>
                <p>{data.post.excerpt}</p>
                <div className='content'>
                    {data.post.content && <ReactMarkdown>{data.post.content}</ReactMarkdown>}
                </div>
                <ul className="flex list-none p-0 items-center">
                    <li className='pl-0 pr-2'>Share this Article: </li>
                    <li className="w-[40px] m-2 p-2">
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${document.URL}&t=${document.URL}`} target="_blank"><svg className='fill-black dark:fill-white' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
                    </li>
                    <li className="w-[40px] m-2 p-2">
                        <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(document.URL)}&title=${encodeURIComponent(document.title)}`} target="_blank"><svg className='fill-black dark:fill-white' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                    </li>
                    <li className="w-[40px] m-2 p-2">
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(document.title)}:%20${encodeURIComponent(document.URL)}`} target="_blank"><svg className='fill-black dark:fill-white' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></a>
                    </li>
                    <li className="w-[40px] m-2 p-2">
                        <svg className='fill-black dark:fill-white' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
                    </li>
                    <li className="w-[40px] m-2 p-2">
                        <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    </li>
                </ul>
            </div>


        </section>
    )
}
