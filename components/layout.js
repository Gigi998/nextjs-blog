import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utiltsStyles from '../styles/utils.module.css';

const name = 'Luigi';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              height={144}
              width={144}
              className={utiltsStyles.borderCircle}
              src='/images/profileCrop.jpg'
              alt=''
            />
            <h1 className={utiltsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                height={108}
                width={108}
                className={utiltsStyles.borderCircle}
                src='/images/profileCrop.jpg'
                alt=''
              />
            </Link>
            <h2 className={utiltsStyles.headingLg}>
              <Link href='/'>{name}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <h2 className={styles.backToHome}>
          <Link href='/'>Back to home</Link>
        </h2>
      )}
    </div>
  );
};

export default Layout;
