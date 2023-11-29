// 모든 파일에서 하는 설정하는 파일

import { AppProps } from 'next/app';
import ApolloSetting from '../src/components/commons/apollo';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import LayoutPrac from '../src/practice/layout';
import Layout from '../src/components/commons/layout';

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
    // <ApolloSetting>
    //   <>
    //     <Global styles={globalStyles} />
    //     <LayoutPrac>
    //       <Component />
    //     </LayoutPrac>
    //   </>
    // </ApolloSetting>
  );
}
