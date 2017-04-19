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
	accentColor: '#9CEADA',
	accentPastel: `rgba(${hexToRGB("#9CEADA")}, 0.3)`,
	lightBrandColor: '#3C93A9',
};

const shadows = {
	diffuse: '0 2px 16px 0 rgba(0,0,0,0.07)',
	diffuseDark: '0 6px 38px 0 rgba(0,0,0,0.22)',
	diffuseHover: '0 4px 26px 0 rgba(0,0,0,0.05)',
	diffuseColor: (color) => {
		return `0 2px 16px 0 rgba(${hexToRGB(color)}, 0.6)`
	}
};

const animations = {
	spinnerCircle: keyframes`
		0%, 39%, 100% { opacity: 0; }
		40% { opacity: 1; }
	`,
	fadeIn: keyframes`
		from  { opacity: 0; transform: translateY(-6px); }
		to { opacity: 1; transform: translateY(0px); }
	`,
	general: '200ms cubic-bezier(0.4, 0.0, 0.2, 1);',
	generalCurve: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
};

const breakpoints = {
	notSmall: "600px",
	tablet: "968px"
}

export { colors, animations, shadows, breakpoints };
