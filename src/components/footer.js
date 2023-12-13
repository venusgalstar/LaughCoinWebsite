import logo from '../assets/babybonk-logo-512-png.png';
import logoTelegram from '../assets/telegram-1.png';
import logoTwitter from  '../assets/twitter-1.png';

function About() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-left">
                    <img className="left-logo" src={logo} alt=""  />
                    <div className="social">
                        <a href="https://t.me/BabyBonkTG" target="_blank"><img className="img-social" src={logoTelegram} alt="" /></a>
                        <a href="https://twitter.com/BabyBonkX" target="_blank"><img className="img-social" src={logoTwitter} alt="" /></a>
                    </div>
                </div>
                <div className="footer-mid">
                    <h2>Disclaimer</h2>
                    <p>
                        The content of this website is provided for information purposes
                        only and shall not in any way constitute an investment advice or
                        investment recommendation in any product discussed. Buy at your own
                        risk. Baby Bonk (BabyBonk) is a meme token. It is strongly
                        recommended that you seek professional investment advice before
                        making any investment decision. Any investment decision that you
                        make should be based on an assessment of your risks in consultation
                        with your investment adviser.
                    </p>
                </div>
                <div className="footer-right">
                    <h2 className="h2Class">
                        Don’t miss out!
                    </h2>
                    <div className="box-button">
                        <div className="footer-button button1">
                            <a href="https://babybonk.pro/#">BUY $BBONK</a>
                        </div>
                        <div className="footer-button">
                            <a href="https://babybonk.pro/#">VIEW CHART</a>
                        </div>
                        <div className="footer-button">
                            <a href="https://t.me/BabyBonkTG" target="_blank">COMMUNITY</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default About;