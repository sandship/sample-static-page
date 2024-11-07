"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaHome, FaBox, FaQuestionCircle, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function GlobalFooter() {
  return (
    <footer className="w-full text-center py-8 bg-gray-100 text-gray-600">
      <div className="flex flex-col gap-8">
        <div className="flex justify-around">
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold">連絡先</h2>
            <p>〒123-4567 東京都新宿区1-2-3</p>
            <p>電話: 03-1234-5678</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold">メルマガ受信フォーム</h2>
            <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input type="email" placeholder="sample@mail.com" className="border p-2 mb-2 pr-10" />
                <button type="submit" className="absolute right-0 top-3 mr-3">
                  <FaPaperPlane className="text-gray-500" />
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold">サイトマップ</h2>
            <ul className="grid grid-cols-3 gap-2">
              <li className="flex items-center">
                <FaHome className="mr-2" />
                <Link href="/">ホーム</Link>
              </li>
              <li className="flex items-center">
                <FaBox className="mr-2" />
                <Link href="/about">定期便</Link>
              </li>
              <li className="flex items-center">
                <FaBox className="mr-2" />
                <Link href="/products">商品紹介</Link>
              </li>
              <li className="flex items-center">
                <FaQuestionCircle className="mr-2" />
                <Link href="/faq">よくあるご質問</Link>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <Link href="/contact">お問合せ</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold">SNS</h2>
            <div className="flex gap-4">
              <Link href="https://facebook.com">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link href="https://twitter.com">
                <FaTwitter className="text-2xl" />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <nav>
          <ul className="flex justify-center gap-6">
            <li><Link href="/privacy">プライバシーポリシー</Link></li>
            <li><Link href="/terms">利用規約</Link></li>
          </ul>
        </nav>
        <p className="text-sm text-gray-600">
          © 2024 SBIMED. All rights reserved.
        </p>
      </div>
    </footer>
  );
}