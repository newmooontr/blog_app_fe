
import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
import theme from './components/globalStyle/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
    
  );
}

export default App;
