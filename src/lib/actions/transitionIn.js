export default function transitionIn(node) {
	if (window.innerWidth < 1024) {
		node.style.opacity = 1;
		node.style.transform = 'translateY(0)';
		return;
	}

	let hasBeenInView = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasBeenInView) {
					node.classList.add('transition-in-up');
					hasBeenInView = true;
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.8 }
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
