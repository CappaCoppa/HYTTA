<script>
	import Contact from "../lib/components/Contact.svelte";
	import Contacts from "../lib/components/Contacts.svelte"
	import Works from "../lib/components/Works.svelte";
</script>

<svelte:head>
	<title>HYTTA - Moduliniai Namai ir Pirtys</title>
	<meta name="description" content="Hytta construction company" />
</svelte:head>

<section>
	<div class="hero-banner h-[50vh] sm:h-[50vh] md:h-[70vh] lg:h-[100vh] relative animate-fadeIn overflow-hidden" style="animation-delay: 0.8s;">
		<div class=" absolute w-full h-full z-40 bg-primary opacity-0 animate-fadeOpacity" style="animation-delay: 1.8s;"></div>
		<div class="py-[16px] h-full z-40 flex w-full animate-fadeIn opacity-0"  style="animation-delay: 2.8s;">
			<div class="text-secondary flex flex-col justify-center w-full px-[16px] sm:px-[32px] md:px-[64px] lg:px-[128px]" >
				<h1 class="text-h4 sm:text-h3 md:text-h2 lg:text-h1 transition-all ease-in-out font-primary tracking-[8px] uppercase">hytta</h1>
				<p class="text-a w-[95%] sm:text-p sm:w-[90%] md:text-h6 md:w-[100%] lg:text-h5 lg: font-secondary tracking-[2px]">Karkasinių ir modulinių namų gamyba atliekama laikantis Skandinavijos standartų Mūsų siūlomos pristatymo paslaugos visoje Lietuvoje suteikia Jums patogumą ir lankstumą. Rinkitės išskirtinį komfortą ir funkcionalumą – pasirūpinsime, kad Jūsų svajonių projektai taptų realybe.</p>
			</div>
			<div class="w-full items-end justify-center hidden md:flex px-[16px]" >
				<ul class="flex m-0 p-0 uppercase font-secondary justify-center gap-[16px] tracking-[2px] text-secondary opacity-0 animate-fadeIn w-full text-a md:text-p md:gap-[]  py-[16px]">
							<li class="cursor-pointer inline-block transform-gpu hover:scale-110 transition-transform flex-shrink-0">
								<a href="/specifications">
									Specifikacijos
								</a>
							</li>
                            <li class="cursor-pointer inline-block transform-gpu hover:scale-110 transition-transform flex-shrink-0">
								<a href="/#works">
									Darbai
								</a>
                            </li>
                            <li class="cursor-pointer inline-block transform-gpu hover:scale-110 transition-transform flex-shrink-0">
								<a href="#contacts">
									Kontaktai
								</a>
                            </li>
                            <li class="cursor-pointer inline-block transform-gpu hover:scale-110 transition-transform flex-shrink-0">
								<a href="#contact">
									Susisiekti
								</a>
                            </li>
                    </ul>
			</div>
		</div>
	</div>
	<Works/>
	<Contacts/>
	<Contact/>
</section>

<style>
	.hero-banner {
    background-image: url('/images/webp/hero.webp');
	display: flex;
	align-items: center;
	justify-content: center;
    background-size: cover; /* Cover the entire space of the div */
    background-position: center; /* Center the background image */
	opacity: 0;
    /* Add more styles as needed */
  }
</style>

