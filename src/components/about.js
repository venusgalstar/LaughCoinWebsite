import logoRaydium from '../assets/raydium.png';
import logoSolscan from '../assets/solscan.png';
import logoDexscreener from '../assets/dexscreener-1.png';
import logoDextools from '../assets/dextools-1.png';
import logoSolidarity from '../assets/solidarity-1.png';
import logoFire from '../assets/fire-1.png';
import logoWallet from '../assets/wallet-filled-money-tool-1.png';
import logoTokenomics from '../assets/TOKENOMICS.png';

function About() {
    return (
        <div className="about" id="about">
            <div className="wrap-about">
                <div className="about-dex aos-init aos-animate" data-aos="fade-up">
                    <div className="dex-img">
                        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=C5VygnmqBXAMKLbuZ8r2vpNoVitCfuXYu2ywUX8vySS7&fixed=in">
                            <img src={logoRaydium} alt="" />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://solscan.io/token/C5VygnmqBXAMKLbuZ8r2vpNoVitCfuXYu2ywUX8vySS7">
                            <img src={logoSolscan} alt="" />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://dexscreener.com/solana/gvy5dgoagmkfw4lrh836pf9dwlt4dml7k74pfchnwirc">
                            <img src={logoDexscreener} alt="" />
                        </a>
                    </div>
                    <div className="dex-img">
                        <a href="https://www.dextools.io/app/en/solana/pair-explorer/GVy5DGoAgMKfw4LRH836PF9DWLT4dML7K74PfChNWirC">
                            <img src={logoDextools} alt="" />
                        </a>
                    </div>
                </div>
                <div className="about-heading aos-init aos-animate" data-aos="fade-up">
                    🚀 Why LaughCoin?
                </div>
                <p className="about-desc aos-init aos-animate" data-aos="fade-up">
                    LaughCoin is not your typical crypto venture. We believe that in the world of decentralized finance,
                    there's room for a bit of lightheartedness. Our token is a digital canvas for the hilarious, the quirky,
                    and the downright amusing. We've harnessed the power of memes to create a unique and entertaining token
                    that reflects the vibrancy of our community.
                </p>
                <div className="about-utility aos-init aos-animate" data-aos="fade-up">
                    <div className="utility-box">
                        <img src={logoSolidarity} alt="" />
                        <h1 className="utility-title">🌐 Community-Driven Fun</h1>
                        <p className="utility-des">
                            At LaughCoin, community is everything. We're building a space where crypto enthusiasts,
                            meme creators, and laughter aficionados come together. Expect exciting meme contests,
                            collaborative initiatives, and a shared passion for spreading joy through the crypto-sphere.
                        </p>
                    </div>
                    <div className="utility-box">
                        <img src={logoFire} alt="" />
                        <h1 className="utility-title">💰 Utility Meets Entertainment</h1>
                        <p className="utility-des">
                            LaughCoin isn't just about laughs; it's about utility too.
                            As a decentralized meme token, LaughCoin offers holders the chance
                            to participate in exclusive events, unlock special features,
                            and be part of a growing ecosystem that values both innovation and amusement.
                        </p>
                    </div>
                    <div className="utility-box">
                        <img src={logoWallet} alt="" />
                        <h1 className="utility-title">🌈 Join the Laughter Revolution</h1>
                        <p className="utility-des">
                            Whether you're a seasoned crypto investor or a meme connoisseur,
                            LaughCoin welcomes you to a world where serious gains can coexist with a seriously good time.
                            Buckle up for an exhilarating ride as we redefine the narrative of what a meme token can be.
                        </p>
                    </div>
                </div>
                <div className="about-button aos-init aos-animate" data-aos="fade-up">
                    <div className="button-style">
                        <a href="https://laughcoin.io/#">Burned Transaction</a>
                    </div>
                    <div className="button-style">
                        <a href="https://solscan.io/tx/5AdGUJBn4q6TF2gAZKPnWeMRh7Np1HYRndJXBqhPiC7SqLr7CG8yq1HTw3M5mp1Q3fgR6zfBoaS6WyYXwgzif76h">Renounced Transaction</a>
                    </div>
                </div>
            </div>

            <div className="tokenomics-mobile" id="tokenomics">
                <h1 data-aos="fade-up" className="aos-init aos-animate">Tokenomics</h1>
                {/* <img src={logoTokenomics} alt="" /> */}
            </div>
        </div>
    );
}

export default About;