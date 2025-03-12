"use client";
import Link from "next/link";
import styles from "@/styles/home.module.css";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className={styles.container}>
      {/* Header Giới thiệu */}
      <motion.div 
        className={styles.intro}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to <span>MY SHOP</span>!</h1>
        <p>Hãy cùng chúng tôi khám phá những sản phẩm công nghệ mới nhất trên thị trường, từ điện thoại thông minh cho đến laptop, đồng hồ thông minh và nhiều thiết bị gia dụng thông minh khác.</p>
        <p>Chúng tôi cam kết mang đến cho bạn những sản phẩm chất lượng cao với giá ưu đãi hấp dẫn, giúp bạn tiết kiệm chi phí mà vẫn sở hữu được những công nghệ tiên tiến nhất. Đừng bỏ lỡ cơ hội trải nghiệm những tính năng nổi bật và thiết kế hiện đại, được cập nhật thường xuyên để đáp ứng nhu cầu ngày càng cao của người tiêu dùng.</p>
        <p>Tham gia ngay hôm nay để nhận những ưu đãi đặc biệt và trở thành người đầu tiên sở hữu những sản phẩm công nghệ đỉnh cao!</p>

        <Link href="/products">
          <motion.button 
            className={styles.shopButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Khám phá ngay
          </motion.button>
        </Link>
      </motion.div>

      {/* Hình ảnh banner */}
      <motion.div 
        className={styles.banner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/banner.jpg" alt="MY SHOP" />
      </motion.div>

      {/* Danh mục sản phẩm nổi bật */}
      <motion.div 
        className={styles.featuredProducts}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>Sản phẩm nổi bật</h2>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <img src="/iphone1.jpg" alt="iPhone 14" />
            <h3>iPhone 14</h3>
            <p>Giá: 20,000,000 VND</p>
          </div>
          <div className={styles.productCard}>
            <img src="/macbook1.jpg" alt="MacBook Air M2" />
            <h3>MacBook Air M2</h3>
            <p>Giá: 27,000,000 VND</p>
          </div>
          <div className={styles.productCard}>
            <img src="/airpods1.jpg" alt="AirPods Pro" />
            <h3>AirPods Pro</h3>
            <p>Giá: 5,500,000 VND</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
