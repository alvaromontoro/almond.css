/**
 * almond.css variables (default values)
 */
export const PRIMARY_COLOR = 'rgb(51, 102, 153)'; // equivalent to hsl(210, 50%, 40%)
export const PRIMARY_BG = 'rgb(255, 255, 255)';
export const SECONDARY_COLOR = 'rgb(33, 33, 33)'; // equivalent to hsl(0, 0%, 13%)
export const SECONDARY_BG = 'rgb(255, 255, 255)';
export const SECONDARY_LIGHTER = 'rgb(245, 245, 245)';

export const FONT_WEIGHT_THIN = '100';
export const FONT_WEIGHT_REGULAR = '200';
export const FONT_WEIGHT_BOLD = '400';
export const FONT_WEIGHT_BOLDER = '700';

export const BORDER_RADIUS = '2px';


/**
 * given a rem value, it returns the equivalent in pixels as a string
 */
export const remToPx = num => `${num * 16}px`;