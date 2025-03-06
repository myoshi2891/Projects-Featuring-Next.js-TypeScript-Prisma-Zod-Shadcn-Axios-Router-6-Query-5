import heroImg from "./assets/hero.svg";

function Hero() {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Vice drinking vinegar pug, franzen lomo typewriter
						cliche heirloom. Humblebrag irony bitters tumblr, fit +1
						hell of celiac kitsch tumeric actually.
					</p>
				</div>
				<div className="img-container">
					<img
						src={heroImg}
						alt="woman and the browser"
						className="img"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
