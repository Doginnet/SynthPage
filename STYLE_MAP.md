## Style Map for SynthPage

This document maps the CSS styles to the DOM elements in the SynthPage project.

### `styles.css`

This file contains the main styles for the `index.html` page.

| Selector | Element(s) | Description |
| :--- | :--- | :--- |
| `html` | `<html>` | Sets the base styles for the entire page, including a background image and color. |
| `#first-page` | `<div id="first-page">` | Sets a background image and an animation for the main landing page section. |
| `@keyframes animate-background` | | Defines the animation for the background of `#first-page`. |
| `#eighties` | `<h2 id="eighties">` | Applies a hue-rotate filter to the "80s" text. |
| `body` | `<body>` | Sets the background color and dimensions for the page body. |
| `ul > li` | `<li>` elements directly inside a `<ul>` | Adds a bottom border, cursor style, and transition for list items. |
| `.bg-dark` | Elements with the class `bg-dark` | Sets a semi-transparent background color and a transition. |
| `.bg-dark:hover` | | Darkens the background on hover. |
| `header` | `<header>` | Styles the header with flexbox and a transparent background. |
| `.shadow` | Elements with the class `shadow` | Adds a text shadow. |
| `h1` | `<h1>` | Applies a text shadow and hue-rotate filter to the main heading. |
| `.card`, `.card > *` | Elements with the class `card` and their direct children | Removes the border from cards. |
| `.card img` | `<img>` elements inside a `.card` | Adds a border and border-radius to images within cards. |
| `h2` | `<h2>` | Styles the "80s" text with a large font size, color, and text shadow. |
| `.main-container` | Elements with the class `main-container` | Applies a gradient background and box shadow. |
| `.text-neon` | Elements with the class `text-neon` | Sets a neon blue color and text shadow. |
| `.card-text`, `.card-title` | | Styles the text and title within cards with a specific color and text shadow. |
| `.card-body` | | Sets a transparent background and max-height for card bodies. |
| `.navbar` | Elements with the class `navbar` | Styles the navigation bar with a gradient background, box shadow, and font size. |
| `.navbar:hover` | | Reduces the opacity of the navbar on hover. |
| `.navbar:hover li` | | Changes the color and adds a text shadow to navbar list items on hover. |
| `.navbar > ul` | | Styles the unordered list within the navbar. |
| `.card-img` | | Sets a max-width for images with the class `card-img`. |
| `.hidden` | | Hides elements with the class `hidden`. |
| `#hero-page` | `<div id="hero-page">` | Sets a background image for the "Neon City" section. |
| `#heading-neonCity` | `<span id="heading-neonCity">` | Applies a neon text effect to the "NEON//CITY/" heading. |
| `#page-two-navbar` | `<ul id="page-two-navbar">` | Styles the navbar in the "Page Two" section. |
| `#page-two-navbar > li:hover` | | Changes the style of the "Page Two" navbar items on hover. |
| `.heading-neon` | Elements with the class `heading-neon` | Applies a large, multi-layered text shadow to create a neon effect. |
| `.bg-quote` | Elements with the class `bg-quote` | Styles the blockquote in the "Neon City" section. |
| `.img-frame` | Elements with the class `img-frame` | Adds a border, box shadow, and transition to image frames. |
| `.hover-text` | Elements with the class `hover-text` | Hides text by default and shows it on hover, used for image overlays. |
| `.img-frame:hover .hover-text`, `.hover-text:hover` | | Shows the hover text when hovering over the image frame. |
| `.img-frame:hover` | | Applies a grayscale filter to the image frame on hover. |
| `.glitch`, `.glitch-header` | | Creates a glitch effect on text using pseudo-elements and animations. |
| `@keyframes glitch` | | Defines the animation for the glitch effect. |
| `#page-three` | `<div id="page-three">` | Sets a background image for the "Chill Zone" section. |
| `.bg-black` | | Styles elements with a semi-transparent black background. |
| `.box-shadow` | | Adds a box shadow to elements. |
| `.hover-animation:hover` | | Adds a border and box shadow on hover. |
| `.card-custom` | | Adds a transition for a scaling effect. |
| `.card-custom:hover` | | Scales up the card on hover. |
| `#page-three > div:hover` | | Adds a box shadow to the main container of "Page Three" on hover. |
| `@media (max-width: 800px)` | | Contains responsive styles for smaller screens. |

### `catalog.css`

This file contains the styles for the `catalog.html` page.

| Selector | Element(s) | Description |
| :--- | :--- | :--- |
| `html`, `body` | `<html>`, `<body>` | Sets basic box-sizing, margin, padding, and dimensions. |
| `body` | `<body>` | Sets the background color, image, and blend mode for the catalog page. |
| `.bg-filter` | `<div class="bg-filter">` | Applies a background color and backdrop filter to create a blurred background effect. |
| `#page-container` | `<div id="page-container">` | Sets a gradient background and box shadow for the main content area. |
| `.side-menu` | `<div class="side-menu">` | Positions the side menu off-screen to the left. |
| `#dropdown-arrow` | `<span id="dropdown-arrow">` | Styles the dropdown arrow for the side menu. |
| `.dropdown-arrow-open` | | Rotates the dropdown arrow when the menu is open. |
| `.img-carousel` | | Sets a fixed height for images in the carousel. |
