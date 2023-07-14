import { TopPage } from './components/pages/TopPage';
import { Layout } from './components/Layout';
import { PreviewPage } from './components/pages/PreviewPage';
import { Router, Route, RootRoute } from '@tanstack/router';

const rootRoute = new RootRoute({
  component: Layout,
});

const topPageRoute = new Route({
  component: TopPage,
  path: '/',
  getParentRoute: () => rootRoute,
});

const previewPageRoute = new Route({
  component: PreviewPage,
  path: '/preview',
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([topPageRoute, previewPageRoute]);

export const router = new Router({ routeTree });
