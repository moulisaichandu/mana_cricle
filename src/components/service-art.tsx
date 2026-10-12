import Image from "next/image";
import { Icon } from "./icon";

export function BrandIdentityArt() {
  return <div className="brand-photo-art"><Image src="/images/terra-brand-concept.webp" alt="Terra café identity concept with a green coffee bag, cup and cream menu stationery" fill sizes="(max-width:800px) 100vw, 50vw" loading="eager" /><span>Terra · Brand identity concept</span></div>;
}

export function MenuArt() {
  return <div className="menu-art menu-art-photo" role="img" aria-label="Digital menu concept for fictional Terra café, showing coffee, bites and a table card. The QR symbol is illustrative and cannot be scanned."><Image className="menu-setting" src="/images/cafe-morning.webp" alt="" fill loading="eager" sizes="(max-width: 900px) 90vw, 610px" /><div className="menu-table-card"><Icon name="qr" size={74} /><strong>Good things<br />on the menu.</strong><span>QR table-card concept<br />Illustrative symbol only</span></div><div className="menu-device"><div className="menu-device-top" /><span className="menu-brand">terra.</span><p>Freshly made.<br />Happily shared.</p><div className="menu-categories"><b>Coffee</b><span>Bites</span><span>Coolers</span></div><div className="menu-coffee-photo"><Image src="/images/cafe-morning.webp" alt="" fill sizes="200px" /></div><span className="menu-section-label">YOUR DAILY PICK-ME-UP</span>{[["Classic cappuccino", "Espresso, steamed milk", "₹160"], ["Iced latte", "A cooler kind of coffee", "₹180"], ["Filter coffee", "Comfort in a cup", "₹90"]].map(([name, detail, price]) => <div className="menu-item" key={name}><span><b>{name}</b><small>{detail}</small></span><strong>{price}</strong></div>)}<span className="menu-note">Fictional café · Sample menu</span></div></div>;
}

export function TeluguContentArt() {
  return <div className="telugu-art telugu-art-photo" role="img" aria-label="Illustrative Telugu content concept with a microphone, headphones and a Telugu script card">
    <Image className="voiceover-setting" src="/images/voiceover-studio.webp" alt="" fill loading="eager" sizes="(max-width: 900px) 90vw, 610px" />
    <span className="voiceover-photo-label"><Icon name="mic" size={16} />A familiar voice.</span>
    <div className="telugu-script"><span>Words that feel like home.</span><p lang="te">మీ కథ.<br />మన భాషలో.</p><span>Your story. In our language.</span><div><span>Reels</span><span>Subtitles</span><span>Regional ads</span></div></div>
  </div>;
}
