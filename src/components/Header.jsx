import logo from '../assets/logo.png'

function Header({ titre }) {
    return (
        <header className="fixed h-24 sm:h-20 w-screen bg-beige
        flex justify-center items-center shadow-[0px_6px_7px_0px_rgba(211,180,151,0.6)] z-10">
            <img className='absolute left-0 sm:ml-5 m:ml-24 lg:ml-48 h-4/5 border border-black rounded-[25px] sm:rounded-[20px]' src={logo} alt="Logo NVC" />
            <h1 className='text-4xl'>{ titre }</h1>
        </header>
     );
}

export default Header;