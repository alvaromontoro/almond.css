/**
 * almond.css variables (default values)
 */
export const PRIMARY_COLOR = 'rgb(51, 102, 153)'; // equivalent to #369
export const PRIMARY_BG = 'rgb(255, 255, 255)';
export const PRIMARY_LIGHTER = 'oklch(0.949921 0.00990976 10.4542)';
export const PRIMARY_BRIGHT = 'oklch(0.9 0.123312 250.447)';
export const SECONDARY_COLOR = 'rgb(34, 34, 34)'; // equivalent to #222
export const SECONDARY_BG = 'rgb(255, 255, 255)';
export const SECONDARY_LIGHT = 'oklch(0.812986 0.0000404955 23.72)';
export const SECONDARY_LIGHTER = 'oklch(0.925191 0.0000460773 23.761)';
export const SECONDARY_DARKER = 'oklch(0.125981 0.00000629307 23.5148)';

export const ERROR_COLOR = 'rgb(221, 0, 0)';

export const FONT_FAMILY = 'Helvetica, Arial, sans-serif';
export const FONT_SIZE_ROOT = '16px';
export const FONT_WEIGHT_THIN = '100';
export const FONT_WEIGHT_REGULAR = '200';
export const FONT_WEIGHT_BOLD = '400';
export const FONT_WEIGHT_BOLDER = '700';

export const BORDER_RADIUS = '2px';

export const LINE_HEIGHT = '28px';

export const HEADING_MARGIN = '24px 0px 16px';

/**
 * given a rem value, it returns the equivalent in pixels as a string
 */
export const remToPx = num => `${num * 16}px`;