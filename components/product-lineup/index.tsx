import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Link href={link}>
      <Card className="w-full cursor-pointer">
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

const ProductLineup: React.FC = () => {
  const products = [
    {
      title: '商品1',
      description: 'これは商品1の説明です。',
      imageUrl: '/auganic_suppli.webp',
      link: '/products/1',
    },
    {
      title: '商品2',
      description: 'これは商品2の説明です。',
      imageUrl: '/blank_suppli.webp',
      link: '/products/2',
    },
    {
      title: '商品3',
      description: 'これは商品3の説明です。',
      imageUrl: '/mango_suppli.webp',
      link: '/products/3',
    },
    // 他の商品を追加できます
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={index.toString()}
          title={product.title}
          description={product.description}
          imageUrl={product.imageUrl}
          link={product.link}
        />
      ))}
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold mr-4">商品ラインナップ</h1>
        <Link href="/products">
          <button className="border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-colors rounded-md" type="button">
            商品一覧
          </button>
        </Link>
      </div>
      <ProductLineup />
    </div>
  );
};

export default HomePage;