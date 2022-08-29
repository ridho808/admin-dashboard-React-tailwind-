import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { SuperSEO } from 'react-super-seo';
import AddNews from './pages/AddNews';
import Dasboard from './pages/Dasboard';
import User from './pages/User';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <SuperSEO
      title='Admin Dasboard | React Js'
      description='website created using React js by Ridho'
      lang='en'
      openGraph={{
        ogImage:{
          ogImage: 'https://res.cloudinary.com/abyssjpg/image/upload/v1661761190/Admin_bdoenl.png',
          ogImageAlt: "Admin panel dashboard",
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogImageType: "image/png",
        }
      }}
      />
      <Routes>
        <Route path='*' element={<Dasboard/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/addnews' element={<AddNews/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
