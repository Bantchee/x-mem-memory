import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js'

const App = () => {
  return (
    <div
      className='grid grid-rows-7 h-screen'
    >
      <Header />
      <Main />
      <Footer/>
    </div>
  )
}

export default App;
