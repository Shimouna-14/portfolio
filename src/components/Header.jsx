import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="fixed h-24 w-screen bg-beige sm:bg-slate-500 m:bg-blue
        flex justify-center items-center shadow-[0px_6px_7px_0px_rgba(211,180,151,0.6)] z-10">
            <img className='lg:absolute lg:left-10  h-4/5 border border-black rounded-[25px]' src={logo} alt="Logo NVC" />
            <h1 className='text-5xl'>Présentation</h1>
        </header>
     );
}

export default Header;