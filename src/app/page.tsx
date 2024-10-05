import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen flex justify-center items-center flex-col gap-4'>
      <h1 className=' text-2xl font-medium'>CheetSheet NextJs</h1>
      <ul className='flex gap-3 '>
          <Link href="/approuter">
            <li>
              App Router
            </li>
          </Link>
          <Link href="/login">
            <li>
              Login
            </li>
          </Link>
          <Link href="/signin">
            <li>
              SignIn
            </li>
          </Link>
          <Link href="/dynamicrouter">
            <li>
              Dynamic Router
            </li>
          </Link>
          <Link href="/linknav">
            <li>
              Link & Navigation
            </li>
          </Link>
        </ul>
    </main>
  );
}
