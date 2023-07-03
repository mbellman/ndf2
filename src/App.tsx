import ForumPage from './pages/ForumPage';
import './App.scss';

const Background = () => <div className="background" />;

const App = () => (
  <>
    <Background />
    <main className="app">
      <ForumPage />
    </main>
  </>
);

export default App;