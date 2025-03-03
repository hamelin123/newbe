import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "เสื้อยืดสีขาว", image: "/images/white-tshirt.jpg", price: "฿250" },
  { id: 2, name: "เสื้อยืดสีดำ", image: "/images/black-tshirt.jpg", price: "฿250" },
  { id: 3, name: "เสื้อฮู้ดสีเทา", image: "/images/gray-hoodie.jpg", price: "฿790" },
];

export default function ClothingStore() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <motion.h1 className="text-3xl font-bold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        ร้านขายเสื้อผ้า
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="w-64 bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
              <Button className="mt-3 w-full">สั่งซื้อ</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
