'use client';
import {
  CpuChipIcon,
  BriefcaseIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'; // Importing the required icons
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Logo } from '@/components/Logo'

// Map of links to display in the side navigation.
const links = [
  { name: 'Bots', href: '/bots', icon: CpuChipIcon  },
  { name: 'Portfolio', href: '/portfolio', icon: BriefcaseIcon },
  { name: 'Stats', href: '/stats', icon: ChartBarIcon },
];

export default function Sidenav() {
  const pathname = usePathname();
  return (
    <nav className="h-full w-64 fixed inset-y-0 bg-white shadow-md">
      <div className="p-5">
        
        <h2 className="text-lg font-semibold text-gray-900"><Link href="/">
          <Logo className="h-10 w-auto" /></Link></h2>
        
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex items-center gap-2 rounded-md p-2 hover:bg-sky-100 hover:text-blue-600',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
                'w-full text-sm font-medium'
              )}
            >
              <LinkIcon className="h-6 w-6" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
