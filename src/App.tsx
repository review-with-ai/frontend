import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { GlobalStyles, theme } from '@/shared';

const router = createBrowserRouter(routes);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
