import { Outlet } from 'react-router-dom';
import { Layout, Page } from '@/shared';

export const RouterLayout = () => (
  <Page>
    <Layout>
      <Outlet />
    </Layout>
  </Page>
);
