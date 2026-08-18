<script>
	const {
		platformName = "LuxeRaffle",
		platformDescription = "Premium Prize Competitions",
		terms = "Terms of Service",
		privacy = "Privacy Policy",
	} = $props();

	const contacts = [
		{
			to: "",
			icon: "planet",
		},
		{
			to: "",
			icon: "instagram",
		},
		{
			to: "",
			icon: "email",
		},
	];
</script>

<footer>
	<section>
		<div>
			<p>{platformName}</p>
			<p>{platformDescription}</p>
		</div>
		<div>
			<a href="/terms">{terms}</a>
			<a href="/privacy">{privacy}</a>
		</div>
	</section>
	<section>
		<p>&copy; 2026 {platformName}. All rights reserved.</p>
		<nav>
			{#each contacts as contact}
				<a href={contact.to}>{contact.icon}</a>
			{/each}
		</nav>
	</section>
</footer>

<style>
	footer {
		background-color: red;
	}
</style>
