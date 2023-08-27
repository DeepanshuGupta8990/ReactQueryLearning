import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import RQSuperheros from './components/RQSuperheros.page'
import SuperHeros from './components/SuperHeros.page'
import Home from './components/Home.page';
import {styled} from 'styled-components';
import { QueryClientProvider,QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <Router>
      <div>

        <NavContainer>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </NavContainer>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeros />} />
          <Route path='/rq-super-heroes' element={<RQSuperheros />} />
          <Route path='/' element={<Home />} />
        </Routes>

      </div>
    </Router>
    </QueryClientProvider>
  )
}

export default App;

const NavContainer = styled.nav`
margin: 0;
padding: 0;
  background-color: grey;
ul{
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style: none;
  background-color: #adffff;
  height: 3rem;
  align-items: center;
}
`