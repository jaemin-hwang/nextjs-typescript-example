import React, { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Layout: FC<Props> = ({
  children,
  title = 'This is the default title',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/sampleclient">
          <a>SampleClient</a>
        </Link>{' '}
        |{' '}
        <Link href="/product">
          <a>Product</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <hr />
      <span>{`I'm here to stay (Footer)`}</span>
    </footer>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Layout;
