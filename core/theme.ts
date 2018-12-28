export const breakpoints = {
	sm: '768px',
	md: '960px',
	lg: '1200px'
};

export interface Colors {
	black: string;
	primary: string;
	secondary: string;
	flowerblue: string;
	waterloo: string;
	amber: string;
	conifer: string;
	bittersweet: string;
	whisper: string;
	linkWater: string;
	mischka: string;
}

export interface ThemeProps {
	colors: Colors;
	space: number[];
	breakpoints: string[];
	fontSizes: number[];
}

const theme: ThemeProps = {
	colors: {
		black: '#000032',
		primary: '#5C56C8',
		secondary: '#6D5CFF',
		flowerblue: '#7668EE',
		waterloo: '#7F7F99',
		amber: '#FFC000',
		conifer: '#B2D043',
		bittersweet: '#FF766B',
		whisper: '#FAFAFC',
		linkWater: '#EEEFFB',
		mischka: '#D4D5E2'
	},
	space: [5, 10, 15, 20, 25, 30, 35, 40],
	breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
	fontSizes: [12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 45]
};

export default theme;
