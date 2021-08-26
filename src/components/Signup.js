import React, {useState} from 'react';
import UserPool from  '../UserPool';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
 
 
   var attributeList = [];
         
   var dataEmail = {
     Name : 'email', 
     Value : email, //get from form field
   };
   
   // var dataPersonalName = {
   //   Name : 'name', 
   //   Value : password, //get from form field
   // };
 
   var attributeEmail = new CognitoUserAttribute(dataEmail);
   // var attributePersonalName = new CognitoUserAttribute(dataPersonalName);
   
   
   attributeList.push(attributeEmail);
   //attributeList.push(attributePersonalName);
 
   const onSubmit = event => {
     event.preventDefault();
 
     UserPool.signUp(email, password, attributeList, null, (err, data) => {
       if (err) console.error(err);
       console.log(data);
     });
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
 
         <button type='submit'>Signup</button>
       </form>
     </div>
     );
 };