<script>
  import Router from 'svelte-spa-router'
  import routes from './routes/routes'
</script>

<svelte:head>
	<title>AI MD</title>
</svelte:head>

<Router {routes} />