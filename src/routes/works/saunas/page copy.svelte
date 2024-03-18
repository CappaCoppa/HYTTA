<script>
    import fadeIn from "../../../lib/actions/fadeIn"
    import {fade} from "svelte/transition"
    const imgArray = [
    {
        webp: "/images/webp/p_koliazas1.webp",
        avif: "/images/avif/p_koliazas1.avif"
    },
    {
        webp: "/images/webp/p_koliazas2.webp",
        avif: "/images/avif/p_koliazas2.avif"
    },
    {
        webp: "/images/webp/p_koliazas3.webp",
        avif: "/images/avif/p_koliazas3.avif"
    },
    {
        webp: "/images/webp/p_koliazas4.webp",
        avif: "/images/avif/p_koliazas4.avif"
    },
    {
        webp: "/images/webp/p_koliazas5.webp",
        avif: "/images/avif/p_koliazas5.avif"
    },
    {
        webp: "/images/webp/p_koliazas6.webp",
        avif: "/images/avif/p_koliazas6.avif"
    }
];
</script>

<svelte:head>
	<title>HYTTA - Pirtys</title>
	<meta name="description" content="Pirtys" />
</svelte:head>

<section class="bg-secondary text-primary">
    <div class="flex flex-col gap-[8px] sm:gap-[16px] md:gap-[32px] lg:gap-[64px] px-[16px] sm:px-[32px] md:px-[64px] lg:px-[128px]  py-[8px] sm:py-[16px] md:py-[32px] lg:py-[64px]">
        {#each imgArray as img, index}
            {#if 0 === index % 2}
                <div transition:fade use:fadeIn class="opacity-0 flex w-full">
                    <picture class="w-fit">
                    <source 
                    type="image/avif"
                    srcset={img.avif}
                    />    
                        <img src={img.webp} loading="lazy" alt="Namu koliazas">
                    </picture>
                    <div class=""></div>
                </div>
            {:else}
            <div transition:fade use:fadeIn class="flex items-end justify-end opacity-0 w-full">
                <picture class="w-fit">
                    <source 
                    type="image/avif"
                    srcset={img.avif}
                    />    
                    <img src={img.webp} loading="lazy" alt="Namu koliazas">
                </picture>
            </div>
            {/if}
        {/each}
    </div>
</section>