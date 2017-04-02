/**
 * Global constants: Colors, animations and plugin tags
 */

import { keyframes } from 'styled-components';

function hexToRGB(color) {
	return `${parseInt(color.slice(1,3), 16)},${parseInt(color.slice(3,5), 16)},${parseInt(color.slice(5,7), 16)}`
}

const colors = {
	ultraLightGrey: '#F9F9F9',
	lightGrey: '#F5F5F5',
	midGrey: '#B1B1B1',
	darkGrey: '#4A4A4A',
	statusGreen: "#CBEC83",
	statusYellow: "#F8E81C",
	statusRed: "#F84B1C",
	textLight: "#CACBCB",
	textColor: '#222',
	brandColor: '#087B98',
	lightBrandColor: '#3C93A9',
};

const shadows = {
	diffuse: '0 2px 16px 0 rgba(0,0,0,0.07)',
	diffuseHover: '0 4px 26px 0 rgba(0,0,0,0.05)',
	diffuseColor: (color) => {
		return `0 2px 16px 0 rgba(${hexToRGB(color)}, 0.8)`
	}
};

const animations = {
  spinnerCircle: keyframes`
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; }
  `,
};

const breakpoints = {
	mobile: 600
}

export { colors, animations, shadows, breakpoints };
