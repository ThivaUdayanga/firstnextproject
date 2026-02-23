import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/services'>Services</Link></li>
        <li><Link href='/products'>Products</Link></li>
        <li><Link href='/about'>About us</Link></li>
        <li><Link href='/contact'>Contact Us</Link></li>
      </ul>
    </>
  );
}
