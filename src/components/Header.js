import { Icon } from '@iconify/react';
import '../styles/global.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span><Icon icon="mdi:phone" /> HOTLINE: 1900 633 045</span>
        <span><Icon icon="mdi:email" /> Contact us: help@myshop.vn</span>
      </div>
      <div className="header-right">
        <span><Icon icon="mdi:bell-outline" /> Notify</span>
        <span><Icon icon="mdi:help-circle-outline" /> Help</span>
        <span><Icon icon="mdi:account-circle-outline" /> Account</span>
      </div>
    </header>
  );
}
