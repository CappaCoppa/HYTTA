<script>
    import fadeIn from "../../../lib/actions/fadeIn"
    import { fade } from "svelte/transition";
    const imgArray = [{
        webp: "/images/webp/k_koliazas1.webp",
        avif: "/images/avif/k_koliazas1.avif"},
        {wepb:"/images/webp/k_koliazas2.webp", 
        avif:"/images/avif/k_koliazas2.avif"},
        {wepb:"/images/webp/k_koliazas3.webp", 
        avif:"/images/avif/k_koliazas3.avif"},
        {wepb:"/images/webp/k_koliazas4.webp", 
        avif:"/images/avif/k_koliazas4.avif"},
        {wepb:"/images/webp/k_koliazas5.webp", 
        avif:"/images/avif/k_koliazas5.avif"},]

        const imgArray2 = [
        {wepb:"/images/webp/k_koliazas9.webp", 
        avif:"/images/avif/k_koliazas9.avif"},
        {wepb:"/images/webp/k_koliazas8.webp", 
        avif:"/images/avif/k_koliazas8.avif"},]

        const imgArray3 = [
        {webp: "/images/webp/k_koliazas6.webp",
        avif: "/images/avif/k_koliazas6.avif"},
        {wepb:"/images/webp/k_koliazas7.webp", 
        avif:"/images/avif/k_koliazas7.avif"},
        {wepb:"/images/webp/k_koliazas10.webp", 
        avif:"/images/avif/k_koliazas10.avif"},]

        const imgArray4 = [
        {webp: "/images/webp/k_koliazas11.webp",
        avif: "/images/avif/k_koliazas11.avif"},
        {wepb:"/images/webp/k_koliazas12.webp", 
        avif:"/images/avif/k_koliazas12.avif"},
        {wepb:"/images/webp/k_koliazas13.webp", 
        avif:"/images/avif/k_koliazas13.avif"},]

</script>

<svelte:head>
	<title>HYTTA - Moduliniai Namai</title>
	<meta name="description" content="Moduliniai Namai" />
</svelte:head>

<section class="bg-secondary text-primary w-full px-[16px] sm:px-[32px] md:px-[64px] lg:px-[128px]  py-[8px] sm:py-[16px] md:py-[32px] lg:py-[64px]">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4px] sm:gap-[6px] md:gap-[16px] lg:gap-[32px] border-b-[4px] border-[#e5e7eb] pb-[8px] sm:pb-[16px] md:pb-[32px] lg:pb-[64px]">
        {#each imgArray as img}
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
        {/each}
        <div transition:fade use:fadeIn class="opacity-0 flex flex-col w-full items-center justify-center">
            <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center">Dviejų dalių modulinis namelis. Išorės matmenys 6.15×6,15 iki kraigo 3,80.</p>
        </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-[4px] sm:gap-[6px] md:gap-[16px] lg:gap-[32px] border-b-[4px] border-[#e5e7eb]  pb-[8px] sm:pb-[16px] md:pb-[32px] lg:pb-[64px]  pt-[8px] sm:pt-[16px] md:pt-[32px] lg:pt-[64px]">
        {#each imgArray2 as img, index}
            {#if index === 0}
                <div transition:fade use:fadeIn class="opacity-0 flex w-full col-span-4">
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
                <div transition:fade use:fadeIn class="backgroundimg">
                    
                </div>
            {/if}
        {/each}
        <div class="col-span-5 grid grid-cols-1 lg:grid-cols-4 gap-[4px] sm:gap-[6px] md:gap-[16px] lg:gap-[32px]">
        <div transition:fade use:fadeIn class="opacity-0 flex flex-col w-full items-center justify-center">
        <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center">Dviejų dalių modulinis namelis su pastoge, tiesios lubos, aukštis iki lubų 2,75 iki kraigo 3,90.</p>
        </div>
        {#each imgArray3 as img}
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
        {/each}
        </div>
        </div>
        <div class="col-span-5 grid grid-cols-1 lg:grid-cols-4 gap-[4px] sm:gap-[6px] md:gap-[16px] lg:gap-[32px] pt-[8px] sm:pt-[16px] md:pt-[32px] lg:pt-[64px]">
        {#each imgArray4 as img}
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
        {/each}
        <div transition:fade use:fadeIn class="opacity-0 flex flex-col w-full items-center justify-center">
        <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center">Gyvenamasis namelis su pastoge -  3,2 × 8,5 m.</p>
        </div>
        </div>
</section>

<style>
    .backgroundimg {
        background-image: url("/images/webp/k_koliazas8.webp");
        background-repeat: no-repeat, repeat;
        background-position: center;
        background-size: cover;
    }
</style>