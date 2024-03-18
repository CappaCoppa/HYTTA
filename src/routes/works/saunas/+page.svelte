<script>
    import fadeIn from "../../../lib/actions/fadeIn"
    import {fade} from "svelte/transition"
 const imgArray = [
        {wepb:"/images/webp/pirtis_(5).webp", 
        avif:"/images/avif/pirtis_(5).avif"},
        {webp: "/images/webp/pirtis_(1).webp",
        avif: "/images/avif/pirtis_(1).avif"},
        {wepb:"/images/webp/pirtis_(2).webp", 
        avif:"/images/avif/pirtis_(2).avif"},
        {wepb:"/images/webp/pirtis_(3).webp", 
        avif:"/images/avif/pirtis_(3).avif"},
        {wepb:"/images/webp/pirtis_(4).webp", 
        avif:"/images/avif/pirtis_(4).avif"},
        ]

        const imgArray2 = [
        {wepb:"/images/webp/pirtis_2_(7).webp", 
        avif:"/images/avif/pirtis_2_(7).avif"},
        {wepb:"/images/webp/pirtis_2_(1).webp", 
        avif:"/images/avif/pirtis_2_(1).avif"},
        {wepb:"/images/webp/pirtis_2_(2).webp", 
        avif:"/images/avif/pirtis_2_(2).avif"},
        {wepb:"/images/webp/pirtis_2_(3).webp", 
        avif:"/images/avif/pirtis_2_(3).avif"},
        {wepb:"/images/webp/pirtis_2_(4).webp", 
        avif:"/images/avif/pirtis_2_(4).avif"},
        {wepb:"/images/webp/pirtis_2_(5).webp", 
        avif:"/images/avif/pirtis_2_(5).avif"},
        {wepb:"/images/webp/pirtis_2_(6).webp", 
        avif:"/images/avif/pirtis_2_(6).avif"},
        ]

        const imgArray3 = [
        {webp: "/images/webp/pirtis_3_(1).webp",
        avif: "/images/avif/pirtis_3_(1).avif"},
        {wepb:"/images/webp/pirtis_3_(2).webp", 
        avif:"/images/avif/pirtis_3_(2).avif"},
        {wepb:"/images/webp/pirtis_3_(3).webp", 
        avif:"/images/avif/pirtis_3_(3).avif"},
        {wepb:"/images/webp/pirtis_3_(4).webp",
        avif:"/images/avif/pirtis_3_(4).avif"}]
</script>

<svelte:head>
	<title>HYTTA - Pirtys</title>
	<meta name="description" content="Pirtys" />
</svelte:head>

<section class="bg-secondary text-primary w-full px-[16px] sm:px-[32px] md:px-[64px] lg:px-[128px]  py-[8px] sm:py-[16px] md:py-[32px] lg:py-[64px]">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[8px] md:gap-[16px] lg:gap-[32px] md:border-b-[4px] border-[#e5e7eb] pb-[16px] md:pb-[32px] lg:pb-[64px]">
        <div transition:fade use:fadeIn class="opacity-0 flex flex-col w-full items-center justify-center py-[16px] md:hidden">
            <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center font-secondary">Pirtis 2.5×5 m.</p>
        </div>
        <div transition:fade use:fadeIn class="opacity-0 hidden flex-col w-full items-center justify-center py-[16px] md:flex">
            <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center font-secondary mr-[128px]">Pirtis 2.5×5 m.</p>
        </div>
        {#each imgArray as img}
                <div transition:fade use:fadeIn class="opacity-0 flex w-full">
                    <picture class="w-fit">
                    <source 
                    type="image/avif"
                    srcset={img.avif}
                    />    
                        <img src={img.webp} loading="lazy" alt="Namu olikazas">
                    </picture>
                    <div class=""></div>
                </div>
        {/each}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[8px] md:gap-[16px] lg:gap-[32px] md:border-b-[4px] border-[#e5e7eb]  pb-[8px] sm:pb-[16px] md:pb-[32px] lg:pb-[64px]  pt-[8px] sm:pt-[16px] md:pt-[32px] lg:pt-[64px]">
        <div transition:fade use:fadeIn class="opacity-0 flex flex-col w-full items-center justify-center py-[16px] md:hidden">
            <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center font-secondary">Pirtis 3×6 su dvišlaičiu stogu.</p>
        </div>
        {#each imgArray2 as img, index}
            {#if index === 0}
                <div transition:fade use:fadeIn class="backgroundimg hidden md:col-span-1 md:block">
                    
                </div>
                <div transition:fade use:fadeIn class="md:hidden">
                    <picture>
                    <source 
                    type="image/avif"
                    srcset={img.avif}
                    />    
                        <img src={img.webp} loading="lazy" alt="Namu koliazas">
                    </picture>
                </div>
            {:else if index ===3}
                <div transition:fade use:fadeIn>
                    <picture>
                    <source 
                    type="image/avif"
                    srcset={img.avif}
                    />    
                        <img src={img.webp} loading="lazy" alt="Namu koliazas">
                    </picture>
                </div>
                <div transition:fade use:fadeIn class="opacity-0 hidden flex-col w-full items-center justify-center py-[16px] md:flex">
            <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center font-secondary mr-[98px]">Pirtis 3×6 su dvišlaičiu stogu.</p>
        </div>
        {:else if index === 6}
            <div transition:fade use:fadeIn class="backgroundimg-2 hidden md:col-span-1 md:block">
                </div>
                <div transition:fade use:fadeIn class="md:hidden">
                    <picture>
                    <source 
                    type="image/avif"
                    srcset={img.avif}
                    />    
                        <img src={img.webp} loading="lazy" alt="Namu koliazas">
                    </picture>
                </div>
        {:else}
            <div transition:fade use:fadeIn>
                    <picture class="col-span-1">
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
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-[8px] md:gap-[16px] lg:gap-[32px] pb-[8px] sm:pb-[16px] md:pb-[32px] lg:pb-[64px]  pt-[8px] sm:pt-[16px] md:pt-[32px] lg:pt-[64px]">
        <div transition:fade use:fadeIn class="opacity-0  md:hidden flex-col w-full items-center justify-center">
        <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center font-secondary">Pirtis 6×3,4 m.</p>
        </div>
        <div transition:fade use:fadeIn class="opacity-0 hidden flex-col w-full items-end justify-center md:flex">
        <p class="text-p sm:text-h6 md:text-h5 tracking-[2px] text-primary w-full text-center font-secondary pr-[128px]">Pirtis 6×3,4 m.</p>
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
</section>

<style>
    .backgroundimg {
        background-image: url("/images/webp/pirtis_2_(7).webp");
        background-repeat: no-repeat, repeat;
        background-position: center;
        background-size: cover;
    }
    .backgroundimg-2 {
        background-image: url("/images/webp/pirtis_2_(6).webp");
        background-repeat: no-repeat, repeat;
        background-position: center;
        background-size: cover;
    }
</style>