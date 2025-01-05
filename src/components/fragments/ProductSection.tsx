import Image from "next/image";
import { Card, CardContent } from "../elements/card";

interface Product {
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    name: "Keripik Pisang Karamel Manis",
    price: 27500,
    image: "/placeholder.svg",
  },
  {
    name: "Pisang Multi Ovari",
    price: 25000,
    image: "/placeholder.svg",
  },
  {
    name: "Keripik Sale Pisang",
    price: 25000,
    image: "/placeholder.svg",
  },
  {
    name: "Keripik Nangka Ovari",
    price: 27000,
    image: "/placeholder.svg",
  },
];

export default function Products() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-secondary">
            Produk Pilihan
          </h2>
          <p className="text-gray-600 md:text-lg">
            Produk premium rekomendasi dari kami yang wajib kamu coba!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-4">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-secondary font-semibold">
                    Rp. {product.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
