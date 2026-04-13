import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-white min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="font-syncopate text-[100px] leading-none">404</h1>
            <p className="font-jost text-white/50 text-xl">Page not found.</p>
            <Link
                href="/"
                className="bg-white text-black px-8 py-4 rounded-full font-jost font-normal hover:bg-gray-400 transition-colors"
            >
                BACK HOME
            </Link>
        </div>
    );
}
