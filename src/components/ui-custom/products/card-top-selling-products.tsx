"use client";

import Image from "next/image";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

type TypeProduct = {
  id: number;
  image: string;
  name: string;
  price: number;
};

const products: TypeProduct[] = [
  {
    id: 2,
    image: "/images/products/product-2.webp",
    name: "Tenis morados",
    price: 120
  },
  {
    id: 3,
    image: "/images/products/product-3.webp",
    name: "Tenis con figuras",
    price: 110
  },
  {
    id: 4,
    image: "/images/products/product-4.webp",
    name: "Tenis color cremita",
    price: 80
  },
  {
    id: 5,
    image: "/images/products/product-5.webp",
    name: "Tenis blanco con rojo",
    price: 80
  }
];

export function CardTopSellingProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Productos más vendidos</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          <li className="grid grid-cols-2 items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                1
              </span>
              <Image
                src="/images/products/product-1.webp"
                alt="Product"
                width={100}
                height={100}
                className="w-20 h-20 rounded-xl bg-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">Tenis blancos con dorado</h3>
              <p className="text-2xl text-primary font-bold">$150</p>
            </div>
          </li>
          {products.map((product) => (
            <li
              key={product.id}
              className="grid grid-cols-6 items-center gap-2"
            >
              <Product {...product} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Product({id, image, name, price}: TypeProduct) {
  return (
    <>
      <div className="col-span-2 flex items-center gap-3">
        <span className="w-7 h-7 flex items-center justify-center bg-primary/10 text-primary rounded-full text-sm">
          {id}
        </span>
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-12 h-12 rounded-lg bg-cover"
        />
      </div>
      <div className="col-span-4 flex items-start justify-between">
        <p className="font-medium">{name}</p>
        <p className="text-primary">${price.toFixed(2)}</p>
      </div>
    </>
  );
}
