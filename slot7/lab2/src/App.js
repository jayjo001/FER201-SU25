import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Nếu bạn muốn tùy chỉnh thêm
import Navbar from './Navbar';
import Carousel from './Carousel';
import Menu from './Menu';
import BookForm from './BookForm';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Menu />  
      <BookForm />
    </>
  );
}

export default App;
