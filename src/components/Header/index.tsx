export const Header = () => {

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
            <p>Sign up</p>
        </div>
    </nav>
  )
}
