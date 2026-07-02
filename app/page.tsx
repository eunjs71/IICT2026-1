import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-[calc(100vh-4rem)] items-start justify-center overflow-hidden bg-[#1C1B16] bg-[radial-gradient(ellipse_60%_55%_at_50%_42%,#2B2921_0%,#1C1B16_60%,#131210_100%)] py-4 md:items-center md:py-12">
      {/* 4px 디더 격자 — 거의 안 보이는 픽셀 질감 (원하면 이 div 삭제) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[repeating-conic-gradient(rgba(255,244,214,0.015)_0%_25%,transparent_0%_50%)] bg-[length:4px_4px]"
      />
      <div className="relative aspect-[9/16] w-full max-w-[min(calc(100vw-2rem),calc((100vh-6rem)*2/3))] overflow-hidden rounded ring-1 ring-[#FFF4D6]/10 shadow-[0_24px_60px_rgba(0,0,0,0.55),0_4px_16px_rgba(0,0,0,0.35)] md:max-w-[min(calc(100vw-2rem),calc((100vh-10rem)*2/3))]">
        <Image
          src="/images/iict_poster.gif"
          alt="IICT 2026-1"
          width={720}
          height={1080}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}