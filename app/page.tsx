import GlobalHeader from "@/components/header"
import TopCarousel from "@/components/top-carousel"
import ProductLineUp from "@/components/product-lineup"
import GlobalFooter from "@/components/footer"
import StickyBanner from "@/components/sticky-banner"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative">
      <StickyBanner />
      <div className="grid grid-rows-[auto_1fr_160px] items-start justify-items-center min-h-full font-[family-name:var(--font-geist-sans)]">
        <GlobalHeader/>

        <main className="w-full flex flex-col gap-8 overflow-y-auto">
          <TopCarousel />

          <div className="m-12"/>

          <ProductLineUp />

          <section className="items-center flex flex-col gap-8 w-full mt-8">

            {/* 医者からのメッセージ */}
            <Card className="bg-gray-100 p-4 flex items-center w-3/4 border-none m-12">
              <Image src="/doctor_A.webp" alt="Doctor" width={400} height={400} className="mr-4" />
              <CardContent>
                <CardHeader>
                  <CardTitle className="text-xl font-bold mb-2">医者からのメインメッセージ</CardTitle>
                </CardHeader>
                <CardDescription>
                  <p>ここに医者からのメインメッセージが表示されます。これはサンプルのテキストです。</p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-brown-100 p-4 flex flex-col items-center w-3/4 border-none m-12">
              <CardHeader>
                <CardTitle className="text-xl font-bold mb-2">店舗案内</CardTitle>
              </CardHeader>
              <CardContent className="w-full">
                <div className="w-full h-96 mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.935077708778!2d139.7527993152589!3d35.68517598019244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf0a4d8b1b7%3A0x2f9e2b1e1b1e1e1e!2z5aSn5a2m!5e0!3m2!1sja!2sjp!4v1634234567890!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="store map"
                  />
                </div>
                <CardDescription>
                  <p>ここに店舗案内の情報が表示されます。住所や営業時間などの詳細情報を記載します。</p>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-none m-12 w-3/4 p-4">
              <CardHeader>
                <CardTitle className="text-xl font-bold mb-2">お知らせ一覧</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-center">
                  <tbody>
                    <tr className="border-none">
                      <td className="pr-4">2023-10-01</td>
                      <td><Link href="#">お知らせ1: ここにお知らせの内容が表示されます。</Link></td>
                    </tr>
                    <tr className="border-none">
                      <td colSpan={2}><hr className="my-4"/></td>
                    </tr>
                    <tr className="border-none">
                      <td className="pr-4">2023-10-02</td>
                      <td><Link href="#">お知らせ2: ここにお知らせの内容が表示されます。</Link></td>
                    </tr>
                    <tr className="border-none">
                      <td colSpan={2}><hr className="my-4"/></td>
                    </tr>
                    <tr className="border-none">
                      <td className="pr-4">2023-10-03</td>
                      <td><Link href="#">お知らせ3: ここにお知らせの内容が表示されます。</Link></td>
                    </tr>
                    <tr className="border-none">
                      <td colSpan={2}><hr className="my-4"/></td>
                    </tr>
                    <tr className="border-none">
                      <td className="pr-4">2023-10-6</td>
                      <td><Link href="#">お知らせ4: ここにお知らせの内容が表示されます。</Link></td>
                    </tr>
                    <tr className="border-none">
                      <td colSpan={2}><hr className="my-4"/></td>
                    </tr>
                    <tr className="border-none">
                      <td className="pr-4">2023-10-18</td>
                      <td><Link href="#">お知らせ5: ここにお知らせの内容が表示されます。</Link></td>
                    </tr>
                    <tr className="border-none">
                      <td colSpan={2}><hr className="my-4"/></td>
                    </tr>
                    <tr className="border-none">
                      <td className="pr-4">2023-10-21</td>
                      <td><Link href="#">お知らせ6: ここにお知らせの内容が表示されます。</Link></td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>            
          </section>

        </main>

        <GlobalFooter />
      </div>
    </div>
  );
}
