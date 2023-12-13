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
                        <span className="spanClass">Baby Bonk</span>
                        intends to follow in his father’s footsteps and leave a unique mark
                        in the crypto space. The Baby Bonk dreams of becoming a fun Meme
                        coin where everyone gets a fair shot.
                    </p>
                    <p className="main-contract">
                        Contract Address: Dx1Lq5FjangW5ifRMEogAiakm24LyB5AoHmQifepvNjV
                    </p>
                    <div className="main-social">
                        <div className="social-1">
                            <div className="button-social">
                                <a className="https://t.me/BabyBonkTG" target="_blank">
                                    <img src={logoTelegram} alt=""/>
                                Telegram</a>
                            </div>
                            <div className="button-social">
                                <a href="https://twitter.com/BabyBonkX" target="_blank">
                                    <img src={logoTwitter} alt=""/>
                                Twitter</a>
                            </div>
                        </div>
                        <div className="social-2">
                            <div className="button-social">
                                <a href="https://babybonk.pro/#">
                                    <img src={logoShopping} alt=""/>
                                Buy $BBONK</a>
                            </div>
                            <div className="button-social">
                                <a href="https://babybonk.pro/#">
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