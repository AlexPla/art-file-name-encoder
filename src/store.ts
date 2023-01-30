import {writable} from 'svelte/store';

export const origin = writable('internal');

export const type = writable('P');

export const catalogNumber = writable('');

export const uniqueIdentifier = writable('');

export const recordYear = writable('');
export const recordNumber = writable('');

export const imageType = writable('A');

export const imageNumber = writable('');

export const lightSource = writable('N');

export const imageView = writable('F');

export const year = writable('');

export const temporalPieceNumber = writable('');

export const uniquePieceIdentifier = writable('');
