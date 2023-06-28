import { ReactElement } from 'react'

// 多个layout
// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#per-page-layouts

function NestedLayout({ children }: { children: ReactElement }) {
    return (
        <div>
            {children}
        </div>
    )
}

export default NestedLayout;