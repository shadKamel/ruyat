import { ReactNode } from 'react'

export default function Banner({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex justify-center items-center gap-x-6 bg-black px-6 py-2.5 ">
            {children}
        </div>
    )
}
