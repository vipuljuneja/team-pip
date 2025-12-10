import Image from 'next/image';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({ children, href, className = "" }: ButtonProps) {
  const baseStyles = "group inline-flex items-center gap-2 px-4 py-2 text-white uppercase transition-all hover:underline";
  
  const content = (
    <>
      {children}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Image 
          src="/arrowSmall.png" 
          alt="arrow" 
          width={20} 
          height={20}
        />
      </span>
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {content}
      </a>
    );
  }
  
  return (
    <button className={`${baseStyles} ${className}`}>
      {content}
    </button>
  );
}