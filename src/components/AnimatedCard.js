import React from 'react';
import { animated, useSpring } from 'react-spring';
// import './AnimatedCard.css';

/**
 * Component params or "props"
 * scale [value between 1-10]
 * rotationX
 * rotationY
 * mass
 * @param {*} params
 */

const AnimatedCard = (params) => {
	const pressed = params.onClick;

	const multiplierScale =
		params.scale === undefined ? 1 : params.scale;

	const multiplierMass = params.mass === undefined ? 1 : params.mass;

	const calc = (x, y) => [
		-(y - window.innerHeight / 3) / 30,
		(x - window.innerWidth / 3) / 30,
		1.05 * multiplierScale,
	];
	const trans = (x, y, s) =>
		`perspective(100vw) rotateX(${x}deg) rotateY(${
			y / 2
		}deg) scale(${s})`;

	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5 * multiplierMass, tension: 350, friction: 65 },
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
			onClick={pressed}
		>
			{params.children}
		</animated.div>
	);
};

export default AnimatedCard;
