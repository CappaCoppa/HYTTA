<script>
	//   export let form
</script>

<form
	id="contact"
	class="bg-primary p-8 md:p-[64px] h-auto md:h-[100vh] overflow-hidden"
	method="POST"
>
	<div class="relative bg-transparent h-full">
		<div class="corner-border-top-right"></div>
		<div class="corner-border-bottom-left"></div>
		<div class="p-8 md:p-[64px] h-full flex flex-col md:flex-row">
			<div class="w-full md:w-[30%] mb-8 md:mb-0">
				<h3
					class="text-secondary uppercase text-h5 sm:text-h4 md:text-h3 tracking-[4px] font-bold font-primary"
				>
					Susisiekti
				</h3>
			</div>
			<div
				method="POST"
				action="/"
				name="messageForm"
				class="w-full flex flex-col justify-end items-end gap-8 md:gap-[32px] text-secondary font-primary tracking-[4px]"
			>
				<div class="flex flex-col md:flex-row justify-center gap-4 md:gap-[32px] w-full">
					<div class="w-full flex flex-col gap-4 md:gap-[16px]">
						<p class="text-a sm:text-p md:text-h6 lg:text-h5">Vardas</p>
						<input
							name="fname"
							type="text"
							class="font-secondary focus:outline-none focus:text-p md:focus:text-h5 h-12 bg-transparent border-b-2 border-secondary pb-2 md:pb-4 w-full placeholder:text-p md:placeholder:text-h5 text-a sm:text-p md:text-h6 lg:text-h5 placeholder:font-secondary z-40"
							placeholder="Vardenis"
							required
						/>
					</div>
					<div class="w-full flex flex-col gap-4 md:gap-[16px]">
						<p class="text-a sm:text-p md:text-h6 lg:text-h5">Pavardė</p>
						<input
							name="lname"
							type="text"
							class="font-secondary focus:outline-none focus:text-p md:focus:text-h5 h-12 bg-transparent border-b-2 border-secondary pb-2 md:pb-4 w-full placeholder:text-p md:placeholder:text-h5 text-a sm:text-p md:text-h6 lg:text-h5 placeholder:font-secondary z-40"
							placeholder="Pavardenis"
							required
						/>
					</div>
				</div>
				<div class="flex flex-col md:flex-row justify-center gap-4 md:gap-[32px] w-full">
					<div class="w-full flex flex-col gap-4 md:gap-[16px]">
						<p class="text-a sm:text-p md:text-h6 lg:text-h5">El. Paštas</p>
						<input
							name="email"
							type="email"
							class="font-secondary focus:outline-none focus:text-p md:focus:text-h5 h-12 bg-transparent border-b-2 border-secondary pb-2 md:pb-4 w-full placeholder:text-p md:placeholder:text-h5 text-a sm:text-p md:text-h6 lg:text-h5 placeholder:font-secondary z-40"
							placeholder="vardenis@paštas.lt"
							required
						/>
					</div>
					<div class="w-full flex flex-col gap-4 md:gap-[16px]">
						<p class="text-a sm:text-p md:text-h6 lg:text-h5">Mobilusis Numeris</p>
						<input
							name="tel"
							type="tel"
							class="focus:outline-none focus:text-p md:focus:text-h5 h-12 bg-transparent border-b-2 border-secondary pb-2 md:pb-4 w-full placeholder:text-p md:placeholder:text-h5 text-a sm:text-p md:text-h6 lg:text-h5 placeholder:font-secondary z-40"
							placeholder="Įveskite mobilu numerį"
							title="Phone number should start with 86 followed by 7 digits."
							required
						/>
					</div>
				</div>
				<div class="flex flex-col gap-4 md:gap-[16px] w-full">
					<p class="text-a sm:text-p md:text-h6 lg:text-h5">Pranešimas</p>
					<textarea
						name="message"
						type="text"
						class="focus:outline-none focus:text-p md:focus:text-h5 h-12 bg-transparent border-b-2 border-secondary pb-2 md:pb-4 w-full placeholder:text-p md:placeholder:text-h5 text-a sm:text-p md:text-h6 lg:text-h5 placeholder:font-secondary z-40"
						placeholder="Parašyti savo pranešimą"
						required
					/>
				</div>
				<!-- {#if form.success}
                        <div class="flex flex-col gap-4 md:gap-[16px] w-full">
                            <p class="text-success">{form.success}</p>
                        </div>
                        {/if} -->
				<button
					class="bg-secondary text-primary uppercase text-h6 sm:text-h5 md:text-h4 tracking-[2px] w-full p-2 md:p-[8px] cursor-pointer z-40"
				>
					Siusti
				</button>
			</div>
		</div>
	</div>
</form>

<style>
	.corner-border-top-right {
		position: absolute;
		top: 0;
		right: 0;
		height: 125%;
		width: 125%;
		overflow: hidden;
	}

	.corner-border-top-right::before,
	.corner-border-top-right::after {
		content: '';
		position: absolute;
		background: white; /* Change the color as needed */
	}

	.corner-border-top-right::before {
		top: 0;
		right: 0;
		width: 50%; /* Adjust the width as needed */
		height: 2px; /* Adjust the thickness as needed */
	}

	.corner-border-top-right::after {
		top: 0;
		right: 0;
		width: 2px; /* Adjust the thickness as needed */
		height: 50%; /* Adjust the height as needed */
	}

	.corner-border-bottom-left {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 125%;
		width: 125%;
	}

	.corner-border-bottom-left::before,
	.corner-border-bottom-left::after {
		content: '';
		position: absolute;
		background: white; /* Change the color as needed */
	}

	.corner-border-bottom-left::before {
		bottom: 0;
		left: 0;
		width: 50%; /* Adjust the width as needed */
		height: 2px; /* Adjust the thickness as needed */
	}

	.corner-border-bottom-left::after {
		bottom: 0;
		left: 0;
		width: 2px; /* Adjust the thickness as needed */
		height: 50%; /* Adjust the height as needed */
	}
	textarea {
		height: auto;
		resize: none;
	}
</style>
