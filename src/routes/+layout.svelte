<script>
	import "$lib/assets/global.css";
	import favicon from "$lib/assets/favicon.svg";
	import Footer from "$lib/footer/Index.svelte";

	let { children } = $props();
	// /**
	//  * @type {boolean}
	//  */
	// let showLoading = $state(true);

	// setTimeout(() => {
	// 	showLoading = false;
	// }, 3000);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Raffles Platform | This is a platform for raffles</title>
	<meta
		name="description"
		content="End-to-end raffle management system with automated winner selection and payment processing."
	/>
</svelte:head>

<div id="layout">
	{@render children()}

	<Footer />
	<!-- {#if showLoading}
		<div id="loading-container">
			<p>Loading...</p>
		</div>
	{/if} -->
</div>

<style>
	/*#loading-container {
		background-color: red;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		pointer-events: none;
	}*/
</style>
