// import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Container></Container>
        <Questions></Questions>
    </div>
  );
}

export default App;
