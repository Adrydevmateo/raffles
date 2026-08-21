<script>
	let carouselCounter = $state(0);
	let carouselAutoMode = $state(false);
	const carouselContent = [
		{
			to: "/",
			img: "/images/naomi.jpg",
			title: "Premium Smart Kitchen Suite",
			description:
				"Elevate your culinary experience with our curated collection of professional-grade smart appliances and designer kitchen essentials.",
			eyebrowText: "LIMITED EDITION",
		},
		{
			to: "/",
			img: "/images/lotus.jpg",
			title: "Artisan Chef Collection",
			description:
				"Handcrafted precision meets culinary excellence with our bespoke range of professional-grade cookware and artisan kitchen tools.",
			eyebrowText: "HANDFORGED SERIES",
		},
		{
			to: "/",
			img: "/images/uddle.jpg",
			title: "Minimalist Smart Hub",
			description:
				"Seamlessly integrated AI-powered appliances with invisible technology and refined Scandinavian design for the modern home.",
			eyebrowText: "INVISIBLE TECH",
		},
	];

	setInterval(() => {
		if (!carouselAutoMode) return;
		const plusOne = carouselCounter + 1;
		if (plusOne === carouselContent.length) carouselCounter = 0;
		else carouselCounter += 1;
	}, 3000);
</script>

<section
	id="hero"
	style={`background-image: url('${carouselContent[carouselCounter].img}');`}
>
	<div id="content">
		<p id="eyebrow">
			{carouselContent[carouselCounter].eyebrowText}
		</p>
		<h1>{carouselContent[carouselCounter].title}</h1>
		<p id="description">
			{carouselContent[carouselCounter].description}
		</p>
		<div id="cta-box">
			<a href="/">ENTER NOW</a>
			<p>Tickets from <b>$25</b></p>
		</div>
	</div>
	<div id="indicators-box">
		{#each carouselContent as _item}
			<button type="button">&#9866;</button>
		{/each}
	</div>
</section>

<style>
	#hero {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		padding-inline: var(--global-padding-inline);
		min-height: 60dvh;
		display: grid;
		grid-template-rows: 1fr auto;

		#content {
			display: grid;
			place-content: center start;
		}

		h1,
		#eyebrow {
			margin-top: 0;
		}

		#eyebrow {
			outline: 1px solid red;
			width: fit-content;
			padding: 0.3rem 0.6rem;
			border-radius: 1rem;
		}

		#cta-box {
			display: flex;
			align-items: center;
			gap: 1rem;

			a {
				outline: 1px solid red;
				padding: 1rem 1.9rem;
			}
		}

		#indicators-box {
			height: 3rem;
			display: flex;
			align-items: start;
			justify-content: center;
			gap: 1rem;
		}
	}
</style>
