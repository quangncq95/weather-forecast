import AppConfigProvider from '@/components/context/AppConfigProvider';
import MainPage from './pages';

function App() {
  return (
    <AppConfigProvider>
      <MainPage />
    </AppConfigProvider>
  );
}

export default App;
