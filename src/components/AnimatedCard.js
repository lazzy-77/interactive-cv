import React from 'react';
import { animated, useSpring } from 'react-spring';
// import './AnimatedCard.css';

const calc = (x, y) => [
	-(y - window.innerHeight / 3) / 30,
	(x - window.innerWidth / 3) / 30,
	1.05,
];
const trans = (x, y, s) =>
	`perspective(100vw) rotateX(${x}deg) rotateY(${
		y / 2
	}deg) scale(${s})`;

const AnimatedCard = (params) => {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 90 },
	}));
	return (
		<animated.div
			class={params.className}
			id={params.id}
			onMouseMove={({ clientX: x, clientY: y }) =>
				set({ xys: calc(x, y) })
			}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			style={{ transform: props.xys.interpolate(trans) }}
		>
			{params.children}
		</animated.div>
	);
};

export default AnimatedCard;
