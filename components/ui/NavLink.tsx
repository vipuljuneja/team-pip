// components/ui/NavLink.tsx
import Image from 'next/image';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  
}

export default function NavLink({ children, href }: NavLinkProps) {

  
  return (
    <a 
      href={href} 
      className="group inline-flex items-center gap-2 text-black uppercase font-bold hover:underline transition-all"
    >
      {children}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Image 
          src="/arrow.png" 
          alt="arrow" 
          width={16} 
          height={16}
        />
      </span>
    </a>
  );
}
