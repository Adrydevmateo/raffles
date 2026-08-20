<section id="hero">
	<div id="content">
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
	</div>
	<div id="indicators-box">
		<span>&#9866;</span>
	</div>
</section>

<style>
	#hero {
		background-color: green;
		padding-inline: var(--global-padding-inline);
		padding-top: 3rem;
		padding-bottom: 1.9rem;
		display: grid;
		gap: 3rem;

		h1,
		#eyebrow {
			margin-top: 0;
		}

		#eyebrow {
			outline: 1px solid red;
			width: fit-content;
			padding: .3rem .6rem;
			border-radius: 1rem;
		}

		#cta-box {
			background-color: yellow;
			display: flex;
			align-items: center;
			gap: 1rem;

			a {
				outline: 1px solid red;
				padding: 1rem 1.9rem;
			}
		}

		#indicators-box {
			background-color: yellow;
			display: grid;
			margin-inline: auto;
		}
	}


	@media (min-width: 700px) {
		#hero {
			padding-bottom: 3rem;
			gap: 3.9rem;

			#cta-box {
				a {
					padding-inline: 3rem;
				}
			}
		}
	}
</style>
