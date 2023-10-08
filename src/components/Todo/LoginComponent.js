// // LoginComponent.js

// import React, { useState } from 'react';

// const LoginComponent = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // For demonstration purposes, we'll just log the input values
//     console.log('Login submitted with username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div className="login-field">
//           <i className="fas fa-user login-icon"></i>
//           <input
//             type="text"
//             className="login-input"
//             placeholder="Username / Email"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="login-field">
//           <i className="fas fa-lock login-icon"></i>
//           <input
//             type="password"
//             className="login-input"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="button login-submit">
//           <span className="button-text">Login Now</span>
//           <i className="button-icon fas fa-chevron-right"></i>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginComponent;
