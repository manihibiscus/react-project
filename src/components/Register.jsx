import { useSelector, useDispatch } from "react-redux"
import { getEmail, getPassword, postData } from "../redux/slice/apiSlice";
export const Register = () => {
    const user=useSelector((state)=>state.api);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postData());
    };
  return (
    <div>
        <h1>Register Page</h1>
        <form action="">
        <div>
            <label htmlFor="">Enter Your Email</label>
            <input type="email" value={user.userId} className="border-gray-500 border-2 rounded-md text-center ml-4 h-[35px]" placeholder="Your Email" onChange={(e)=>dispatch(getEmail(e.target.value))}/>
            {user.errors.email && <span className="text-red-500 text-sm mt-1">{user.errors.email}</span>}
        </div>

        <div className="mt-10">
            <label htmlFor="">Enter Your Password</label>
            <input type="text" value={user.password} className="border-gray-500 border-2 rounded-md text-center ml-4 h-[35px]" placeholder="Your Password" onChange={(e)=>dispatch(getPassword(e.target.value))} />
            {user.errors.password && <span className="text-red-500 text-sm mt-1">{user.errors.password}</span>}

        </div>
        <div>
            <button className="border-gray-400 border-2 p-1 rounded-lg font-bold bg-blue-300" 
            onClick={(e)=>handleSubmit(e)}>
                Submit
            </button>
        </div>
        </form>
    </div>
  )
}
