"use client";

import Link from "next/link";
import productsData from "../_lib/products";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <h1>Products</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h2>

      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            {`${product.name} - $${product.price}`}
          </Link>
        </div>
      ))}

      <Link href="/">Home</Link>
    </>
  );
}
