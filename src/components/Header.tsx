import { useState } from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import DropdownMenu from '@/components/account'; // Ensure this is the correct path
import Image from 'next/image';
import logoBinance from '@/images/logos/binance.svg';

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link href={href} passHref>
      <a className="block w-full p-2" onClick={onClick}>
        {children}
      </a>
    </Link>
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

function MobileNavigation({ setSelected }: { setSelected: (selected: string) => void }) {
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
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/demo" onClick={() => setSelected('demo')}>
              <div className="flex items-center">
                <Image src={logoBinance} alt="Binance Logo" width={24} height={24} />
                <span className="ml-2">Demo</span>
              </div>
            </MobileNavLink>
            <MobileNavLink href="/plus" onClick={() => setSelected('plus')}>
              <span className="text-xl">+</span>
            </MobileNavLink>
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
  const [selected, setSelected] = useState('demo');
  const pathname = usePathname(); // Use the custom usePathname hook

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
              <li className={clsx("inline-block rounded-lg px-4 py-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer", {'bg-sky-100 text-blue-600': pathname === "/contact"})}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={clsx("inline-block rounded-lg px-4 py-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer", {'bg-sky-100 text-blue-600': selected === "demo"})}>
                <Link href="/bots" passHref>
                  <div className="flex items-center">
                    <Image src={logoBinance} alt="Binance Logo" width={24} height={24} />
                    <span className="ml-2" onClick={() => setSelected('demo')}>Demo</span>
                  </div>
                </Link>
              </li>
              <li className={clsx("inline-block rounded-lg px-4 py-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer", {'bg-sky-100 text-blue-600': selected === "plus"})}>
                <Link href="/exchange" passHref>
                  <span className="text-xl" onClick={() => setSelected('plus')}>+</span>
                </Link>
              </li>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <DropdownMenu /> {/* Desktop Dropdown Menu */}
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation setSelected={setSelected} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
