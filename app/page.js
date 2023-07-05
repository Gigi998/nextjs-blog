import { getSortedPostData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from './components/date';

// import { headers } from 'next/headers';
// Static
export default function Home() {
  const allPostsData = getSortedPostData();

  // IF WE USE HEADERS, PAGE IS NO LONGER STATIC, IT BECOMES SERVER
  // const headersList = headers();
  // const domain = headersList.get('host');
  // const path = headersList.get('referer');
  // console.log(`Domain is ${path.slice(-1)}`);

  return (
    <div>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am Luigi, I am web developer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
