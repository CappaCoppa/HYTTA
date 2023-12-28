export default function fadeIn(node) {
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
			observer.unobserve(node);
		}
	};
}
