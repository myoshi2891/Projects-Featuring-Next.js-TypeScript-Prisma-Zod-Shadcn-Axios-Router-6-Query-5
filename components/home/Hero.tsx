import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
			<div className="">
				<h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
					We are changing the way people shop.
				</h1>
				<p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
					From the crowded streets of New York to the quaint cottages
					of Vienna, there&apos;s a place where people can find what
					they&apos;re looking for. Our online store is here to help
					you find it.
				</p>
				<Button asChild size="lg" className="mt-10">
					<Link href="/products">Our Products</Link>
				</Button>
			</div>
			<HeroCarousel />
		</section>
	);
}

export default Hero;
