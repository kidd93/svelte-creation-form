<script>
    import { onMount } from "svelte";
    import { occData, occArrays, stateData, stateArrays } from "../store";
    import { storeBase, storeUser, promise } from "../store";

   let firstName = '';
   let lastName = "";
   let username = "";
   let email = "";
   let password = "";
   let placeholder1 = "Select Occupation";
   let placeholder2 = "Select State";
   let selectedValue1 = '';
   let selectedValue2 = '';

    onMount(async () => {
        fetch("https://frontend-take-home.fetchrewards.com/form")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                occData.set(data);
                stateData.set(data);
            })
            .catch((error) => {
                console.log(error);
                return [];
            });
    });

   function signUp () {
        $promise = $storeBase
            .signUp({
                username,
                email,
                password,
                firstName,
                lastName,
                selectedValue1,
                selectedValue2
            })
            .then((user) => ($storeUser = user));
    } 

</script>

<div class="flex justify-center bg-gray-500 rounded-3xl mt-5">
    <div class="flex justify-center">
        <form
            class="h-[90%] w-full md:w-3/4 m-4"
            on:submit|preventDefault={signUp}
        >
            <div
                class="text-xl cursor-pointer flex flex-col justify-center items-center"
            >
                <h1 class="font-semibold text-3xl text-gray-900 m-2">
                    Sign Up
                </h1>
            </div>
            <div
                class="flex flex-col justify-center items-center mt-10 md:mt-2 space-y-4 md:space-y-4"
            >
                <div
                    class="flex flex-col justify-center items-center mt-10 md:mt-2 space-y-4 md:space-y-4 text-lg"
                >
                    <input
                        bind:value={username}
                        name="username"
                        type="text"
                        placeholder="Username"
                        class=" bg-gray-200 rounded-lg px-5 py-1 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                        required
                    />
                    <input
                        bind:value={firstName}
                        id='firstName'
                        name='firstName'
                        type="text"
                        placeholder="First Name"
                        class=" bg-gray-200 rounded-lg px-5 py-1 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                        required
                    />
                    <input
                        bind:value={lastName}
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        class=" bg-gray-200 rounded-lg px-5 py-1 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                        required
                    />
                </div>
                <div
                    class="flex flex-col justify-center items-center mt-10 md:mt-2 space-y-4 md:space-y-4 text-lg"
                >
                    <input
                        bind:value={email}
                        name="email"
                        type="email"
                        placeholder="Email"
                        class=" bg-gray-200 rounded-lg px-4 py-1 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                        required
                    />
                </div>
                <div
                    class="flex flex-col justify-center items-center mt-10 md:mt-2 space-y-4 md:space-y-4 text-lg"
                >
                    <input
                        bind:value={password}
                        name="password"
                        type="password"
                        placeholder="Password"
                        class=" bg-gray-200 rounded-lg px-5 py-1 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                        required
                    />
                </div>
                <div>
                    <select
                        bind:value={selectedValue1}
                        class="bg-gray-200 rounded-lg px-5 py-1 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] text-lg"
                        required
                    >
                        {#if placeholder1}
                            <option value="" disabled selected
                                >{placeholder1}</option
                            >
                        {/if}
                        {#each $occArrays as occArray}
                            <option> {occArray}</option>
                        {/each}
                    </select>
                </div>
                <div>
                    <select
                        bind:value={selectedValue2}
                        class="bg-gray-200 rounded-lg px-5 py-1 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] text-lg"
                        required
                    >
                        {#if placeholder2}
                            <option value="" disabled selected
                                >{placeholder2}</option
                            >
                        {/if}
                        {#each $stateArrays as stateArray}
                            <option>
                                {stateArray}
                            </option>
                        {/each}
                    </select>
                </div>
            </div>
            <div class="text-center mt-5">
                <button
                    class="uppercase text-black text-lg px-10 rounded-lg font-medium hover:bg-yellow-600 py-2 bg-yellow-500"
                    >Sign Up</button
                >
            </div>
            <div class="text-center my-6 flex flex-col">
                <a
                    href="/#/Login"
                    class="text-sm font-bold text-gray-200 hover:text-purple-800 m-1"
                >
                    Already have an account? Login.</a
                >
            </div>
        </form>
    </div>
</div>