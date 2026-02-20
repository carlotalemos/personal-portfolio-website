import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({ href, children, className = "", external = false }: ButtonProps) {
  const baseClasses = "inline-flex items-center gap-2 border border-white px-6 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300";
  
  if (external) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {children}
        <span className="text-lg">→</span>
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {children}
      <span className="text-lg">→</span>
    </Link>
  );
}
