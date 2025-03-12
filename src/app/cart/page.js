"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "@/styles/cart.module.css";  // Check the import

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ghế Sofa Cao Cấp 3",
      image: "/images/products/sofa1.jpg",
      color: "Red",
      size: "M",
      price: 12000000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Bàn Trà Gỗ Tự Nhiên",
      image: "/images/products/table1.jpg",
      color: "R",
      size: "80cm",
      price: 5500000,
      quantity: 1,
    },
    {
      id: 3,
      name: "Tủ Quần Áo Cửa Lùa",
      image: "/images/products/closet1.jpg",
      color: "Brown",
      size: "1m",
      price: 18900000,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const subtotal = (price, quantity) => price * quantity;

  const totalAmount = cartItems.reduce((total, item) => total + subtotal(item.price, item.quantity), 0);

  return (
    <div className={styles.cartContainer}> 
      <h1 className={styles.cartTitle}>Shopping Cart</h1>
      <p className={styles.cartSummary}>You have {cartItems.length} items in your cart</p>
      <div className={styles.contentContainer}>
        <div className={styles.cartLeft}>
          <hr className={styles.divider} />
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className={styles.cartProduct}>
                    <img src={item.image} alt={item.name} className={styles.productImg} />
                    <span>{item.name}</span>
                  </td>
                  <td className={styles.cartDetails}>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                  </td>
                  <td>{item.price.toLocaleString()} VND</td>
                  <td className={styles.cartQuantity}>
                    <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </td>
                  <td>{subtotal(item.price, item.quantity).toLocaleString()} VND</td>
                  <td>
                    <button className={styles.deleteBtn}>
                      <Icon icon="mdi:trash-can-outline" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.cartActions}>
            <Link href="/products">
              <button className={styles.continueShopping}>Continue Shopping</button>
            </Link>
            <button className={styles.clearCart}>
              <Icon icon="mdi:trash-can-outline" /> Clear Cart
            </button>
          </div>
        </div>

        <div className={styles.cartRight}>
          <h2 className={styles.checkoutTitle}>PAYMENT <Icon icon="mdi:credit-card-outline" /></h2>
          <hr className={styles.divider} />
          <div className={styles.checkoutInfo}>
            <p>Sub total: <span className={styles.amount}>{totalAmount.toLocaleString()} VND</span></p>
            <p>Vouchers: <input type="text" className={styles.voucherInput} placeholder="Enter your vouchers" /></p>
            <button className={styles.applyBtn}>Apply</button>
            <p>Delivery:</p>
            <label>
              <input type="radio" name="delivery" value="store" /> Receive at the store
            </label>
            <br />
            <label>
              <input type="radio" name="delivery" value="home" /> Delivery at home
            </label>
            <p className={styles.deliveryNote}>Delivery options will be updated during the checkout process.</p>
            <p>Order Total: <span className={styles.amount}>{totalAmount.toLocaleString()} VND</span></p>
          </div>
          <button className={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}