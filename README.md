# Almond.CSS

Almond.CSS is a collection of class-less CSS styles to make simple websites look better.

Use the different HTML5 semantic tags on your website, include the library in your project, and let CSS and the browser work their magic. Just combine your HTML and Almond CSS. No JavaScript needed.

## Demo

You can see the [demo in this repo running on RawGit](https://ghcdn.rawgit.org/alvaromontoro/almond.css/master/demo/index.html).

## Goals

- No classes or IDs.
- Cross-browser compatibility.
- Easily themable (using HSL).
- Responsive, accessible and usable.
- Lightweight (3KB gzipped).
- Simple but elegant.

## Theming

We based the theming on CSS variables and HSL colors. HSL allows to define a color based on three parameters: Hue, Saturation, and Lightness. Provide a primary and secondary colors using HSL, and see the demo page change automatically.

The default primary color is a dark pale blue, and the default secondary color is a medium gray.

Some values that devs can specify:

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `--primaryH` | Primary color hue value | 210 |
| `--primaryS` | Primary color saturation value | 50% |
| `--primaryL` | Prumary color lightness value | 40% |
| `--primary-bg` | Primary color background | white |
| `--secondaryH` | Primary color hue value | 0 |
| `--secondaryS` | Primary color saturation value | 0% |
| `--secondaryL` | Prumary color lightness value | 13% |
| `--secondary-bg` | Primary color background | white |
| `--font-family` | Set of fonts for the text | Helvetica, Arial, sans-serif |
| `--font-size-root` | Default font size (root) | 16px |
| `--font-weight-bolder` | Font weight value (bolder text) | 700 |
| `--font-weight-bold` | Font weight value (bold text) | 400 |
| `--font-weight-normal` | Font weight value (normal text) | 200 |
| `--font-weight-thin` | Font weight value (thin text) | 100 |
| `--line-height` | Line-height of paragraphs and lists | 1.75rem |
| `--border-radius` | Border radius | 2px |
