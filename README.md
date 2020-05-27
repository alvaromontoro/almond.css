# Almond.CSS

Almond.CSS is a collection of class-less CSS styles to make simple websites look better.

Use the different HTML5 semantic tags on your website, include the library in your project, and let CSS and the browser work their magic. Just combine your HTML and Almond CSS (no JavaScript needed.) You can see a [demo in this repo running on RawGit](https://ghcdn.rawgit.org/alvaromontoro/almond.css/master/demo/index.html).

The main goals of this project are:

- **Use only tags**: no classes or IDs.
- **Cross-browser compatibility**: look as close as possible in all browsers.
- **Easily themable**: using CSS variables and HSL colors.
- **Responsive, accessible, and usable**.
- **Lightweight**: limit the size to 3KB (gzipped).
- **Keep it simple** but elegant.

## Building and running locally

Here are the instructions on how to copy the code of this library into your local machine and build it. They use `npm`, but you can run similar commands with `yarn`.

Clone the repository:

```
git clone https://github.com/alvaromontoro/almond.css.git
```

Enter the project directory (almond.css):

```
cd almond.css
```

Install the development dependencies:

```
npm i
```

Build the library by compiling the sass files:

```
npm run build
```

This will generate four files in the `dist` folder:

- `almond.css`: the raw/readable version of the library
- `almond.min.css`: a minified version of the library
- `almond.lite.css`: the light version of the library without icons
- `almond.lite.min.css`: light minified version

You can test the library by opening the static HTML file located in the `demo` directory.

---

Instead of having to run the `build` script each time that a change is made, you can add a watch functionality that will generate the `almond.css` file every time there is a change in any of the sass files:

```
npm run watch
```

Notice that only the `almond.css` file (used in the demo html page) will be generated. Once you are ready to build for production, you will have to run the `build` script to generate the light and minified versions described above.

## Theming

We based the theming on CSS variables and HSL colors. HSL allows to define a color based on three parameters: Hue, Saturation, and Lightness. Provide a primary and secondary colors using HSL, and see the demo page change automatically.

The default primary color is a dark pale blue, and the default secondary color is a medium gray.

Some values that devs can specify:

| Variable               | Description                                       | Default Value                  |
| ---------------------- | ------------------------------------------------- | ------------------------------ |
| `--primaryH`           | Primary color hue value                           | `210`                          |
| `--primaryS`           | Primary color saturation value                    | `50%`                          |
| `--primaryL`           | Primary color lightness value                     | `40%`                          |
| `--primary-bg`         | Primary color background                          | `white`                        |
| `--secondaryH`         | Primary color hue value                           | `0`                            |
| `--secondaryS`         | Primary color saturation value                    | `0%`                           |
| `--secondaryL`         | Primary color lightness value                     | `13%`                          |
| `--secondary-bg`       | Primary color background                          | `white`                        |
| `--font-family`        | Set of fonts for the text                         | `Helvetica, Arial, sans-serif` |
| `--font-size-root`     | Default font size (root)                          | `16px`                         |
| `--font-weight-bolder` | Font weight value (bolder text)                   | `700`                          |
| `--font-weight-bold`   | Font weight value (bold text)                     | `400`                          |
| `--font-weight-normal` | Font weight value (normal text)                   | `200`                          |
| `--font-weight-thin`   | Font weight value (thin text)                     | `100`                          |
| `--line-height`        | Line-height of paragraphs and lists               | `1.75rem`                      |
| `--heading-margin`     | Margin applied to the headings and heading groups | `1.5rem 0 1rem`                |
| `--border-radius`      | Border radius                                     | `2px`                          |
