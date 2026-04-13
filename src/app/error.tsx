"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="text-white min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="font-syncopate text-[80px] leading-none">oops</h1>
            <p className="font-jost text-white/50 text-xl">Something went wrong.</p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="bg-white text-black px-8 py-4 rounded-full font-jost font-normal hover:bg-gray-400 transition-colors"
                >
                    TRY AGAIN
                </button>
                <Link
                    href="/"
                    className="bg-white/10 text-white px-8 py-4 rounded-full font-jost font-normal hover:bg-white/20 transition-colors"
                >
                    BACK HOME
                </Link>
            </div>
        </div>
    );
}
