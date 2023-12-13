import logoRaydium from '../assets/raydium.png';
import logoSolscan from '../assets/solscan.png';
import logoDexscreener from '../assets/dexscreener-1.png';
import logoDextools from '../assets/dextools-1.png';
import logoSolidarity from '../assets/solidarity-1.png';
import logoFire from '../assets/fire-1.png';
import logoWallet from '../assets/wallet-filled-money-tool-1.png';
import logoTokenomics from  '../assets/TOKENOMICS.png';

function About() {
    return (
        <div className="about" id="about">
            <div className="wrap-about">
                <div className="about-dex aos-init aos-animate" data-aos="fade-up">
                    <div className="dex-img">
                        <a href="https://laughcoin.io/#">
                            <img src={logoRaydium} alt=""  />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://laughcoin.io/#">
                            <img src={logoSolscan} alt=""  />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://laughcoin.io/#">
                            <img src={logoDexscreener} alt=""  />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://laughcoin.io/#">
                            <img src={logoDextools} alt=""  />
                        </a>
                    </div>
                </div>
                <div className="about-heading aos-init aos-animate" data-aos="fade-up">
                    About Laugh Coin and what's special here?
                </div>
                <p className="about-desc aos-init aos-animate" data-aos="fade-up">
                    Laugh Coin is all about spreading the crypto love, created for the
                    Bonk-loving community on Solana. Everything that belongs to the team
                    will be burned forever along with the plan to promote the project
                    through long-term marketing campaigns that bring trust and a vibrant
                    space to the community.
                </p>
                <div className="about-utility aos-init aos-animate" data-aos="fade-up">
                    <div className="utility-box">
                        <img src={logoSolidarity} alt="" />
                        <h1 className="utility-title">Huge Community</h1>
                        <p className="utility-des">
                            The strong community was inherited from Bonk - his father. With
                            loyalty and passion, they are legendary Fans ready to support Baby
                            Bonk on Solana Chain
                        </p>
                    </div>
                    <div className="utility-box">
                        <img src={logoFire} alt="" />
                        <h1 className="utility-title">Liquidity Burnt</h1>
                        <p className="utility-des">
                            Liquidity is completely burned, no one can interfere with
                            liquidity and endanger the project. Our community is always safe
                            in the Laugh Coin space
                        </p>
                    </div>
                    <div className="utility-box">
                        <img src={logoWallet} alt="" />
                        <h1 className="utility-title">Contract Renounced</h1>
                        <p className="utility-des">
                            The project is empowered by the community. Smart contracts are
                            completely renounced, no one can interfere anymore, absolutely
                            safe in the Laugh Coin space
                        </p>
                    </div>
                </div>
                <div className="about-button aos-init aos-animate" data-aos="fade-up">
                    <div className="button-style">
                        <a href="https://laughcoin.io/#">Burned Transaction</a>
                    </div>
                    <div className="button-style">
                        <a href="https://laughcoin.io/#">Renounced Transaction</a>
                    </div>
                </div>
            </div>

            <div className="tokenomics-mobile" id="tokenomics">
                <h1 data-aos="fade-up" className="aos-init aos-animate">Tokenomics</h1>
                <img src={logoTokenomics} alt="" />
            </div>
        </div>
    );
}

export default About;