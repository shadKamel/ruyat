import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { IconBell, IconX, IconMenu2 } from '@tabler/icons-react'
import { Button } from './button'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
    return (
        <Disclosure as="nav" className="absolute z-50 w-full">
            <div className="container mx-auto">
                <div className="px-2 sm:px-6 md:px-12">
                    <div className="relative flex h-20 justify-between">
                        <div className="absolute inset-y-0 right-3 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <IconMenu2
                                    aria-hidden="true"
                                    className="block size-6 group-data-open:hidden"
                                />
                                <IconX
                                    aria-hidden="true"
                                    className="hidden size-6 group-data-open:block"
                                />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-start px-5 sm:items-stretch">
                            <div className="flex shrink-0 items-center">
                                <Image
                                    width={100}
                                    height={100}
                                    alt="Your Company"
                                    src="/Logo.png"
                                    className="h-8 w-auto"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-6">
                                {/* Current: "border-indigo-600 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-b-2 border-transparent px-1 text-black/60 hover:text-gray-700"
                                >
                                    About
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-b-2 border-transparent px-1 text-black/60 hover:text-gray-700"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-b-2 border-transparent px-1 text-black/60 hover:text-gray-700"
                                >
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-b-2 border-transparent px-1 text-black/60 hover:text-gray-700"
                                >
                                    Updates
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-b-2 border-transparent px-1 text-black/60 hover:text-gray-700"
                                >
                                    Help
                                </Link>
                            </div>
                            <div className="hidden md:inline">
                                <Button size="lg" className="text-base">
                                    Get For Free
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 bg-white pt-2 pb-4">
                    {/* Current: "bg-indigo-50 border-indigo-600 text-indigo-700", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" */}
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Dashboard
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Team
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Projects
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Calendar
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
