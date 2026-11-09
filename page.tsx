"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, Check, ChevronDown, Menu, X, Wifi, Zap, ShieldCheck, Smartphone, Instagram, Facebook, Mail } from "lucide-react";

const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL || "#order";
const faqs = [
  ["How does QuickTap work?", "Simply tap your QuickTap NFC card on a compatible smartphone. Your digital profile opens instantly—no app download required for the person receiving your details."],
  ["Do I need an app?", "No. Your card uses NFC to open your digital profile in the phone's browser. You can share your profile link, too."],
  ["Can I update my profile later?", "Yes. Your digital profile is designed to be updated, so your important links and contact details can stay current."],
  ["Will it work with every phone?", "Most modern smartphones support NFC. If NFC is unavailable or turned off, you can use the profile's shareable link as an alternative."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="QuickTap home"><Image src="/images/quicktap-logo.webp" alt="QuickTap logo" width={250} height={141} priority /></a>
        <nav className={menuOpen ? "navlinks show" : "navlinks"}>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#profile" onClick={() => setMenuOpen(false)}>Your digital profile</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <a className="nav-cta" href={orderUrl}>Get your card <ArrowUpRight size={16}/></a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line"/> THE NEXT WAY TO INTRODUCE YOURSELF</p>
          <h1>Tap once.<br/><span>Connect instantly.</span></h1>
          <p className="hero-sub">Your introduction, upgraded. One tap brings your links, socials, and contact details together—ready to share, wherever life takes you.</p>
          <div className="hero-actions"><a className="button primary" href="#products">Explore QuickTap <ArrowUpRight size={18}/></a><a className="text-link" href="#how">Discover how it works <ArrowRight size={17}/></a></div>
          <div className="hero-proof"><span><Check size={15}/> No app required</span><i/><span><Check size={15}/> One simple tap</span><i/><span><Check size={15}/> Your links, together</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow"/>
          <div className="hero-image-frame"><Image src="/images/original-blue-pink-cards.webp" alt="QuickTap blue and pink NFC cards floating on a dark studio background" fill priority sizes="(max-width: 800px) 100vw, 55vw" style={{objectFit:"contain"}}/></div>
          <div className="floating-label"><span className="dot blue"/> ORIGINAL EDITION <b>₱130</b></div>
          <div className="visual-caption">DESIGNED TO MAKE<br/>EVERY INTRODUCTION COUNT.</div>
        </div>
        <div className="hero-bottom"><span>QUICKTAP NFC SMART CARD</span><span>01 — INTRODUCING A BETTER CONNECTION</span></div>
      </section>

      <section className="intro-strip">
        <p>LESS EXCHANGING DETAILS.</p><span className="strip-mark">✳</span><p>MORE MAKING CONNECTIONS.</p>
      </section>

      <section className="section products" id="products">
        <div className="section-head">
          <div><p className="eyebrow">THE COLLECTION</p><h2>Made to be remembered.</h2></div>
          <p className="section-note">A smarter first impression, built around the way you connect.</p>
        </div>
        <article className="product-card original">
          <div className="product-info">
            <p className="product-kicker">01 / ORIGINAL EDITION</p>
            <h3>Color that<br/>connects.</h3>
            <p className="product-desc">A sleek NFC card with a bold blue or pink finish. Bring your digital identity into every introduction.</p>
            <div className="swatches"><span className="swatch blue-swatch"/> <span className="swatch pink-swatch"/> <span className="swatch-label">BLUE / PINK</span></div>
            <div className="price-line"><strong>₱130</strong><span>each</span></div>
            <a className="button light" href={orderUrl}>Get the Original <ArrowUpRight size={17}/></a>
          </div>
          <div className="product-photo">
                <Image src="/images/original-blue-pink-cards.webp" alt="Blue and pink QuickTap NFC cards, front and back product views" fill sizes="(max-width: 800px) 100vw, 60vw" style={{objectFit:"contain"}}/>
                <div className="detail-photo"><Image src="/images/original-black-white-cards.webp" alt="Close-up product photograph showing the QuickTap card finish and detailing" fill sizes="180px" style={{objectFit:"cover"}}/></div>
              </div>
        </article>

        <article className="product-card white-edition">
          <div className="white-copy">
            <p className="product-kicker">02 / UPCOMING RELEASE</p>
            <span className="coming-pill">COMING SOON</span>
            <h3>A fresh take<br/>on your first hello.</h3>
            <p className="product-desc">The White Edition. A clean, minimal look is on its way.</p>
            <div className="price-line"><strong>₱130</strong><span>planned price</span></div>
          </div>
          <div className="white-stage" aria-label="White Edition concept preview">
            <div className="white-card-back"><span>Tap Once. Connect Instantly.</span></div>
            <div className="white-card-front"><span className="mini-qt">Q</span><span className="nfc-mark">)))</span><span className="card-lines"><i/><i/><i/></span></div>
            <div className="white-glint"/>
            <p className="concept-note">WHITE EDITION · CONCEPT PREVIEW</p>
          </div>
        </article>

        <article className="product-card custom-edition">
          <div className="custom-photo"><div className="blank-card black-blank"><span>FRONT</span></div><div className="blank-card white-blank"><span>BACK</span></div><div className="blank-caption">YOUR DESIGN. YOUR IDENTITY.</div></div>
          <div className="product-info custom-info">
            <p className="product-kicker">03 / CUSTOM BLANK</p>
            <h3>A blank canvas.<br/>Your signature.</h3>
            <p className="product-desc">Prefer a minimal base? Start with a clean blank card—black on the front, white on the back—ready for your own creative direction.</p>
            <div className="price-line"><strong>₱99</strong><span>each</span></div>
            <a className="button primary" href={orderUrl}>Choose your blank card <ArrowUpRight size={17}/></a>
          </div>
        </article>
      </section>

      <section className="profile-section" id="profile">
        <div className="profile-copy">
          <p className="eyebrow">YOUR DIGITAL INTRODUCTION</p>
          <h2>Everything about you.<br/><span>One tap away.</span></h2>
          <p className="profile-desc">Your QuickTap card opens a digital profile where people can find your socials, playlists, contact details, and more. No paper to keep. No details to type.</p>
          <ul className="feature-list"><li><Check/> Your links in one place</li><li><Check/> Easy to share and revisit</li><li><Check/> Update your details as you grow</li></ul>
          <a className="text-link" href="#how">See how QuickTap works <ArrowRight size={17}/></a>
        </div>
        <div className="phone-scene">
          <div className="phone-shadow"/>
          <div className="phone">
            <div className="phone-island"/>
            <div className="phone-screen"><Image src="/images/digital-profile.webp" alt="Example QuickTap digital profile displayed on a phone screen" fill sizes="(max-width: 800px) 75vw, 330px" style={{objectFit:"cover", objectPosition:"top"}}/></div>
            <div className="phone-button"/>
          </div>
          <div className="phone-orbit orbit-one"/><div className="phone-orbit orbit-two"/>
          <div className="phone-tag"><span className="dot cyan"/> YOUR PROFILE, INSTANTLY</div>
        </div>
      </section>

      <section className="how-section section" id="how">
        <div className="section-head"><div><p className="eyebrow">SIMPLE BY DESIGN</p><h2>One tap. Three steps.</h2></div><p className="section-note">A little card that makes sharing a lot easier.</p></div>
        <div className="steps">
          <div className="step"><span className="step-num">01</span><div className="step-icon"><Smartphone/></div><h3>Get your card</h3><p>Choose the QuickTap style that feels like you.</p></div>
          <div className="step"><span className="step-num">02</span><div className="step-icon"><Wifi/></div><h3>Tap a phone</h3><p>Hold your card near a compatible NFC-enabled smartphone.</p></div>
          <div className="step"><span className="step-num">03</span><div className="step-icon"><Zap/></div><h3>Make a connection</h3><p>Your digital profile opens, ready to explore and save.</p></div>
        </div>
      </section>

      <section className="statement"><p className="eyebrow">A SMALL CARD. A BIGGER REACH.</p><h2>Make your next<br/><span>hello count.</span></h2><a className="button primary" href={orderUrl}>Get your QuickTap <ArrowUpRight size={18}/></a></section>

      <section className="faq-section section" id="faq">
        <div className="section-head"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Questions, answered.</h2></div><p className="section-note">Everything you need before your first tap.</p></div>
        <div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown className={openFaq===i?"rotated":""}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div>
      </section>

      <footer className="footer" id="order">
        <div className="footer-top"><a className="footer-logo" href="#top"><Image src="/images/quicktap-logo.webp" alt="QuickTap" width={190} height={107}/></a><p>Tap once.<br/><span>Connect instantly.</span></p><a className="button primary" href={orderUrl}>Order your card <ArrowUpRight size={17}/></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} QUICKTAP. ALL RIGHTS RESERVED.</span><span>MADE FOR YOUR NEXT CONNECTION.</span></div>
      </footer>
    </main>
  );
}
