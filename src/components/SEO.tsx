import React from 'react';
import { NextSeo } from 'next-seo';
import NextHead from 'next/head';
import { SEOResults } from '@/types';

export default function SEO({
  title = '',
  description,
  image,
  keywords,
}: SEOResults) {
  console.log({ title: title });
  return (
    <>
      <NextHead>
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta httpEquiv='x-dns-prefetch-control' content='off' />
        <meta httpEquiv='Window-Target' content='_value' />
        <title>{title}</title>
        <meta
          name='robots'
          content={
            process.env.NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />
        <meta
          name='googlebot'
          content={
            process.env.NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />

        <meta name='keywords' content={keywords} />
        <meta name='author' content='Jamal DeAllie' />
        <meta name='referrer' content='no-referrer' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='geo.region' content='US' />

        {/* START FAVICON */}
        {/* <link rel='manifest' href='/site.webmanifest' /> */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        {/* <link rel='manifest' href='/site.webmanifest' /> */}
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#29a1ff' />
        <meta name='msapplication-TileColor' content='#1a1b1d' />
        <meta name='theme-color' content='#fff6df' />
        <link rel='icon' href='/favicon.ico' />
        {/* END FAVICON */}
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: image ? image.url : `${process.env.SITE_URL}/`,
              width: image ? image.width : 1200,
              height: image ? image.height : 630,
              alt: title,
            },
          ],
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          site_name: 'AirOne',
        }}
        twitter={{
          handle: '',
          cardType: '',
        }}
      />
    </>
  );
}
