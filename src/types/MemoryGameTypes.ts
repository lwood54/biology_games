export interface Card {
	pairID: string,
	id: string,
	type: string,
	back: string,
	src: string
}

export interface ToggleShowFront {
	toggleShowFront: (e: MouseEvent) => void;
}

export type TimerAction = 'stop' | 'start';