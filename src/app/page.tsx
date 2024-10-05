import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>hello world</p>
      <ul>
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
        </ul>
    </div>
  );
}
