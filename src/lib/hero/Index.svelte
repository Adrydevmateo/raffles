<section id="hero">
	<p id="eyebrow">LIMITED EDITION</p>
	<h1>Premium Smart Kitchen Suite</h1>
	<p id="description">
		Elevate your culinary experience with our curated collection of
		professional-grade smart appliances and designer kitchen essentials.
	</p>
	<div id="cta-box">
		<a href="/">ENTER NOW</a>
		<p>Tickets from <b>$25</b></p>
	</div>
	<div id="indicators-box">
		<span>&#9866;</span>
	</div>
</section>

<style>
	#hero {
		background-color: green;
		padding-inline: var(--global-padding-inline);
		min-height: 60dvh;
		position: relative;
		display: grid;
		place-content: center start;

		h1,
		#eyebrow {
			margin-top: 0;
		}

		#cta-box {
			background-color: yellow;
			display: flex;
			align-items: center;
			gap: 1rem;

			a {
				outline: 1px solid red;
				padding: 1rem 3rem;
			}
		}

		#indicators-box {
			position: absolute;
			bottom: 1rem;
			place-self: center;
		}
	}

	@media (min-width: 700px) {
		#hero {
			#indicators-box {
				bottom: 3rem;
			}
		}
	}
</style>
