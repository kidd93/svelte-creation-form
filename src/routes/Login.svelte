<script>
    import { storeBase, storeUser, promise } from "../store";

    let firstName = "";
    let lastName = "";
    let username = "";
    let email = "";
    let password = "";
    let selectedValue1 = '';
    let selectedValue2 = '';

    export function signIn() {
        $promise = $storeBase
            .signIn({
                firstName,
                lastName,
                username,
                email,
                password,
                selectedValue1,
                selectedValue2,
            })
            .then((user) => ($storeUser = user));
    }
</script>

<div class="flex justify-center bg-gray-500 rounded-3xl mt-5">
    <div class="flex justify-center">
        <form
            class="h-[90%] w-full md:w-3/4 m-4"
            on:submit|preventDefault={signIn}
        >
            <div
                class="text-xl cursor-pointer flex flex-col justify-center items-center md:mt-0"
            >
                <h1 class="font-semibold text-3xl text-gray-900 m-2">Login</h1>
            </div>
            <div
                class="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8 text-lg"
            >
                <div class="">
                    <input
                        bind:value={username}
                        name="username"
                        type="text"
                        placeholder="Username"
                        class=" bg-gray-100 rounded-lg px-4 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                        required
                    />
                </div>
                <div class="">
                    <input
                        bind:value={password}
                        name="password"
                        type="password"
                        placeholder="Password"
                        class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                        required
                    />
                </div>
            </div>
            <div class="flex justify-center items-center mt-7">
                <button
                    class="uppercase text-black text-lg px-10 rounded-lg font-medium hover:bg-yellow-600 py-2 bg-yellow-500"
                >
                    Login
                </button>
            </div>
            <div class="text-center my-6 flex flex-col">
                <a
                    href="/"
                    class="text-sm font-bold text-gray-200 hover:text-purple-800 m-1"
                >
                    Don't have an account? Sign up.</a
                >
            </div>
        </form>
    </div>
</div>