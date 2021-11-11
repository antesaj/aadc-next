import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ post }) {
  return (
    <div className={styles.container}>
      <p>{JSON.stringify(post.content)}</p>
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