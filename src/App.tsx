import AppConfigProvider from '@/components/context/AppConfigProvider';
import MainPage from './pages';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppConfigProvider>
        <MainPage />
      </AppConfigProvider>
    </DndProvider>
  );
}

export default App;
