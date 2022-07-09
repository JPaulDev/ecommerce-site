import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
