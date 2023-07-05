'use client';
import React from 'react';
import { useWebContext } from '../context/appContext';
import Link from 'next/link';
const CounterLink = () => {
  const { isWeb3 } = useWebContext();

  return isWeb3 && <Link href='/count'>Counter</Link>;
};

export default CounterLink;
