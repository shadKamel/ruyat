'use client'

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { IconX, IconMenu2 } from '@tabler/icons-react'
import { Button } from './button'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const DisclosurePanelMotion = motion.create(DisclosurePanel)
    return (
        <Disclosure as="nav" className="absolute z-50 w-full">
            <div className="container mx-auto">
                <div className="px-2 sm:px-6 md:px-12">
                    <div className="relative flex h-20 justify-between">
                        <div className="absolute inset-y-0 right-3 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton
                                as={motion.button}
                                className="group relative inline-flex items-center justify-center rounded-md p-2 text-black"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 17,
                                }}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <IconMenu2
                                        aria-hidden="true"
                                        className="block size-6 group-data-[open]:hidden"
                                    />
                                    <IconX
                                        aria-hidden="true"
                                        className="hidden size-6 group-data-[open]:block"
                                    />
                                </motion.div>
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
                                {[
                                    'About',
                                    'Features',
                                    'Customers',
                                    'Updates',
                                    'Help',
                                ].map((item) => (
                                    <motion.div
                                        key={item}
                                        whileHover={{ y: -2 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 17,
                                        }}
                                    >
                                        <Link
                                            href="#"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 text-black/60 transition-colors duration-200 hover:text-gray-700"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="hidden md:inline">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 17,
                                    }}
                                >
                                    <Button size="lg" className="text-base">
                                        Get For Free
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                <DisclosurePanelMotion
                    as={motion.div}
                    className="px-2 sm:hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <motion.div
                        className="space-y-1 rounded-sm border bg-white pt-2 pb-4 shadow"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                    >
                        {[
                            'About',
                            'Features',
                            'Customers',
                            'Updates',
                            'Help',
                        ].map((link, index) => (
                            <motion.div
                                key={link}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.2 + index * 0.1,
                                    duration: 0.3,
                                    ease: 'easeOut',
                                }}
                            >
                                <DisclosureButton
                                    as={motion.a}
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-indigo-400 transition-colors duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                                    whileHover={{
                                        x: 8,
                                        scale: 1.02,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 17,
                                        },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {link}
                                </DisclosureButton>
                            </motion.div>
                        ))}
                        <motion.div
                            className="px-3 pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.7,
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 17,
                                }}
                            >
                                <Button size="lg" className="w-full text-base">
                                    Get For Free
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </DisclosurePanelMotion>
            </AnimatePresence>
        </Disclosure>
    )
}
