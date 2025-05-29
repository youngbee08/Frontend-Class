import { useContext, useState } from 'react';
import { authContext } from '../contexts/AuthContext';

const Signin = () => {
  const defaultData = {
    email:'',
    password:''
  }
  const {signin,signingIn} = useContext(authContext);
  const [formData, setFormData] = useState(defaultData);
  const handleInput = (e)=>{
    const {name, value} = e.target;
    setFormData(prev=>({...prev, [name]:value}))
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    signin(formData)
  };
  return (
  <div className="signin-container">
    <h2>Sign In</h2>
    <form id='form' onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter Your User Email"
          required
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn-signin" disabled={signingIn}>{signingIn ? 'Signing In.....':'Sign In'}</button>
    </form>
  </div>
);    
};

export default Signin;

























{/* <div className="form-group2">
  <input
    type="checkbox"
    name="adminLogin"
    id="adminLogin"
    onClick={setAdminState}
  />
  <label htmlFor="adminLogin">Log in as Admin</label>
</div> */}
// const navigate = useNavigate();
// const {isAdmin,setIsAdmin,setAdminState} = useContext(adminContext);
// const signInUser = async (e) => {
//   e.preventDefault();
//   try {
//     const form = document.getElementById("form");
//     const res = await fetch('https://dummyjson.com/auth/login', {
//       method:'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: form.username.value.trim(),
//         password: form.password.value.trim()
//       })
//     })
//     const data = await res.json();
//     const {accessToken} = data;
//     localStorage.setItem("Access-Token", accessToken);
//     !data.username && !data.password ? toast.warning('Invalid Credentials'):toast.success("Log In Successfully")
//     console.log(isAdmin)
//     !res.ok ? '' :isAdmin?navigate("/admin"):navigate("/dashboard")
//   } catch (error) {
//     console.log(error);
// }
// };
