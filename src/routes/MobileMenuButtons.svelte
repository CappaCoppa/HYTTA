<script>
    import {openMenu} from "./store.js"
    import { fade } from "svelte/transition";
    const mobileMenu = () => openMenu.update(value => !value)
</script>

<div class="flex justify-between gap-[32px] md:hidden text-a uppercase font-primary ">
    <div class="relative flex items-center justify-center">
        {#if !$openMenu}
            <p transition:fade={{duration:250}}  class={`absolute cursor-pointer text-a text-primary transition-all ease-in-out 1s ${$openMenu ? "hidden": "visible"}`}>Meniu</p>
        {:else}
            <p transition:fade={{duration:250}} class={`absolute cursor-pointer text-a text-secondary transition-all ease-in-out 1s ${$openMenu ? "visible": "hidden"}`}>Uzdaryti</p>
        {/if}
    </div>
    <div class="relative w-[32px] h-[32px] ">
        {#if !$openMenu}
            <button transition:fade={{duration:250}} on:click={mobileMenu} class={`absolute w-[32px] h-[32px] ${$openMenu ? "hidden": "visible"}`} aria-label="Menu">
                <svg aria-roledescription="button" xmlns="http://www.w3.org/2000/svg" class="stroke-primary cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 22.6667L25.3333 22.6667"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.66666 16H25.3333"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.66666 9.33334H25.3333"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        {:else}
            <button transition:fade={{duration:250}} on:click={mobileMenu} class={`absolute w-[32px] h-[32px] ${$openMenu ? "visible": "hidden"}`} aria-label="Close">                   
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 7L6.99997 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        {/if}
    </div>
</div>