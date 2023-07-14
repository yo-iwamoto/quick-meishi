import { router } from './router';
import { RouterProvider } from '@tanstack/router';
import { StrictMode } from 'react';

export function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
