"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import '../styles/global.css';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(2); // Giả lập số lượng sản phẩm trong giỏ hàng
  const [active, setActive] = useState("/");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <Link href="/" className="logo" onClick={() => setActive("/")}>
        🛍️ MyShop
      </Link>

      <ul className="menu">
        <li>
          <Link href="/" className={active === "/" ? "active" : ""} onClick={() => setActive("/")}>
            Trang chủ
          </Link>
        </li>
        <li>
          <Link href="/products" className={active === "/products" ? "active" : ""} onClick={() => setActive("/products")}>
            Sản phẩm
          </Link>
        </li>
        <li>
          <Link href="/cart" className={active === "/cart" ? "active" : ""} onClick={() => setActive("/cart")}>
            Giỏ hàng ({cartCount})
          </Link>
        </li>
        <li>
          <Link href="/about" className={active === "/about" ? "active" : ""} onClick={() => setActive("/about")}>
            Giới thiệu
          </Link>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Tìm kiếm sản phẩm..." />
        <button>
          <Icon icon="ic:baseline-search" className="search-icon" />
        </button>
      </div>

    </nav>
  );
}
