
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar2';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Students from './pages/Students/StudentPage';
import News from './pages/News/News';

import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

import { UserContextProvider } from './UserContext';
import CreateArticle from './pages/News/CreateArticle';
import Article from './pages/Article/Article';
import EditPost from './pages/Article/EditPost';
import CreateCard from './pages/Students/CreateCard';
import EditCard from './pages/Students/EditCard';
import Messenger from './components/Messenger';

function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <Navbar/>
        <div className='app-body'>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/khoa-hoc" element = {<Services />} />
            <Route path = "/hoc-vien" element = {<Students />} />
            <Route path = "/tin-tuc" element = {<News />} />
          
            <Route path = "/dang-nhap" element = {<Login />} />
            <Route path = "/dang-ky" element = {<Register />} />

            <Route path = "/create-article" element = {<CreateArticle />} />
            <Route path = "/article/:id" element = {<Article />}/>
            <Route path = "/edit/:id" element = {<EditPost />}></Route>

            <Route path = "/create-card" element = {<CreateCard />}></Route>
            <Route path = "/edit-card/:id" element = {<EditCard />}></Route>
        
          </Routes>
        </div>
      </UserContextProvider>
      
      <Messenger/>
      <div className='app-footer'><Footer/></div>
    </div>
  );
}

export default App;
