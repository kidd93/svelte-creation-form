<script>
	import Tailwindcss from "./Tailwindcss.svelte";
    import { storeBase, storeUser, promise } from "./store";
	
	const userbase = window.userbase;
	window.userbase = null;
	
	$storeBase = userbase;
	$storeUser = null;
	
	$promise = userbase
	.init({ appId: "2fdb8270-a267-44ff-b305-5d01ffc90505" })
	.then((session) => ($storeUser = session.user));
	
	
</script>
<Tailwindcss />
