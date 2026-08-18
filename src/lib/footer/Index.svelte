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
			<p><b>{platformName}</b></p>
			<p>{platformDescription}</p>
		</div>
		<nav>
			<a href="/terms">{terms}</a>
			<a href="/privacy">{privacy}</a>
		</nav>
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
		border-top: 1px solid var(--color-border);
		padding-inline: var(--global-padding-inline);

		section {
			display: flex;
			align-items: center;
			justify-content: space-between;

			nav {
				display: flex;
				gap: 2rem;
			}

			div {
				p {
					&:first-child {
						margin-bottom: -0.3rem;
					}
				}
			}

			&:first-child {
				padding-block: 0.6rem 1.8rem;
				border-bottom: 1px solid var(--color-border-variant);
			}

			&:last-child {
				padding-block: 0.6rem 1.5rem;
				nav {
					gap: 1rem;
				}
			}
		}
	}
</style>
