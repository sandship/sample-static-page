import Link from "next/link";
import { CiUser, CiShoppingCart } from 'react-icons/ci';

export default function GlobalHeader() {
  return (
    <header className="sticky top-0 left-0 w-full flex items-center justify-between px-4 bg-white z-50">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold">
          PlsmLgn
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-6">
          <li className="px-3 py-2 hover:bg-gray-200 transition-colors duration-100">
            <Link href="/about">定期便</Link>
          </li>
          <li className="border-l border-gray-300 h-6"/>
          <li className="px-3 py-2 hover:bg-gray-200 transition-colors duration-100">
            <Link href="/products">商品紹介</Link>
          </li>
          <li className="border-l border-gray-300 h-6"/>
          <li className="px-3 py-2 hover:bg-gray-200 transition-colors duration-100">
            <Link href="/faq">よくあるご質問</Link>
          </li>
          <li className="border-l border-gray-300 h-6"/>
          <li className="px-3 py-2 hover:bg-gray-200 transition-colors duration-100">
            <Link href="/contact">お問合せ</Link>
          </li>
          <li className="border-l border-gray-300 h-6"/>
          <li className="flex flex-col items-center px-3 py-2">
            <Link href="/mypage" className="flex flex-col items-center">
              <CiUser className="text-4xl" />
              <span className="text-sm">マイページ</span>
            </Link>
          </li>
          <li className="border-l border-gray-300 h-6"/>
          <li className="flex flex-col items-center px-3 py-2">
            <Link href="/cart" className="flex flex-col items-center">
              <CiShoppingCart className="text-4xl" />
              <span className="text-sm">カート</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
