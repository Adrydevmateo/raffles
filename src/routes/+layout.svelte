<script>
	import '$lib/assets/global.css'
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/footer/Index.svelte'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Raffles Platform | This is a platform for raffles</title>
	<meta name="description" content="End-to-end raffle management system with automated winner selection and payment processing." />
</svelte:head>

{@render children()}

<Footer />
