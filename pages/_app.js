import App, { Container } from 'next/app';
import Layout from './_layout';

import 'bootstrap/scss/bootstrap.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        url: ctx.query
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    );
  }
}
