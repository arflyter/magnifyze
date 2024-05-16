import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'; 
import { Button } from '@/components/Button';
import { UserCircleIcon } from '@heroicons/react/24/outline'; 
const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); 

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <Button onClick={() => setIsOpen(!isOpen)} color="blue">
                <UserCircleIcon className="h-6 w-6 mr-2" /> Account
            </Button>
            {isOpen && (
                <ul className="absolute z-10 w-44 bg-white shadow-lg rounded-md mt-2 py-1">
                    
                    <li className="px-4 py-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer">
                        <Link href="/settings">Settings</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer">
                        <Link href="/logout">Log out</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
