
import { useSelector, useDispatch } from "react-redux";
import { submitData ,setEmail, setPassword, fetchData} from "../redux/slice/slice";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export const LoginPage = () => {
  const data = useSelector(state=>state.details);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(fetchData());
    if(data.navigation){
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data.navigation]);
  console.log(data.loginUser)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
          <h1 className="text-center font-semibold text-4xl text-gray-800">Login hi</h1>
          <form onSubmit={(e)=>dispatch(submitData(e))} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium text-gray-700">Email:</label>
              <input 
                type="text" 
                id="email" 
                value={data.email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className={`mt-1 border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${data.errors.email ? 'border-red-500' : 'border-gray-300'}`} 
                placeholder="Enter your email" />
              {data.errors.email && <span className="text-red-500 text-sm mt-1">{data.errors.email}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-medium text-gray-700">Password:</label>
              <input 
                type="password" 
                id="password" 
                value={data.password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                className={`mt-1 border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${data.errors.password ? 'border-red-500' : 'border-gray-300'}`} 
                placeholder="Enter your password"
              />
              {data.errors.password && <span className="text-red-500 text-sm mt-1">{data.errors.password}</span>}
            </div>
            <button 
              type="submit" 
              className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Login
            </button>
          </form>
        </div>
      </div>
    )
}
