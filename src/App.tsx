import { useState } from "react";
import stargoldTrolley from "./assets/products/stargold-trolley.png";
import vipTrolley from "./assets/products/vip-trolley.png";
import blanketBonded from "./assets/products/blanket-bonded.png";
import blanketEmbossed from "./assets/products/blanket-embossed.png";
import cat6Three from "./assets/products/cat6-3m.png";
import cat6Five from "./assets/products/cat6-5m.png";
import cat6Box from "./assets/products/cat6-305m.png";
import comforterA from "./assets/products/comforter-a.png";
import comforterD from "./assets/products/comforter-d.png";
import comforterE from "./assets/products/comforter-e.png";

const whatsappNumber = "97471845751";

type IconName =
  | "arrow"
  | "bag"
  | "bed"
  | "box"
  | "check"
  | "chevron"
  | "delivery"
  | "location"
  | "mail"
  | "menu"
  | "phone"
  | "shield"
  | "whatsapp";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6M15 12H3" />,
    bag: <><path d="M6 7h12l-1 14H7L6 7Z" /><path d="M9 7V5a3 3 0 0 1 6 0v2M9 11v.01M15 11v.01" /></>,
    bed: <><path d="M3 5v14M21 19V9a2 2 0 0 0-2-2H9a4 4 0 0 0-4 4v5M3 16h18" /><path d="M7 7h2a2 2 0 0 1 2 2v2H5V9a2 2 0 0 1 2-2Z" /></>,
    box: <><path d="m21 8-9 5-9-5 9-5 9 5Z" /><path d="m3 8 9 5 9-5v8l-9 5-9-5V8Z" /><path d="M12 13v8" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    delivery: <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-4-1.5-6.5-4-8-8l2-2-2-4Z" />,
    shield: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />,
    whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.3 7.5c.3-.5.6-.5.9-.5l.7.1c.2.1.4.7.7 1.3.2.5.1.7-.1.9l-.6.7c-.2.2-.3.4-.1.7.7 1.3 1.6 2.2 3 2.9.3.2.5.1.7-.1l.9-1.1c.2-.2.4-.2.7-.1l1.6.8c.3.1.5.2.5.4 0 .2-.1 1-.7 1.6-.6.7-1.5.9-2.4.7-1-.2-2.3-.7-4-2.2-1.4-1.3-2.4-2.8-2.7-3.9-.3-1.2.3-2 .9-2.2Z" /></>,
  };
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? "brand-light" : ""}`}>
      <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-label="شعار قطر للمنتجات المنزلية">
        <path className="mark-shell" d="M7 29 32 8l25 21v25a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V29Z" />
        <path className="mark-handle" d="M23 31v-3a9 9 0 0 1 18 0v3" />
        <path className="mark-case" d="M19 31h26v19H19z" />
        <path className="mark-line" d="M26 31v19M38 31v19" />
      </svg>
      <div className="brand-copy">
        <strong>قطر للمنتجات المنزلية</strong>
        <span>QATAR HOME PRODUCTS</span>
      </div>
    </div>
  );
}

const categories = [
  { id: "all", label: "الكل" },
  { id: "trolley", label: "حقائب السفر" },
  { id: "bedding", label: "المفارش والبطانيات" },
  { id: "cables", label: "كابلات الشبكة" },
];

const products = [
  { id: 1, category: "trolley", name: "طقم حقائب ستار جولد", model: "SG-TPC42 · 3 قطع", price: "ابتداءً من 130 ر.ق", image: stargoldTrolley, tag: "الأكثر طلباً" },
  { id: 2, category: "trolley", name: "طقم حقائب VIP", model: "VT-TPC100 · 3 قطع", price: "ابتداءً من 129 ر.ق", image: vipTrolley, tag: "8 ألوان" },
  { id: 3, category: "bedding", name: "بطانية راشيل بوجهين", model: "SG-BL2040 · 200×240 سم", price: "129 ر.ق", image: blanketBonded, tag: "وجهين" },
  { id: 4, category: "bedding", name: "بطانية راشيل الفاخرة", model: "SG-BL2036 · طبقتان", price: "129 ر.ق", image: blanketEmbossed, tag: "ملمس بارز" },
  { id: 5, category: "bedding", name: "طقم مفرش زهور", model: "SG-CP2003 · 8 قطع", price: "249 ر.ق", image: comforterA, tag: "100% مايكروفايبر" },
  { id: 6, category: "bedding", name: "طقم مفرش هندسي", model: "SG-CP2003 · 8 قطع", price: "249 ر.ق", image: comforterD, tag: "تصميم عصري" },
  { id: 7, category: "bedding", name: "طقم مفرش سماوي", model: "SG-CP2003 · 8 قطع", price: "249 ر.ق", image: comforterE, tag: "ناعم ومريح" },
  { id: 8, category: "cables", name: "كابل شبكة CAT6", model: "3 متر · ألوان متعددة", price: "اطلب السعر", image: cat6Three, tag: "نحاس نقي" },
  { id: 9, category: "cables", name: "كابل شبكة CAT6", model: "5 متر · ألوان متعددة", price: "اطلب السعر", image: cat6Five, tag: "اتصال ثابت" },
  { id: 10, category: "cables", name: "صندوق كابل CAT6", model: "SG-CA1003 · 305 متر", price: "اطلب السعر", image: cat6Box, tag: "حتى 1Gbps" },
];

const cablePrices = [
  ["10 متر", "32"],
  ["15 متر", "40"],
  ["20 متر", "45"],
  ["25 متر", "49"],
  ["30 متر", "55"],
  ["40 متر", "59"],
  ["50 متر", "65"],
];

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileNav, setMobileNav] = useState(false);
  const visibleProducts = products.filter((product) => activeCategory === "all" || product.category === activeCategory);

  return (
    <div className="site-shell" dir="rtl">
      <div className="announcement">
        <div className="container announcement-inner">
          <span><Icon name="delivery" size={18} /> توصيل منزلي مجاني داخل الدوحة</span>
          <span className="announcement-contact">للطلب عبر واتساب: <bdi>71845751</bdi></span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a className="brand-link" href="#home" aria-label="الرئيسية"><Brand /></a>
          <nav className={`nav ${mobileNav ? "nav-open" : ""}`} aria-label="التنقل الرئيسي">
            <a href="#home" onClick={() => setMobileNav(false)}>الرئيسية</a>
            <a href="#products" onClick={() => setMobileNav(false)}>المنتجات</a>
            <a href="#prices" onClick={() => setMobileNav(false)}>الأسعار</a>
            <a href="#about" onClick={() => setMobileNav(false)}>من نحن</a>
            <a href="#contact" onClick={() => setMobileNav(false)}>تواصل معنا</a>
          </nav>
          <a className="header-cta" href={whatsappLink("مرحباً، أود الاستفسار عن منتجاتكم")} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" /> اطلب عبر واتساب
          </a>
          <button className="menu-button" type="button" aria-label="فتح القائمة" onClick={() => setMobileNav(!mobileNav)}>
            <Icon name="menu" size={25} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow"><span /> اختيارات أفضل لمنزل أجمل</div>
              <h1>كل ما يحتاجه <em>منزلك ورحلتك</em> في مكان واحد</h1>
              <p>منتجات منزلية مختارة، حقائب سفر متينة، ومستلزمات شبكة موثوقة بجودة تستحقها وأسعار تناسبك.</p>
              <div className="hero-actions">
                <a className="primary-button" href="#products">تسوّق المنتجات <Icon name="arrow" /></a>
                <a className="secondary-button" href={whatsappLink("مرحباً، أريد المساعدة في اختيار منتج")} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> تحدث معنا</a>
              </div>
              <div className="hero-trust">
                <span><Icon name="check" /> جودة مختارة</span>
                <span><Icon name="check" /> أسعار منافسة</span>
                <span><Icon name="check" /> خدمة سريعة</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card hero-card-main">
                <span className="floating-label">تشكيلة واسعة</span>
                <img src={stargoldTrolley} alt="تشكيلة حقائب سفر ستار جولد" />
              </div>
              <div className="mini-card">
                <div className="mini-icon"><Icon name="delivery" size={25} /></div>
                <div><strong>توصيل مجاني</strong><span>حتى باب منزلك</span></div>
              </div>
              <div className="rating-card"><strong>+10</strong><span>تصاميم مختارة</span></div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container benefits-grid">
            <div><span className="benefit-icon"><Icon name="delivery" /></span><p><strong>توصيل مجاني</strong><small>داخل مدينة الدوحة</small></p></div>
            <div><span className="benefit-icon"><Icon name="shield" /></span><p><strong>جودة موثوقة</strong><small>منتجات أصلية ومختارة</small></p></div>
            <div><span className="benefit-icon"><Icon name="whatsapp" /></span><p><strong>طلب سهل</strong><small>مباشرة عبر واتساب</small></p></div>
            <div><span className="benefit-icon"><Icon name="box" /></span><p><strong>تشكيلة متجددة</strong><small>خيارات لكل احتياج</small></p></div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <div><span className="section-kicker">مختاراتنا لك</span><h2>تسوّق حسب احتياجك</h2></div>
              <p>اكتشف مجموعتنا المنتقاة من أفضل المنتجات للمنزل والسفر والعمل.</p>
            </div>
            <div className="category-tabs" role="tablist" aria-label="تصنيفات المنتجات">
              {categories.map((category) => (
                <button key={category.id} className={activeCategory === category.id ? "active" : ""} type="button" onClick={() => setActiveCategory(category.id)}>
                  {category.label}
                </button>
              ))}
            </div>
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <span className="product-tag">{product.tag}</span>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <div><span>{product.model}</span><h3>{product.name}</h3></div>
                    <div className="product-footer">
                      <strong>{product.price}</strong>
                      <a href={whatsappLink(`مرحباً، أود طلب ${product.name} (${product.model})`)} target="_blank" rel="noreferrer" aria-label={`طلب ${product.name}`}>
                        <Icon name="whatsapp" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section price-section" id="prices">
          <div className="container price-grid">
            <div className="price-copy">
              <span className="section-kicker light">أسعار واضحة</span>
              <h2>كابلات CAT6<br />بالطول الذي تحتاجه</h2>
              <p>نحاس نقي 24 AWG، اتصال ثابت وسريع، وغلاف PVC متين للاستخدام المنزلي والمهني.</p>
              <ul>
                <li><Icon name="check" /> سرعة نقل تصل إلى 1 جيجابت</li>
                <li><Icon name="check" /> متوافق مع الكمبيوتر والتلفاز والكاميرات</li>
                <li><Icon name="check" /> مناسب للسويتش وNVR / DVR</li>
              </ul>
              <a className="sand-button" href={whatsappLink("مرحباً، أود طلب كابل CAT6")} target="_blank" rel="noreferrer">اطلب الكمية الآن <Icon name="arrow" /></a>
            </div>
            <div className="price-panel">
              <div className="price-panel-head"><div><span>CAT6 LAN CABLE</span><strong>قائمة الأسعار</strong></div><Icon name="box" size={32} /></div>
              <div className="price-list">
                {cablePrices.map(([length, price]) => (
                  <div key={length}><span>{length}</span><strong>{price} <small>ر.ق</small></strong></div>
                ))}
              </div>
              <p>* السعر يشمل التوصيل المجاني داخل الدوحة</p>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-collage">
              <div className="collage-main"><img src={comforterA} alt="طقم مفرش فاخر من ستار جولد" /></div>
              <div className="collage-small"><img src={vipTrolley} alt="حقائب سفر VIP" /></div>
              <div className="experience-badge"><strong>جودة</strong><span>تختارها بثقة</span></div>
            </div>
            <div className="about-copy">
              <span className="section-kicker">من نحن</span>
              <h2>منتجات عملية تضيف الراحة إلى يومك</h2>
              <p>في شركة قطر للمنتجات المنزلية، نختار لك منتجات تجمع بين الجودة، التصميم العملي، والسعر المناسب. من أناقة غرفة النوم إلى متانة حقائب السفر وكفاءة حلول الشبكات.</p>
              <div className="about-points">
                <div><span><Icon name="bed" /></span><p><strong>راحة وأناقة</strong><small>مفارش وبطانيات بتصاميم متنوعة</small></p></div>
                <div><span><Icon name="bag" /></span><p><strong>جاهز لكل رحلة</strong><small>حقائب بأحجام وألوان تناسبك</small></p></div>
              </div>
              <a className="text-link" href="#contact">تعرّف على موقعنا <Icon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <div className="contact-heading">
              <span>نحن قريبون منك</span>
              <h2>هل تحتاج مساعدة في الاختيار؟</h2>
              <p>فريقنا جاهز للإجابة عن استفساراتك واستقبال طلبك.</p>
            </div>
            <div className="contact-options">
              <a href={whatsappLink("مرحباً، أود الاستفسار عن المنتجات")} target="_blank" rel="noreferrer"><span><Icon name="whatsapp" /></span><p><small>واتساب الأعمال</small><strong><bdi>71845751</bdi></strong></p><Icon name="chevron" /></a>
              <a href="mailto:qatarhomeproduct@gmail.com"><span><Icon name="mail" /></span><p><small>البريد الإلكتروني</small><strong>qatarhomeproduct@gmail.com</strong></p><Icon name="chevron" /></a>
              <a href="https://www.google.com/maps/search/Islamic+Exchange/@25.3715027,51.2320585,787m/data=!3m1!1e3?hl=en&entry=ttu" target="_blank" rel="noreferrer"><span><Icon name="location" /></span><p><small>موقعنا</small><strong>مشيرب داون تاون، الدوحة</strong></p><Icon name="chevron" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><Brand light /><p>اختيارات موثوقة لمنزلك ورحلتك، مع توصيل مجاني وخدمة سريعة داخل الدوحة.</p></div>
          <div><strong className="footer-title">روابط سريعة</strong><a href="#products">المنتجات</a><a href="#prices">الأسعار</a><a href="#about">من نحن</a></div>
          <div><strong className="footer-title">تواصل معنا</strong><a href={`tel:+${whatsappNumber}`}><Icon name="phone" size={17} /> <bdi>+974 7184 5751</bdi></a><a href="mailto:qatarhomeproduct@gmail.com"><Icon name="mail" size={17} /> البريد الإلكتروني</a><span><Icon name="location" size={17} /> مشيرب، الدوحة، قطر</span></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 شركة قطر للمنتجات المنزلية. جميع الحقوق محفوظة.</span><span>صُنع بعناية في قطر</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink("مرحباً، أود طلب أحد المنتجات")} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب"><Icon name="whatsapp" size={28} /><span>اطلب الآن</span></a>
    </div>
  );
}
