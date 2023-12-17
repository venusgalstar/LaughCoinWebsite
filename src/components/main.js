import logoTelegram from '../assets/telegram-1.png';
import logoTwitter from '../assets/twitter-1.png';
import logoShopping from '../assets/shopping-cart-1.png';
import logoBar from '../assets/bar-chart-1.png';
import logoToken from '../assets/token_logo_512.png';

function Main() {
    return (
        <main>
            <div className="wrap">
                <div className="main-left aos-init aos-animate" data-aos="fade-up">
                    <h1 className="main-heading">Laugh Coin</h1>
                    <p className="main-decs">
                        <span className="spanClass">Greetings Crypto Enthusiasts,</span>
                        We're thrilled to present LaughCoin, the latest addition to the meme token universe!
                        Born out of a commitment to infuse joy and humor into the cryptocurrency landscape,
                        LaughCoin is more than just a token; it's a celebration of laughter, creativity, and community spirit.
                    </p>
                    <p className="main-contract">
                        Contract Address: C5VygnmqBXAMKLbuZ8r2vpNoVitCfuXYu2ywUX8vySS7
                    </p>
                    <div className="main-social">
                        <div className="social-1">
                            <div className="button-social">
                                <a href="https://t.me/+pYi9uwqz1q1mNzM1" target="_blank">
                                    <img src={logoTelegram} alt="" />
                                    Telegram</a>
                            </div>
                            <div className="button-social">
                                <a href="https://twitter.com/Laugh__Coin" target="_blank">
                                    <img src={logoTwitter} alt="" />
                                    Twitter</a>
                            </div>
                        </div>
                        <div className="social-2">
                            <div className="button-social">
                                <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=C5VygnmqBXAMKLbuZ8r2vpNoVitCfuXYu2ywUX8vySS7&fixed=in">
                                    <img src={logoShopping} alt="" />
                                    Buy $LAUGH</a>
                            </div>
                            <div className="button-social">
                                <a href="https://birdeye.so/token/C5VygnmqBXAMKLbuZ8r2vpNoVitCfuXYu2ywUX8vySS7?chain=solana">
                                    <img src={logoBar} alt="" />
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