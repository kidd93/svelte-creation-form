<script>
	import Tailwindcss from "./Tailwindcss.svelte";
	import Router from "svelte-spa-router";
	import SignUp from "./routes/SignUp.svelte";
	import Login from "./routes/Login.svelte";
	import Profile from "./routes/Profile.svelte";
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

<div
	class="flex flex-col justify-center items-center w-screen h-screen mx-auto bg-gray-800 text-white text-2xl"
>
	{#await $promise.then(() => Promise.reject())}
		Loading..
	{:catch error}
		{#if error}
		<div class='flex text-red-600 bg-gray-300 rounded-lg p-4'>
		{"Error! Incorrect credentials or already a user. Please try again."}
		</div>
		{/if}
		{#if $storeUser}
			<Profile />
		{:else}
			<Router
				routes={{
					"/": SignUp,
					"/Login": Login,
				}}
			/>
		{/if}
	{/await}
</div>
