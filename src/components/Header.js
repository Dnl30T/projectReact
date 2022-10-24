import reactLogo from '../images/logo192.png';
import '../App.css';

export default function Header(){
    return(
        <header className='header'>
            <div className='header textlogo'>
                <img src={reactLogo} width="50px" />
                <h1>ReactLovers</h1>
            </div>
            <h3>
                React Course - Project 1
            </h3>
        </header>
    )
}