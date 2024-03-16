import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './Pages/Hero';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Hero /> }/>
      </Routes>
    </Router>
  );
}

export default App;



        // const res  = await axios.post('https://prakem-api.onrender.com/api/auth/login', {
        //     email,
        //     password
        // });
        // if (res.status === true) {
        //     localStorage.setItem('values', JSON.stringify(res.data));
        //     setProfileData(res.data); 


        // }
        // navigate('/dashboard')