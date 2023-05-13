<script>
    import { storeBase, storeUser, promise } from "../store";

    function signOut() {
        $promise = $storeBase.signOut().then(() => ($storeUser = null));
    }
</script>

<h1 class="uppercase flex justify-center items-center text-4xl p-4">
    Welcome to your profile {$storeUser.username}!
</h1>

<form
    method="POST"
    action="https://getform.io/f/1d468805-f4e2-4a6b-a77e-6f781c2aa606"
    class="flex justify-center items-left text-gray-300 bg-gray-600 h-auto rounded-xl"
>
    <div class="flex items-right max-w-2xl m-4">
        <div class="flex flex-col items-right md:flex-row ">
            <div
                class="text-gray-800 items-center flex flex-col md:w-full space-y-3"
            >
                <div
                    class="flex justify-center items-center text-xl font-medium text-gray-300 mb-7"
                >
                    Please leave any comments about this user creation form that
                    you may have. I just recently taught myself some Svelte and
                    I would appreciate any constructive feedback.
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    class="border border-gray-400 rounded px-2 py-1 w-48 md:w-96 text-lg"
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Enter Email address"
                    class="border border-gray-400 rounded py-1 px-2 w-48 md:w-96 text-lg"
                />
                <textarea
                    name="message"
                    placeholder="Enter your message"
                    type="text"
                    class="border border-gray-400 rounded py-1 px-2 w-48 md:w-96 h-20 md:h-40 text-lg"
                />
                <div class="">
                    <button
                        class="uppercase text-black text-lg px-4 rounded font-medium hover:bg-yellow-600 py-1 bg-yellow-500"
                        >Send Message</button
                    >
                    <button
                        class="uppercase text-black text-lg px-10 rounded font-medium hover:bg-yellow-600 py-1 bg-yellow-500"
                        on:click={signOut}>Log Out</button
                    >
                </div>
            </div>
        </div>
    </div>
</form>