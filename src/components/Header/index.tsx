import { useNavigate } from "react-router-dom";
import { useFetchUser } from "../../hooks/useFetchUser";

export const Header = () => {
  const {user} = useFetchUser();
  const navigate = useNavigate();
  
  return (
    <nav className='flex justify-between px-8 py-3 h-[10%] bg-slate-800 text-white'>
        <div className='flex justify-between w-20'>
            <p>She</p>
            <p>He</p>
        </div>
        <p>Mika-Shop</p>
        <div className='flex justify-between w-40'>
            <p>Liked</p>
            <p>Cart</p>
            {user ? <p>Profile</p> : <p onClick={() => {
              navigate('/registration')
            }}>Sign up</p>}
        </div>
    </nav>
  )
}
