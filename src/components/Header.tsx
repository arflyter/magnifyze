import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import DropdownMenu from '@/components/account'; // Ensure this is the correct path

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/news">News</MobileNavLink>
            <MobileNavLink href="/faq">FAQ</MobileNavLink>
            <MobileNavLink href="/exchange">Connect</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <Popover.Button as="div" className="block w-full p-2">
              <DropdownMenu /> {/* Mobile Dropdown Menu */}
            </Popover.Button>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  const pathname = usePathname();  // Use the custom usePathname hook

  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <div className="hidden md:flex md:gap-x-6">
              <li className={clsx("inline-block rounded-lg px-4 py-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer", {'bg-sky-100 text-blue-600': pathname === "/news"})}>
                <Link href="/news">News</Link>
              </li>
              <li className={clsx("inline-block rounded-lg px-4 py-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer", {'bg-sky-100 text-blue-600': pathname === "/faq"})}>
                <Link href="/faq">FAQ</Link>
              </li>
              <li className={clsx("inline-block rounded-lg px-4 py-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer", {'bg-sky-100 text-blue-600': pathname === "/exchange"})}>
                <Link href="/exchange">Connect</Link>
              </li>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <DropdownMenu /> {/* Desktop Dropdown Menu */}
            </div>
           
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
