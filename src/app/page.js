import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <h1>Hello</h1>
      <div style={{display:"flex",gap:"10px"}}>
         <Link href="/">Home</Link>
        <Link href="/business">Business</Link>
        <Link href="/business/aboutbusiness">About Business</Link>
        <Link href="/investor">Investor</Link>
        <Link href="/investor/aboutInvestor">About Investor</Link>
      </div>
     
    </div>
  );
}
