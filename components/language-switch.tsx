'use client';

import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json';

const { locales } = i18nConfig;

export default function LanguageSwitcher() {
  const { t, lang } = useTranslation('common');

  return locales.map((lng) => {
    if (lng === lang) return null;

    return (
      <Link
        href={`?lang=${lng}`}
        key={lng}
        onClick={() => {
          document.dir = document.dir === 'rtl' ? 'ltr' : 'rtl';
        }}
        className='text-blue-500 hover:underline cursor-pointer bg-gray-200 p-2 rounded-md m-1'
      >
        {t(`language-name-${lng}`)}
      </Link>
    );
  });
}
