<script>
	import { openMenu } from '../store/store';
	import { fade } from 'svelte/transition';
	const mobileMenu = () => openMenu.update((value) => !value);
</script>

<section>
	<div
		transition:fade={{ duration: 250 }}
		class={`flex absolute h-[100vh] z-50 w-[100%] bg-primary transition-all ease-in-out md:hidden flex-col gap-[16px] p-[16px]`}
	>
		<ul
			class="flex flex-col gap-[8px] uppercase font-primary text-h5 tracking-[2px] text-secondary"
		>
			<li class="cursor-pointer inline-block">
				<a data-sveltekit-reload href="/specifications" on:click={mobileMenu}> Specifikacijos </a>
			</li>
			<li class="cursor-pointer inline-block">
				<a data-sveltekit-reload href="/#works" on:click={mobileMenu}> Darbai </a>
			</li>
			<li class="cursor-pointer inline-block">
				<a data-sveltekit-reload href="/#contacts" on:click={mobileMenu}> Kontaktai </a>
			</li>
			<li class="cursor-pointer inline-block">
				<a data-sveltekit-reload href="/#contact" on:click={mobileMenu}> Susisiekti </a>
			</li>
		</ul>
		<ul class="text-h6 font-secondary text-secondary">
			<li>+370 655 54 029</li>
			<li>info@hytta.lt</li>
			<li>Panevėžys, Uliūnų k.</li>
		</ul>
		<div class="flex gap-[16px] py-[4px] items-center">
			<a href="https://www.facebook.com/K.Konstrukcijos" aria-label="Visite our Facebook page">
				<svg
					width="24"
					height="24"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M32 16.0978C32 7.20722 24.8366 0 16 0C7.16344 0 0 7.20722 0 16.0978C0 24.1325 5.85094 30.7924 13.5 32V20.751H9.4375V16.0978H13.5V12.5512C13.5 8.51673 15.8888 6.2882 19.5434 6.2882C21.2934 6.2882 23.125 6.60261 23.125 6.60261V10.5642H21.1075C19.12 10.5642 18.5 11.8051 18.5 13.0794V16.0978H22.9375L22.2281 20.751H18.5V32C26.1491 30.7924 32 24.1325 32 16.0978Z"
						fill="#fff"
					/>
				</svg>
			</a>
			<a
				href="https://www.linkedin.com/in/aurimas-mykolaitis-0b72072a7"
				aria-label="Visite our Linkedin page"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_119_430)">
						<path
							d="M29.6313 0H2.3625C1.05625 0 0 1.03125 0 2.30625V29.6875C0 30.9625 1.05625 32 2.3625 32H29.6313C30.9375 32 32 30.9625 32 29.6938V2.30625C32 1.03125 30.9375 0 29.6313 0ZM9.49375 27.2687H4.74375V11.9937H9.49375V27.2687ZM7.11875 9.9125C5.59375 9.9125 4.3625 8.68125 4.3625 7.1625C4.3625 5.64375 5.59375 4.4125 7.11875 4.4125C8.6375 4.4125 9.86875 5.64375 9.86875 7.1625C9.86875 8.675 8.6375 9.9125 7.11875 9.9125ZM27.2687 27.2687H22.525V19.8438C22.525 18.075 22.4937 15.7937 20.0562 15.7937C17.5875 15.7937 17.2125 17.725 17.2125 19.7188V27.2687H12.475V11.9937H17.025V14.0813H17.0875C17.7187 12.8813 19.2688 11.6125 21.575 11.6125C26.3813 11.6125 27.2687 14.775 27.2687 18.8875V27.2687V27.2687Z"
							fill="#fff"
						/>
					</g>
					<defs>
						<clipPath id="clip0_119_430">
							<rect width="32" height="32" fill="#fff" />
						</clipPath>
					</defs>
				</svg>
			</a>
			<a href="https://www.instagram.com/hytta.lietuva/" aria-label="Visite our Instagram page">
				<svg
					width="28"
					height="28"
					viewBox="0 0 191 191"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="15" y="8" width="160" height="175" rx="50" fill="#fff" />
					<circle cx="95" cy="96" r="42.5" stroke="#002856" stroke-width="15" />
					<path
						d="M156 40C156 45.5228 151.523 50 146 50C140.477 50 136 45.5228 136 40C136 34.4772 140.477 30 146 30C151.523 30 156 34.4772 156 40Z"
						fill="#002856"
					/>
				</svg>
			</a>
			<a href="https://www.youtube.com/@hytta.lietuva" aria-label="Visite our Youtube page">
				<svg
					class="w-[28px]"
					width="24"
					height="28"
					viewBox="0 0 32 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M31.6812 5.17856C31.6812 5.17856 31.3688 2.82588 30.4063 1.79284C29.1875 0.433213 27.825 0.426548 27.2 0.34657C22.725 -1.90682e-07 16.0063 0 16.0063 0H15.9937C15.9937 0 9.275 -1.90682e-07 4.8 0.34657C4.175 0.426548 2.8125 0.433213 1.59375 1.79284C0.63125 2.82588 0.325 5.17856 0.325 5.17856C0.325 5.17856 0 7.94446 0 10.7037V13.2896C0 16.0489 0.31875 18.8148 0.31875 18.8148C0.31875 18.8148 0.63125 21.1675 1.5875 22.2005C2.80625 23.5601 4.40625 23.5135 5.11875 23.6601C7.68125 23.92 16 24 16 24C16 24 22.725 23.9867 27.2 23.6468C27.825 23.5668 29.1875 23.5601 30.4063 22.2005C31.3688 21.1675 31.6812 18.8148 31.6812 18.8148C31.6812 18.8148 32 16.0555 32 13.2896V10.7037C32 7.94446 31.6812 5.17856 31.6812 5.17856ZM12.6938 16.4288V6.8381L21.3375 11.6501L12.6938 16.4288Z"
						fill="#fff"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>
