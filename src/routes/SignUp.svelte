<script>
    import { onMount } from "svelte";
    import { occData, occArrays, stateData, stateArrays } from "../store";

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


</script>