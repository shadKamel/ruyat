'use client'
import {
    IconBell,
    IconTargetArrow,
    IconLeaf,
    IconLock,
    IconArrowRight,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '../ui/section-heading'
import { motion } from 'motion/react'

const features = [
    {
        title: 'Integration ecosystem',
        description: 'Track your progress and motivate your efforts everyday.',
        icon: IconLeaf,
    },
    {
        title: 'Goal setting and tracking',
        description: 'Set and track goals with manageable task breakdowns.',
        icon: IconTargetArrow,
    },
    {
        title: 'Secure data encryption',
        description: 'Ensure your data’s safety with top-tier encryption.',
        icon: IconLock,
    },
    {
        title: 'Customizable notifications',
        description: 'Get alerts on tasks and deadlines that matter most.',
        icon: IconBell,
    },
]

export default function Product() {
    return (
        <section className="overflow-hidden bg-linear-180 from-[#FFFFFF] to-[#D2DCFF] py-24 sm:py-28 lg:overflow-auto">
            <SectionHeading
                tag="Boost your productivity"
                title="A more effective way to track progress"
                body="Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer."
            />
            <motion.div
                transition={{ duration: 0.5, delay: 0.2 }}
                initial={{
                    opacity: 0,
                    translateY: 100,
                }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                }}
                className="relative mx-auto mt-10 max-w-7xl"
            >
                <div className="px-6 lg:px-8">
                    <Image
                        alt="product"
                        src="/Product.png"
                        width={2432}
                        height={1442}
                        className="rounded ring-1 ring-gray-900/10 drop-shadow-xl md:rounded-xl"
                    />
                </div>
                <Image
                    alt="product"
                    src="/torus.png"
                    className="animate-floating-reverse absolute bottom-20 -left-22 hidden md:inline"
                    width={250}
                    height={250}
                />
                <Image
                    alt="product"
                    src="/pyramid.png"
                    className="animate-floating absolute top-24 -right-22 hidden md:inline"
                    width={250}
                    height={250}
                />
            </motion.div>
            <div className="mx-auto mt-20 max-w-7xl px-6 sm:px-0 md:mt-24">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature, index) => (
                        <motion.div
                            transition={{ duration: 0.5, delay: 0.2 * index }}
                            initial={{
                                opacity: 0,
                                translateY: 100,
                            }}
                            whileInView={{
                                opacity: 1,
                                translateY: 0,
                            }}
                            key={feature.title}
                            className="relative pl-9"
                        >
                            <dt className="inline space-y-2 font-semibold">
                                <feature.icon
                                    aria-hidden="true"
                                    className="size-7"
                                />
                                <span className="font-dm-sans mt-12 text-lg font-bold">
                                    {feature.title}
                                </span>
                            </dt>
                            <dd className="font-inter inline space-y-2">
                                <p>{feature.description}</p>
                                <Link href="#">
                                    Learn more{' '}
                                    <IconArrowRight
                                        aria-hidden="true"
                                        className="inline size-5"
                                    />
                                </Link>
                            </dd>
                        </motion.div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
