import {
    IconBrandInstagramFilled,
    IconBrandLinkedinFilled,
    IconBrandPinterestFilled,
    IconBrandTiktokFilled,
    IconBrandX,
    IconBrandYoutubeFilled,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

const navigation = {
    product: [
        { name: 'Features', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Updates', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Pricing', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Manifesto', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    resources: [
        { name: 'Examples', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'Docs', href: '#' },
    ],
    legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
    ],
    social: [
        {
            name: 'X',
            href: '#',
            icon: IconBrandX,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: IconBrandInstagramFilled,
        },
        {
            name: 'Pinterest',
            href: '#',
            icon: IconBrandPinterestFilled,
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: IconBrandLinkedinFilled,
        },
        {
            name: 'Tiktok',
            href: '#',
            icon: IconBrandTiktokFilled,
        },
        {
            name: 'YouTube',
            href: '#',
            icon: IconBrandYoutubeFilled,
        },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="px-4 pt-16 pb-8 sm:pt-24 lg:container lg:mx-auto lg:px-8 lg:pt-32">
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="flex max-w-[14rem] flex-col justify-between lg:max-w-2xs">
                        <div>
                            <Image
                                width={100}
                                height={100}
                                alt="Your Company"
                                src="/Logo.png"
                                className="h-8 w-auto"
                            />
                            <p className="mt-5 text-sm text-[#BCBCBC] lg:text-base">
                                Effortlessly turn your ideas into a fully
                                functional, responsive, no-code SaaS website.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-3">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-[#808080]"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-20 grid gap-x-10 gap-y-8 md:mt-0 md:grid-cols-4 lg:gap-x-14">
                        <div>
                            <h3 className="text-sm/6 font-semibold">Product</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.product.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-sm/6 text-[#7B7B7B]"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm/6 font-semibold">Company</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-sm/6 text-[#7B7B7B]"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm/6 font-semibold">
                                Resources
                            </h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.resources.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-sm/6 text-[#7B7B7B]"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm/6 font-semibold">Legal</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-sm/6 text-[#7B7B7B]"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
