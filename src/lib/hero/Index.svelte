<script>

</script>

<section id="hero" style={`background-image: url('/images/naomi.jpg');`}>
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
			padding: .3rem .6rem;
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
			display: grid;
			place-content: start center;
		}
	}
</style>
