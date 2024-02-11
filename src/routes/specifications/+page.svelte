<script>    
    import transitionIn from "../../lib/actions/transitionIn";
    import fadeIn from "../../lib/actions/fadeIn";
    import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>HYTTA - Specifikacijos</title>
	<meta name="description" content="Specifikacijos" />
</svelte:head>

<section>
    <div id="specifications" class="bg-white p-[16px] sm:p-[32px] md:p-[64px] lg:p-[128px] ">
            <h1 use:fadeIn class="opacity-0 text-h5 lg:text-h3 text-center md:text-center
             uppercase font-primary font-semibold tracking-[2px] text-primary pb-[16px] sm:pb-[32px] md:pb-[64px] lg:pb-[128px]">
                Stogo konstrukcija
            </h1>
            <div class="flex flex-col-reverse lg:flex-row justify-between items-center pb-[16px] sm:pb-[32px] md:pb-[64px] lg:pb-[128px]">
                <ul use:fadeIn class="opacity-0 text-a sm:text-p md:text-h6 lg:text-h5 font-secondary lg:list-disc w-full lg:w-[50%] text-primary text-left lg:text-start flex flex-col gap-[4px] md:gap-[16px] pb-[20px] md:pb-[0px]">
                    <li>Medinės dailylentės 12mm. &#40;arba gipso plokštės 12mm pagal pasirinkimą&#41;.</li>
                    <li>Mediniai tašeliai 2,5×4,5.</li>
                    <li>Garo plėvelė.</li>
                    <li>Stogo konstrukcija 19,5 - 29,5 4,5.</li>
                    <li>Apšiltinimas mineraline vata 20 – 30cm.</li>
                    <li>Difuzinė plėvelė.</li>
                    <li>Ventiliaciniai tašeliai 2,5×5.</li>
                    <li>Grebėstai 2,5×10.</li>
                    <li>Trapecine skarda, arba pasirinkta kita stogo danga.</li>
                </ul>
                <picture use:fadeIn class="opacity-0 w-[100%] max-w-[700px] min-w-[0px] py-[16px]">
                <source
                        type="image/avif"
                        srcset="/images/avif/roof.avif"
                    />
                    <img use:fadeIn class="opacity-0" src=/images/webp/roof.webp alt="images" transition:fade/>
                </picture>
            </div>

            <h2 use:fadeIn class="opacity-0 text-h5 lg:text-h3 text-center md:text-center
             uppercase font-primary font-semibold tracking-[2px] text-primary pb-[16px] sm:pb-[32px] md:pb-[64px] lg:pb-[128px]">
                Sienų Konstrukcija
            </h2>

            <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-[16px] pb-[16px] sm:pb-[32px] md:pb-[64px] lg:pb-[128px]">
                <ul use:fadeIn class="opacity-0 text-a sm:text-p md:text-h6 lg:text-h5 font-secondary lg:list-disc list-inside w-full lg:w-[50%] text-primary text-left md:text-center lg:text-left flex flex-col gap-[4px] md:gap-[16px] pb-[20px] md:pb-[0px]">
                    <li>Medinės dailylentės 12mm &#40;arba gipso plokštės 12mm pagal pasirinkimą&#41;.</li>
                    <li>Konstrukciniai tašeliai 4,5×4,5, Apšiltinimas mineraline vata 5 cm.</li>
                    <li>Garo plėvelė.</li>
                    <li>Sienų konstrukcija 14,5×19,5 4,5, Apšiltinimas mineraline vata 15-20cm.</li>
                    <li>Difuzinė plėvelė.</li>
                    <li>Ventiliaciniai tašeliai.</li>
                    <li>Medinės dailylentės &#40;arba pasirinkta kita danga&#41;.</li>
                </ul>
                <picture use:fadeIn class="opacity-0 w-[100%] max-w-[700px] min-w-[0px] h-full py-[16px]">
                <source
                        type="image/avif"
                        srcset="/images/avif/wall.avif"
                    />
                    <img src="/images/webp/wall.webp" alt="images" transition:fade/>
                </picture>
            </div>

            <h2 use:fadeIn class="opacity-0 text-h5 lg:text-h3 text-center md:text-center
             uppercase font-primary font-semibold tracking-[2px] text-primary pb-[16px] sm:pb-[32px] md:pb-[64px] lg:pb-[128px]">
                grindų konstrukcija
            </h2>

            <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-[16px]">
                
                <ul use:fadeIn class="opacity-0 text-a sm:text-p md:text-h6 lg:text-h5 font-secondary lg:list-disc w-full lg:w-[50%] text-primary text-left md:text-center lg:text-left flex flex-col gap-[4px] pb-[20px] md:pb-[0px]">
                    <li>Medinės grindys 27mm &#40;arba medienos drožlių plokštė 22mm + pasirinkta grindų danga&#41;.</li>
                    <li>Grindų konstrukcija 19,5×4,5 – 24,5. Apšiltinimas mineraline vata 20-30cm.</li>
                    <li>OSB plokštė 15 mm, nutepta mastika nuo drėgmės.</li>
                </ul>
                <picture use:fadeIn class="opacity-0 w-[100%] max-w-[600px] min-w-[0px] h-full">
                <source
                        type="image/avif"
                        srcset="/images/avif/floor.avif"
                    />
                    <img src="/images/webp/floor.webp" alt="images" transition:fade/>
                </picture>
            </div>
            
        </div>
</section>