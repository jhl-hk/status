<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
  <title>JHL-HK | Status</title>
  <meta name="description" content="JHL-HK's Status">
</svelte:head>

<div class="min-h-screen">
	{@render children()}
</div>
