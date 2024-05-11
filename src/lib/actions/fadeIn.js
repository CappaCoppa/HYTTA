export default function fadeIn(node) {
	// Check if the screen width is less than 1024 pixels
	if (window.innerWidth < 1024) {
		node.style.opacity = 1;
		return;
	}

	let hasBeenInView = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasBeenInView) {
					node.classList.add('fade-in-too');
					hasBeenInView = true;
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.3 }
	);

	observer.observe(node);

	return {
		destroy() {
			if (observer) {
				observer.unobserve(node);
			}
		}
	};
}
