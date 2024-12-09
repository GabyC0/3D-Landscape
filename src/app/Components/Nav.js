import Link from "next/link";

export default function Nav() {
    return (
        <div>
            <Link href="/"><span>Home</span></Link>
            <Link href="/cube"><span>Cube</span></Link>
            <Link href="/spline"><span>Spline</span></Link>
        </div>
    );
}