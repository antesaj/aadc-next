import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactMarkdown from 'react-markdown';

export default function Home({ post }) {
  return (
    <div className={styles.container}>
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://damp-shelf-16386.herokuapp.com/feature-posts/1');
  const post = await res.json();

  return {
    props: {
      post
    }
  }
}