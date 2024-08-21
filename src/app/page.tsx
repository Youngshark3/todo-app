import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex  flex-col items-center min-h-32 my-4">
    <ul className="list-none">
      <Link href="/todos"> Youngshark Todo App</Link>
    </ul>
    
  </main>
  );
}
