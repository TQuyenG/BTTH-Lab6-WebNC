"use client";
import styles from "@/styles/products.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";

const products = [
  { id: 1, name: "Ghế Sofa Cao Cấp", price: "12,000,000 VND", images: ["/images/products/sofa1.jpg"] },
  { id: 2, name: "Bàn Trà Gỗ Tự Nhiên", price: "5,500,000 VND", images: ["/images/products/table1.jpg"] },
  { id: 3, name: "Tủ Quần Áo Cửa Lùa", price: "18,900,000 VND", images: ["/images/products/closet1.jpg"] },
  { id: 4, name: "Giường Ngủ Hiện Đại", price: "15,200,000 VND", images: ["/images/products/bed1.jpg"] },
  { id: 5, name: "Đèn Sàn Minimalist", price: "3,200,000 VND", images: ["/images/products/lamp1.jpg"] },
  { id: 6, name: "Bàn Ăn 6 Ghế", price: "14,500,000 VND", images: ["/images/products/dining3.jpg"] },
  { id: 7, name: "Kệ Tivi Gỗ Sồi", price: "7,800,000 VND", images: ["/images/products/tvstand1.jpg"] },
];

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Danh sách sản phẩm nội thất</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div 
            key={product.id} 
            className={styles.productCard} 
            onClick={() => window.location.href = `/productdetail/${product.id}`}
          >
            <div className={styles.imageWrapper}>
              <img src={product.images[0]} alt={product.name} className={styles.image} />
            </div>
            <div className={styles.productDetails}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.addToCart} onClick={(e) => e.stopPropagation()}>
                <Icon icon="mdi:cart" className={styles.icon} />
                Thêm vào giỏ
              </button>
              <button className={styles.buyNow} onClick={(e) => e.stopPropagation()}>
                <Icon icon="mdi:credit-card-outline" className={styles.icon} />
                Mua ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
