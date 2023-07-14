import { k } from '@kuma-ui/core';
import { Outlet } from '@tanstack/router';

export function Layout() {
  return (
    <k.div fontFamily='sans-serif'>
      <k.header display='flex' justify='space-between' p={12}>
        <k.p fontFamily='monospace' fontSize={24}>
          quick meishi
        </k.p>
      </k.header>
      <Outlet />
    </k.div>
  );
}
