import logoTelegram from '../assets/telegram-1.png';
import logoTwitter from '../assets/twitter-1.png';
import logoShopping from '../assets/shopping-cart-1.png';
import logoBar from '../assets/bar-chart-1.png';
import logoToken from '../assets/bonk-1.png';

function Main() {
    return (
        <main>
            <div className="wrap">
                <div className="main-left aos-init aos-animate" data-aos="fade-up">
                    <h1 className="main-heading">Laugh Coin</h1>
                    <p className="main-decs">
                        <span className="spanClass">Laugh Coin</span>
                        intends to follow in his father’s footsteps and leave a unique mark
                        in the crypto space. The Laugh Coin dreams of becoming a fun Meme
                        coin where everyone gets a fair shot.
                    </p>
                    <p className="main-contract">
                        Contract Address: C5VygnmqBXAMKLbuZ8r2vpNoVitCfuXYu2ywUX8vySS7
                    </p>
                    <div className="main-social">
                        <div className="social-1">
                            <div className="button-social">
                                <a href="https://t.me/+pYi9uwqz1q1mNzM1" target="_blank">
                                    <img src={logoTelegram} alt=""/>
                                    Telegram</a>
                            </div>
                            <div className="button-social">
                                <a href="https://twitter.com/Laugh__Coin" target="_blank">
                                    <img src={logoTwitter} alt=""/>
                                Twitter</a>
                            </div>
                        </div>
                        <div className="social-2">
                            <div className="button-social">
                                <a href="https://laughcoin.io/#">
                                    <img src={logoShopping} alt=""/>
                                Buy $BBONK</a>
                            </div>
                            <div className="button-social">
                                <a href="https://laughcoin.io/#">
                                    <img src={logoBar} alt=""/>
                                Open Chart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-right aos-init aos-animate" data-aos="fade-up">
                    <img src={logoToken} alt="" />
                </div>
            </div>
        </main>
    );
}

export default Main;