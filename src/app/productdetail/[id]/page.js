"use client";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import styles from "@/styles/productdetail.module.css";
import { Icon } from "@iconify/react";

const products = {
  1: {
    name: "Ghế Sofa Cao Cấp",
    price: "12,000,000 VND",
    description:
      "Ghế sofa bọc vải cao cấp, thiết kế hiện đại, mang lại sự thoải mái tối đa.",
    images: [
      "/images/products/sofa1.jpg",
      "/images/products/sofa2.jpg",
      "/images/products/sofa3.jpg",
    ],
    colors: ["#8B4513", "#C0C0C0", "#000000", "#c11818", "#18c156", "#4b34c1"],
    sizes: ["S", "M", "L", "XL"],
  },
  2: {
    name: "Bàn Trà Gỗ Tự Nhiên",
    price: "5,500,000 VND",
    description:
      "Bàn trà được làm từ gỗ tự nhiên cao cấp, kiểu dáng thanh lịch, phù hợp với mọi không gian phòng khách.",
    images: [
      "/images/products/table1.jpg",
      "/images/products/table2.jpg",
      "/images/products/table3.jpg",
    ],
    colors: ["#D2B48C", "#8B4513", "#5A3E1B"],
    sizes: ["60cm", "80cm", "100cm"],
  },
  3: {
    name: "Tủ Quần Áo Cửa Lùa",
    price: "18,900,000 VND",
    description:
      "Tủ quần áo cửa lùa tiết kiệm không gian, thiết kế sang trọng, chất liệu gỗ công nghiệp bền đẹp.",
    images: [
      "/images/products/closet1.jpg",
      "/images/products/closet2.jpg",
      "/images/products/closet3.jpg",
    ],
    colors: ["#FFF", "#D2B48C", "#000"],
    sizes: ["1.2m", "1.5m", "1.8m"],
  },
  4: {
    name: "Giường Ngủ Hiện Đại",
    price: "15,200,000 VND",
    description:
      "Giường ngủ phong cách hiện đại, khung gỗ chắc chắn, phù hợp với mọi không gian phòng ngủ.",
    images: [
      "/images/products/bed1.jpg",
      "/images/products/bed2.jpg",
      "/images/products/bed3.jpg",
    ],
    colors: ["#A9A9A9", "#8B4513", "#FFFFFF"],
    sizes: ["1.6m x 2m", "1.8m x 2m", "2m x 2.2m"],
  },
  5: {
    name: "Đèn Sàn Minimalist",
    price: "3,200,000 VND",
    description:
      "Đèn sàn phong cách tối giản, ánh sáng ấm áp, phù hợp với không gian phòng khách và phòng ngủ.",
    images: [
      "/images/products/lamp1.jpg",
      "/images/products/lamp2.jpg",
      "/images/products/lamp3.jpg",
    ],
    colors: ["#000000", "#FFFFFF", "#FFD700"],
    sizes: ["Cao 120cm", "Cao 150cm"],
  },
  6: {
    name: "Bàn Ăn 6 Ghế",
    price: "14,500,000 VND",
    description:
      "Bộ bàn ăn 6 ghế thiết kế hiện đại, chất liệu gỗ sồi chắc chắn, phù hợp với mọi không gian bếp.",
    images: [
      "/images/products/dining1.jpg",
      "/images/products/dining2.jpg",
      "/images/products/dining3.jpg",
    ],
    colors: ["#D2B48C", "#8B4513"],
    sizes: ["1.6m x 0.8m", "1.8m x 0.9m"],
  },
  7: {
    name: "Kệ Tivi Gỗ Sồi",
    price: "7,800,000 VND",
    description:
      "Kệ tivi làm từ gỗ sồi tự nhiên, thiết kế đơn giản nhưng tinh tế, phù hợp với không gian phòng khách.",
    images: [
      "/images/products/tvstand1.jpg",
      "/images/products/tvstand2.jpg",
      "/images/products/tvstand3.jpg",
    ],
    colors: ["#D2B48C", "#5A3E1B", "#FFFFFF"],
    sizes: ["1.5m", "1.8m", "2m"],
  },
};


export default function ProductDetailPage() {
  const params = useParams();
  const product = products[params?.id];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h1 className={styles.notFound}>Sản phẩm không tồn tại</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.productWrapper}>
        <div className={styles.imageGallery}>
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            className={styles.mainSlider}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${product.name} ${index}`}
                  className={styles.mainImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            className={styles.thumbnailSlider}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={styles.thumbnailImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price}</p>

          <div className={styles.optionSection}>
            <h3>Màu sắc:</h3>
            <div className={styles.colorOptions}>
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={
                    selectedColor === color
                      ? styles.colorButtonActive
                      : styles.colorButton
                  }
                  style={{ backgroundColor: color, border: selectedColor === color ? '3px solid #000' : '1px solid #ccc' }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          <div className={styles.optionSection}>
            <h3>Kích thước:</h3>
            <div className={styles.sizeOptions}>
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={
                    selectedSize === size
                      ? styles.sizeButtonActive
                      : styles.sizeButton
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.optionSection}>
            <h3>Số lượng:</h3>
            <div className={styles.quantityContainer}>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
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
      </div>
    </div>
  );
}