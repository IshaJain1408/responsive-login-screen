import React from 'react';
import styled from 'styled-components';
import loginimg from './assets/images/pmg7.jpg'

const Header = styled.h1`
  font-size: 24px;
  color:white;
  margin-bottom: 20px;
  margin-top: 20px; 
`;

const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${loginimg}); 
  background-size: cover; 
  background-position: center; 
  width: 100vw;
  max-height:100vh;
  height:100vh;
`;

const Input = styled.input`
  width: 70%;
  height: 40px;
  background:transparent;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
 <>
    <Container>
    <Header>Login Page</Header>
     <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
    </>
  );
}

export default App;
