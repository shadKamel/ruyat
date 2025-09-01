import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export default function Tag({
    children,
    className,
    ...props
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div
            {...props}
            className={cn(
                'font-inter rounded-[10px] border border-[#222222]/10 px-3 py-2 text-xs font-medium text-black',
                className
            )}
        >
            {children}
        </div>
    )
}
