// import { useDispatch } from "react-redux";
// import {} from '../store/vote-slice'
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const LogOutPage = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate()

//     const handleLogout = () => {
//         // Clear user data from localStorage (or sessionStorage)
//         localStorage.removeItem("currentVoter");

//         // Dispatch Redux action to reset user state
//         dispatch(resetUser());

//         // Redirect to the login page or home page
//         navigate('/') // Or use react-router-dom's history.push('/login')
//     };

//     useEffect(()=>{
//         handleLogout()
//     })

//     return (
//         <h2>logging out</h2>
//     );
// };

// export default LogOutPage;
