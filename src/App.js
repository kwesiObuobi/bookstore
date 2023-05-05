import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookCard />
      <Outlet />
    </div>
  );
}

export default App;
