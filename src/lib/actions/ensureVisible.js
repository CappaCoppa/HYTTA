export default function adjustScrollForWorksSection() {
	const worksSection = document.getElementById('works');
	if (worksSection) {
		const worksHeight = worksSection.offsetHeight;
		const screenHeight = window.innerHeight;
		if (worksHeight > screenHeight) {
			window.scrollTo({
				top: worksSection.offsetTop,
				behavior: 'smooth'
			});
		}
	}
}
