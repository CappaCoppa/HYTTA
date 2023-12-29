<script>
    import Plank from "/images/webp/plank.webp"
    import AvifPank from "/images/avif/plank.avif"
    import Wall from "/images/webp/wall.webp"
    import AvifWall from "/images/avif/wall.avif"
    import House from "/images/webp/house.webp"
    import AvifHouse from "/images/avif/house.avif"
    import transitionIn from "../../lib/actions/transitionIn";
    import fadeIn from "../../lib/actions/fadeIn";
    import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>Specifikacijos</title>
	<meta name="description" content="Specifikacijos" />
</svelte:head>

<section>
    <div id="specifications" class="bg-white p-[16px] sm:p-[32px] md:p-[64px] lg:p-[128px] ">
            <h3 use:fadeIn class="opacity-0 text-h4 lg:text-h3 text-center md:text-left uppercase font-primary font-semibold tracking-[2px] text-primary">
                Specifikacijos
            </h3>
            <div class="flex flex-col lg:flex-row justify-between items-center gap-[16px]">
                <picture use:fadeIn class="opacity-0">
                <source
                        type="image/avif"
                        srcset={AvifPank}
                    />
                    <img use:fadeIn class="opacity-0" src={Plank} alt="images" transition:fade/>
                </picture>
                <ul use:transitionIn class="opacity-0 text-a sm:text-p md:text-h6 lg:text-h5 font-secondary lg:list-disc list-inside w-full lg:w-[50%] text-primary text-center lg:text-left">
                    <li>Pamatas: 15 mm storio OSB plokštė.</li>
                    <li>
                        Izoliacija: 200 mm storio aukštos kokybės mineralinė
                        vata, užtikrinanti efektyvų šilumos išsaugojimą.
                    </li>
                    <li>
                        Danga: Pasirinkimas tarp 28 mm storio grindlentės, OSB
                        plokštės dengtos laminatu, arba kokybiškų parketlentės.
                    </li>
                </ul>
            </div>

            <div class="flex justify-center items-center py-[8px] sm:py-[16px] md:py-[32px]">
                <div class="border-t-2 border-gray-200 w-[50%]"></div>
            </div>

            <div class="flex flex-col lg:flex-row justify-between items-center gap-[16px]">
                <ul use:transitionIn class="opacity-0 text-a sm:text-p md:text-h6 lg:text-h5 font-secondary lg:list-disc list-inside w-full lg:w-[50%] text-primary text-center lg:text-left">
                    <li>
                        Vidinė Apdaila: Standartinė dailylentė arba, pagal
                        kliento pageidavimą, alternatyvios medžiagos,
                        pavyzdžiui, gipso kartono plokštės.
                    </li>
                    <li>
                        Vidaus Aukštis: Įvairūs variantai nuo 2,5 iki 3,2 metrų,
                        leidžiantys pasirinkti optimalų erdvės jausmą.
                    </li>
                    <li>
                        Bendras Konstrukcijos Aukštis: Maksimalus namelio
                        aukštis yra 3,75 metrų.
                    </li>
                    <li>
                        Inžineriniai Tinklai: Visos santechnikos magistralės ir
                        elektros instaliacija yra išvedžiotos ir paruoštos
                        naudojimui.
                    </li>
                </ul>
                <picture use:fadeIn class="opacity-0">
                <source
                        type="image/avif"
                        srcset={AvifPank}
                    />
                    <img src={Plank} alt="images" transition:fade/>
                </picture>
            </div>

            <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-[16px]">
                <picture use:fadeIn class="opacity-0 w-[500px] h-full">
                <source
                        type="image/avif"
                        srcset={AvifWall}
                    />
                    <img src={Wall} alt="images" transition:fade/>
                </picture>
                <ul use:transitionIn class="opacity-0 text-a sm:text-p md:text-h6 lg:text-h5 font-secondary lg:list-disc list-inside w-full lg:w-[50%] text-primary text-center lg:text-left">
                    <li>
                        Išorinis Apdailos Sluoksnis: Fasadinės dailylentės,
                        dažytos kliento pasirinkta spalva. Alternatyvi danga –
                        metalo skarda arba kita pagal individualų užsakymą
                        parinkta medžiaga.
                    </li>
                    <li>
                        Ventiliacija: Įmontuoti ventiliaciniai tarpeliai
                        užtikrina tinkamą oro cirkuliaciją.
                    </li>
                    <li>Apsauga Nuosavams: Integruotas pelių barjeras.</li>
                    <li>
                        Drėgmės Kontrolė: Aukštos kokybės difuzinė membrana,
                        skirta optimaliam drėgmės lygio reguliavimui.
                    </li>
                    <li>
                        Šiltinimas: 150 mm storio efektyvios šilumos izoliacijos
                        mineralinė vata.
                    </li>
                    <li>
                        Garo Izoliacija: Speciali garo izoliacinė plėvelė,
                        apsauganti nuo kondensato susidarymo. Šiltinimo
                        Medžiaga: Sienų konstrukcijos termoizoliacinis
                        efektyvumas užtikrinamas naudojant aukštos kokybės
                        mineralinę vatą, kuri pasižymi puikiomis šilumos
                        izoliacijos savybėmis ir yra atspari ugniai. Mineralinė
                        vata pasirinkta dėl jos ilgaamžiškumo, garso izoliacijos
                        savybių bei ekologiškumo.
                    </li>
                </ul>
            </div>

            <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-[16px] md:gap-[64px] lg:gap-[128px] pt-[32px] sm:pt-[64px] md:pt-[128px]">
                <div use:fadeIn class="opacity-0 w-full">
                <picture use:fadeIn class="opacity-0 w-[500px] h-full">
                        <source
                        type="image/avif"
                        srcset={AvifHouse}
                        />
                        <img src={House} alt="images" transition:fade/>
                </picture>
                </div>
                <ul use:transitionIn class="opacity-0 text-a sm:text-p md:text-h6 lg:text-h5 font-secondary lg:list-disc list-inside w-full lg:w-[50%] text-primary text-center lg:text-left">
                    <li>
                        Gabaritai: Maksimalūs standartinės vienos modulinės
                        dalies išmatavimai yra 3,5 x 8 metrai, su aukščiu iki
                        3,8 metrų.
                    </li>
                    <li>
                        Modulinė Sistemos Privalumas: Moduliai gali būti lengvai
                        jungiami, suteikiant galimybę plėsti erdvę pagal
                        asmeninius poreikius.
                    </li>
                    <li>
                        Kainodara: Namelio kvadratinio metro kaina yra
                        apytiksliai 700 eurų, suteikiant klientui aiškumą dėl
                        investicijos dydžio.
                    </li>
                </ul>
            </div>
        </div>
</section>