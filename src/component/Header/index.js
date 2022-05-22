import './header.css';
import Logo from './logo';
import ButtonText from '../Button';
import Navbar from '../Navbar';
 
export default function Header() {
    const handlerClickLogin = () => alert("Ini Login");
    const handlerClickRegister = () => alert("Ini Register");
  return (
    <header>
        <Logo/>
        <Navbar/>
        <ButtonText tes="Login" tesClick={handlerClickLogin} />
        <ButtonText tes="Register" tesClick={handlerClickRegister} className="btn-register" />
    </header>
  )
}

