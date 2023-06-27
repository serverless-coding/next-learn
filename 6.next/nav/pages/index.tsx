import Image from 'next/image'
import Header from '../components/header'


export default function Home() {
  return (
    <main>
      <Header />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Welcome to Mastering Next.js!</h1>
      </div>
    </main>
  )
}
