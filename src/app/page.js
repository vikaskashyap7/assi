import Image from "next/image";
import Link from "next/link";
import Dasboard from "@/components/Dasboard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="wrapper">
       <Navbar />
       <Dasboard/>
    </div>
  );
}
