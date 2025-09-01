'use client'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'
import SectionHeading from '../ui/section-heading'
import Tag from '../ui/tag'
import { IconCheck } from '@tabler/icons-react'
import { motion } from 'motion/react'

interface Pricing {
    type: string
    mostPopular: boolean
    price: number
    features: string[]
}

const pricings = [
    {
        type: 'Free',
        mostPopular: false,
        price: 0,
        features: [
            'Up to 5 project members',
            'Unlimited tasks and projects',
            '2GB storage',
            'Integrations',
            'Basic support',
        ],
    },
    {
        type: 'Pro',
        mostPopular: true,
        price: 9,
        features: [
            'Up to 50 project members',
            'Unlimited tasks and projects',
            '50GB storage',
            'Integrations',
            'Priority support',
            'Advanced support',
            'Export support',
        ],
    },
    {
        type: 'Business',
        mostPopular: false,
        price: 19,
        features: [
            'Up to 5 project members',
            'Unlimited tasks and projects',
            '200GB storage',
            'Integrations',
            'Dedicated account manager',
            'Custom fields',
            'Advanced analytics',
            'Export capabilities',
            'API access',
            'Advanced security features',
        ],
    },
]

export default function PricingSection() {
    const PricingCardMotion = motion.create(PricingCard)
    return (
        <section className="mx-auto max-w-6xl pt-10 pb-20">
            <SectionHeading
                tag="Boost your productivity"
                title="A more effective way to track progress"
                body="Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer."
            />
            <div className="mt-10 grid place-content-center items-end gap-6 px-10 lg:grid-cols-3 lg:px-0">
                {pricings.map((pricing, key) => (
                    <PricingCardMotion
                        key={key}
                        transition={{
                            duration: 0.5,
                            delay: (pricings.length - 1 - key) / 10,
                        }}
                        initial={{
                            opacity: 0,
                            translateX: -300,
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0,
                        }}
                        pricing={pricing}
                        className={pricing.type === 'Pro' ? 'dark' : ''}
                    />
                ))}
            </div>
        </section>
    )
}

function PricingCard({
    pricing,
    className,
    ...props
}: {
    pricing: Pricing
    className: string
}) {
    return (
        <Card {...props} className={'rounded-3xl px-10 py-11 ' + className}>
            <CardHeader className="font-dm-sans space-y-8 p-0">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-bold text-[#6F6C90] dark:text-[#999999]">
                        {pricing.type}
                    </h1>
                    {pricing.mostPopular && (
                        <Tag className="bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF)] bg-clip-text text-transparent">
                            Most Popular
                        </Tag>
                    )}
                </div>

                <h1 className="p-0">
                    <span className="text-[54px] leading-10 font-bold">
                        ${pricing.price}
                    </span>{' '}
                    <span className="font-bold text-[#6F6C90] dark:text-[#999999]">
                        /monthly
                    </span>
                </h1>

                <Button size={'lg'}>
                    {pricing.price === 0
                        ? 'Get started for free'
                        : 'Sign up now'}
                </Button>
            </CardHeader>
            <CardContent className="px-0">
                <ul className="mt-4 space-y-6">
                    {pricing.features.map((feature, key) => (
                        <li
                            className="font-inter flex items-center gap-5 text-sm"
                            key={key}
                        >
                            <IconCheck className="size-6" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
