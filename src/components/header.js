import logo from '../assets/link-babybonk-logo-512-png.png';

function Header() {
    return (
        <header>
            <div className="header-img">
                <a href="https://babybonk.pro/#">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div>
                <ul className="header-list">
                    <li><a href="https://babybonk.pro/#">Home</a></li>
                    <li><a href="https://babybonk.pro/#about">About</a></li>
                    <li><a href="https://babybonk.pro/#tokenomics">Tokenomics</a></li>
                </ul>
            </div>
            <div className="header-buy">
                <a href="https://babybonk.pro/#">BUY $BBONK</a>
            </div>
        </header >
    );
}

export default Header;