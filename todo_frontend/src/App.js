import React from 'react';
import { Switch,Route,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import AddTodo from './components/add-todo';
import TodoList from './components/todos-list';
import Login from './components/login';
import Signup from './components/signup';

// Navbar with react-bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';

function App(){
  // const user=null;
  const [user, setUser]=React.useState(null);
  const [token, setToken]=React.useState(null);
  const [error, setError]=React.useState("");

  async function login(user=null){ // default user to null
    setUser(user);
  }

  async function logout(){
    setUser(null);
  }

  async function signup(user=null){ // default user to null
    setUser(user);
  }

  return(
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          {/* Navigation bar */}
          <Navbar.Brand>Todo App</Navbar.Brand>
          <Nav className="me-auto">
            <Container>
              <Link class="nav-link" to={"/todos"}>Todos</Link>
              {user ?(
                <Link class="nav-link">Logout ({user})</Link>
              ):(
                <>
                <Link class="nav-link" to={"/login"}>Login</Link>
                <Link class="nav-link" to={"/signup"}>Sign Up</Link>
                </>
              )}
            </Container>
          </Nav>
        </div>
      </Navbar>

      <div className="container mt-4">
        <Switch>
          <Route exact path={['/','/todos']} render={(prop)=>
          <TodoList{...prop} token={token}/>
          }>
          </Route>
          <Route path='/todos/create' render={(prop)=>
          <AddTodo{...prop} token={token}/>
          }>
          </Route>
          <Route path="/todos/:id/" render={(prop)=>
          <AddTodo{...prop} token={token}/>
          }>
          </Route>
          <Route path="/login" render={(prop)=>
          <Login{...prop} token={login}/>
          }>
          </Route>
          <Route path="/todos/create" render={(prop)=>
          <Signup{...prop} token={signup}/>
          }>
          </Route>
          </Switch>
      </div>
      {/* footer */}
      <footer className="text-center text-lg-start
      bg-light text-muted mt-4">
        <div className="text-center p-4">
          ©Copyright
          <a target="_blank"
             className="text-reset fw-bold text-decoration-none"
             href="#"> Developer1 </a>
          - <a target="_blank"
               className="text-reset fw-bold text-decoration-none"
               href="#"> Developer2 </a>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
