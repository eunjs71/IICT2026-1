import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                <Link
                    href="/"
                    className="font-heading text-2xl font-bold tracking-wide text-white hover:text-gray-300 transition-colors"
                >
                    IICT 2026-1
                </Link>

                <nav className="flex items-center gap-6 text-sm">
                    <Link
                        href="/"
                        className="text-white transition-colors hover:text-gray-300"
                    >
                        HOME
                    </Link>
                    <Link
                        href="/archive"
                        className="text-white transition-colors hover:text-gray-300"
                    >
                        ARCHIVE
                    </Link>
                </nav>
            </div>
        </header>
    );
}