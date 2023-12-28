<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import {openMenu} from "./store.js"
    import MobileMenuButtons from './MobileMenuButtons.svelte';
    import MobileHeader from './MobileHeader.svelte';



    let showHeader = false;
    let windowWidth;
    $: isHomePage = $page.url.pathname === "/";
    $: showHeaderOnSmallScreens = isHomePage && windowWidth < 770;

    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Check scroll position with debouncing
    const checkScrollPosition = debounce(() => {
        const triggerPoint = window.innerHeight * 0.9;
        showHeader = window.scrollY > triggerPoint;
    }, 100); // Debounce delay in milliseconds

    onMount(() => {
        window.addEventListener('scroll', checkScrollPosition);
        window.addEventListener('resize', updateWindowSize);
        checkScrollPosition(); // Check immediately on mount
        updateWindowSize(); // Set initial window size

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
            window.removeEventListener('resize', updateWindowSize);
        };
    });

    function updateWindowSize() {
        windowWidth = window.innerWidth;
    }

</script>

{#if !isHomePage || showHeader || showHeaderOnSmallScreens}
    <header transition:fade={{duration:500}} class={`${isHomePage && showHeaderOnSmallScreens? "sticky top-0" : isHomePage ? "fixed" : "sticky top-0"} transition-all ease-in-out w-full ${ $openMenu ? "bg-primary":"bg-secondary"} duration-[350ms] z-50`}>
        <div class={`z-50 px-[16px] sm:px-[32px] md:px-[64px] lg:px-[128px] flex justify-between items-center py-[8px] shadow-2xl border-b-[4px] ${ $openMenu ? "border-primary" : "border-b-gray-300"} duration-[350ms]`}>
            <div>
                <a href="/"  class={`z-50 uppercase cursor-pointer font-primary text-h6 sm:text-h5 md:text-h4 lg:text-h3 transition-all ease-in-out ${ $openMenu ?"text-secondary": "text-primary"} tracking-[4px] duration-[350ms]`}>hytta</a>
            </div>
            <ul class="hidden md:flex gap-8 uppercase font-primary tracking-[2px] opacity-0 animate-fadeIn text-primary p-[16px] py-[16px]">
                <li>
                    <a  href="/specifications" >
                        Specifikacijos
                    </a>
                </li>
                <li>
                    <a href="/#works" >
                        Darbai
                    </a>
                </li>
                <li>
                    <a href="/#contacts" >
                        Kontaktai
                    </a>
                </li>
                <li>
                    <a href="/#contact" >
                        Susisiekti
                    </a>
                </li>
            </ul>
            <MobileMenuButtons/>
        </div>
        {#if $openMenu}
            <MobileHeader/>
        {/if}
    </header>
{/if}
