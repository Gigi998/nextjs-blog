'use client';

import React from 'react';
import Image from 'next/image';
import utiltsStyles from '../../styles/utils.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Profile = ({ children, name }) => {
  const pathname = usePathname();

  return (
    <div>
      <header className='flex flex-col items-center'>
        {pathname === '/' ? (
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
      {pathname !== '/' && (
        <h2 className='my-12'>
          <Link href='/'>Back to home</Link>
        </h2>
      )}
    </div>
  );
};

export default Profile;
