import Link from "next/link";

export default function Nav() {
    return (
        <div>
            <Link href="/"><span>Home</span></Link>
            <Link href="/speakers"><span>Speakers</span></Link>
            <Link href="/agenda"><span>Agenda</span></Link>
        </div>
    );
}