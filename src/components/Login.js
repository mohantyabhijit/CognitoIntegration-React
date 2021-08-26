import React, {useState, useContext} from 'react'
import { AccountContext } from '../components/Account';

export default () => 
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    
  const { authenticate } = useContext(AccountContext);

   const onSubmit = event => {
     event.preventDefault();
     authenticate(email, password)
     .then(data => {
       console.log('Logged in!', data);
     })
     .catch(err => {
       console.error('Failed to login!', err);
     })
    };

    return (
       <div>
       <form onSubmit={onSubmit}>
         <input
           value={email}
           onChange={event => setEmail(event.target.value)}
           placeholder = "Email address"
         />
 
         <input
           value={password}
           onChange={event => setPassword(event.target.value)}
           placeholder = "Password"
         />
 
         <button type='submit'>Login</button>
       </form>
     </div>
     );
 };
