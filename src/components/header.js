import logo from '../assets/token_logo_512.png';

function Header() {
    return (
        <header>
            <div className="header-img">
                <a href="https://laughcoin.io/#">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div>
                <ul className="header-list">
                    <li><a href="https://laughcoin.io/#">Home</a></li>
                    <li><a href="https://laughcoin.io/#about">About</a></li>
                    <li><a href="https://laughcoin.io/#tokenomics">Tokenomics</a></li>
                </ul>
            </div>
            <div className="header-buy">
                <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=C5VygnmqBXAMKLbuZ8r2vpNoVitCfuXYu2ywUX8vySS7&fixed=in">BUY $LAUGH</a>
            </div>
        </header >
    );
}

export default Header;