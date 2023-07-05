import './globals.css';
import styles from './layout.module.css';
import Profile from './components/Profile';
import ConnectBtn from './components/ConnectBtn';
import Link from 'next/link';
import { Web3Provider } from './context/appContext';
import CounterLink from './components/CounterLink';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const name = 'Luigi';
export const siteTitle = 'Next.js Sample Website';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Web3Provider>
          <div className={styles.container}>
            <nav className='flex items-center'>
              <Link href='/' className='mr-5'>
                Home
              </Link>
              <CounterLink />
              <ConnectBtn />
            </nav>
            <Profile name={name}>{children}</Profile>
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}
