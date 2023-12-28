export default function transitionIn(node) {
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
			observer.unobserve(node);
		}
	};
}
