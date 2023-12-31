<script>
    import {fade} from "svelte/transition"
    import { onMount } from "svelte";
    import transitionIn from "../lib/actions/transitionIn"
    import fadeIn from "../lib/actions/fadeIn"
    const karkasArray = [
    {
        webp: "/images/webp/Pirtis1.webp",
        avif: "/images/avif/Pirtis1.avif"
    },
    {
        webp: "/images/webp/Pirtis2.webp",
        avif: "/images/avif/Pirtis2.avif"
    },
    {
        webp: "/images/webp/Pirtis3.webp",
        avif: "/images/avif/Pirtis3.avif"
    }
];

const pirtysArray = [
    {
        webp: "/images/webp/karkas1.webp",
        avif: "/images/avif/karkas1.avif"
    },
    {
        webp: "/images/webp/karkas2.webp",
        avif: "/images/avif/karkas2.avif"
    },
    {
        webp: "/images/webp/karkas3.webp",
        avif: "/images/avif/karkas3.avif"
    }
];
    
    let currentIndex = 0;

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % karkasArray.length
    }

    onMount(() => {
        const interval = setInterval(nextImage, 8000)
        return () => clearInterval(interval)
    })
</script>

<div id="works" class="bg-secondary py-[16px] sm:py-[32px] md:py-[64px] lg:py-[128px] gap-[16px] sm:gap[32px] md:gap-[64px] lg:gap-[128px] flex justify-center flex-col h-[100%]">
    <div class=" flex flex-col lg:flex-row justify-center gap-[16px] sm:gap-[32px] md:gap-[64px] xl:gap-[128px] px-[16px] sm:px-[32px] md:px-[64px] lg:px-[104px] xl:px-[128px] relative">
        <div use:fadeIn class="relative overflow-hidden opacity-0 w-[100%]" style="aspect-ratio: 1.52;">
            {#each karkasArray as img, index}
            {#if index === currentIndex}
            <picture>
                <source
                    type="image/avif"
                    srcset={img.avif}
                />
                <img class="absolute top-0 left-0 h-full w-[100%] object-cover" src={img.webp} alt="images" transition:fade={{duration:2000}}/>
            </picture>
            {/if}
            {/each}
        </div>
        <div use:transitionIn class="flex flex-col gap-[4px] sm:gap-[8px] md:gap-[16px] xl:gap-[32px] lg:w-[30%] xl:w-[25%] lg:pb-[16px] xl:pb-[32px] justify-end items-center md:items-start opacity-0 text-center md:text-left">
            <h2 class="text-p sm:text-h6 md:text-h5 tracking-[2px] font-primary uppercase text-primary w-full">
                Moduliniai Namai
            </h2>
            <p class="font-secondary text-a md:text-p md:w-[80%] text-primary tracking-widest">
                <span class="uppercase">hytta</span> esame aistringi dėl medinių karkasinių namų amžino grožio ir ilgaamžiškumo. Mūsų galerija yra įrodymas medžio kaip statybinės medžiagos universalumo ir žavesio šaltinis.
            </p>
            <a href="/works/framed-houses" class="text-a md:text-p group border-2 border-gray-300 px-[16px] py-[8px] text-primary font-secondary uppercase tracking-[2px] flex gap-[8px] justify-center items-center stroke-primary hover:border-primary hover:bg-primary hover:text-secondary transition-all ease-in-out duration-700 hover:stroke-secondary">
                Eikite į galeriją <spna class="group-hover:translate-x-2 transition-transform ease-in-out duration-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12H21"  stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 7L21 12L16 17"  stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                </spna>
            </a>
            <p class="text-a md:text-p text-gray-500"><span class="text-primary">{currentIndex + 1}</span>/{karkasArray.length}</p>
        </div> 
    </div>
     <div class="flex-col-reverse flex lg:flex-row justify-center gap-[16px] sm:gap-[32px] md:gap-[64px] xl:gap-[128px] px-[16px] sm:px-[32px] md:px-[64px] lg:px-[104px] xl:px-[128px] relative">
        <div use:transitionIn class="flex flex-col gap-[4px] sm:gap-[8px] md:gap-[16px] xl:gap-[32px] lg:w-[30%] xl:w-[25%] lg:pb-[16px] xl:pb-[32px] justify-end items-center md:items-start opacity-0 text-center md:text-left">
            <h3 class="text-p sm:text-h6 md:text-h5 tracking-[2px] font-primary uppercase text-primary w-full">
                Pirtys
            </h3>
            <p class="font-secondary text-a md:text-p md:w-[80%] text-primary tracking-widest">
                <span class="uppercase">hytta</span> Per šimtmečius išsiplėtojusi pirties kultūra liudija, kad ši vieta – tai ne vien patogumas ar prabanga, bet gyvenimo būdo dalis, suteikianti gilumą ir prasmingumą mūsų kasdienybei.
            </p>
            <a href="/works/saunas" class="text-a md:text-p group border-2 border-gray-300 px-[16px] py-[8px] text-primary font-secondary uppercase tracking-[2px] flex gap-[8px] justify-center items-center stroke-primary hover:border-primary hover:bg-primary hover:text-secondary transition-all ease-in-out duration-700 hover:stroke-secondary">
                Eikite į galeriją <spna class="group-hover:translate-x-2 transition-transform ease-in-out duration-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12H21"  stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 7L21 12L16 17"  stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                </spna>
            </a>
            <p class="text-a md:text-p text-gray-500"><span class="text-primary">{currentIndex + 1}</span>/{karkasArray.length}</p>
        </div> 
        <div use:fadeIn class="relative overflow-hidden opacity-0 w-[100%]" style="aspect-ratio: 1.52;">
            {#each pirtysArray as img, index}
            {#if index === currentIndex}
            <picture>
                <source
                    type="image/avif"
                    srcset={img.avif}
                />
                <img class="absolute top-0 left-0 h-full w-[100%] object-cover" src={img.webp} alt="images" transition:fade={{duration:2000}}/>
            </picture>
            {/if}
            {/each}
        </div>  
    </div>
</div>

