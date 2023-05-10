
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from "react-toastify";
import AppRouter from './router/AppRouter';
import theme from './components/globalStyle/theme';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter/>
      <ToastContainer />
    </ThemeProvider>
    
  );
}

export default App;
