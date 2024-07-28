import logo from '../assets/logo-relicon.png'

function Header() {
    return (
        <header className="w-screen bg-beige shadow-[0px_6px_7px_0px_rgba(211,180,151,0.6)] z-50">
            <img className='h-24 ml-12 py-3' src={logo} alt="Logo NVC" />
        </header>
     );
}

export default Header;