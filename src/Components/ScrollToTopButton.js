import React, { useState, useEffect } from 'react';
import upArrow from '../images/up-arrow.png';

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	const toggleVisibility = () => {
		if (window.pageYOffset > 150) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
}

	useEffect(() => {
		console.log('useEffect ran');
		document.addEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className="scroll-to-top">
			{isVisible && (
				<div onClick={scrollToTop}>
					<img height={50} src={upArrow} alt='Go to top' />
				</div>
			)}
		</div>
	);
}

export default ScrollToTopButton;