import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

/* 自定义(当站点有多个layout时需要这么做)
- NextPageWithLayout 是一个自定义类型，可以将它看作是一种扩展了 NextPage 类型的类型别名。
- <P = {}, IP = P> 是一个通用参数，用于定义 NextPageWithLayout 类型的 Props 和 InitialProps，这些参数都是可选的。Props是父组件传递给子组件的属性，InitialProps是服务端渲染使用的一些数据。
- NextPage<P, IP> 是 Next.js 包中的一个类型，表示一个页面组件的类型。
- & 运算符用于将另外一个对象的类型与 NextPage<P, IP> 类型合并到一个类型中。
- { getLayout?: (page: ReactElement) => ReactNode } 是我们自定义的对象类型，它包含了一个可选的函数 getLayout，它接受 page 的参数为 ReactElement 类型，返回值为 ReactNode 类型（可以是任何 React 组件，如 <div> 或者 <Layout>）。
- 最终，NextPageWithLayout 类型定义了一个页面组件类型，具有与 NextPage 类似的 Props 和 InitialProps，同时还可以定义一个可选的 getLayout 函数，用于渲染布局组件。

总体来说，这个自定义类型是 Next.js 程序中使用 TypeScript 实现布局的一个例子。
getLayout 函数可以选择性地标记一个页面组件，用于在渲染前先渲染布局组件，这样可以使得页面组件渲染的代码更少，并增强了应用程序的可维护性。
*/
export type NextPageWithLayout<P = {}, IP = P> = NextPage<PageTransitionEvent, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
