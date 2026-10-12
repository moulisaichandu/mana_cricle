import Image from "next/image";
import { Icon } from "./icon";

export function AndroidAppArt() {
  return <div className="android-app-art" role="img" aria-label="Illustrative Android shopping app concept for fictional tea brand Nila, with a tea collection and a simple navigation layout">
    <div className="android-concept-note"><Icon name="phone" size={27} /><span>Thoughtful screens.<br />Everyday possibilities.</span></div>
    <div className="android-device"><div className="android-camera" /><div className="android-screen"><div className="android-app-header"><b>nila·</b><Icon name="menu" size={17} /></div><span className="android-eyebrow">A moment for you.</span><div className="android-app-title">Find your<br /><em>daily ritual.</em></div><div className="android-app-photo"><Image src="/images/botanical-tea.png" fill sizes="210px" alt="" /></div><div className="android-collection"><span>Explore our blends<small>Tea for slow moments.</small></span><Icon name="arrow" size={16} /></div><div className="android-app-nav"><span>Discover</span><span>Favourites</span><span>Your bag</span></div></div></div>
    <span className="android-concept-label">ANDROID APP · DESIGN CONCEPT</span>
  </div>;
}
