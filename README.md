# tri-circles-effect

An interesting pending/loading effect.

## Demo

![tri-circles gif](/tri-circles.gif)

Clone and open `index.html` in your browser, and you can change the black content by yourself.

## Test Build

`node keyframes.js > cricle-keyframes.css`

## Usage

```html
<!-- in head -->
<link rel="stylesheet" href="./circle-keyframes.css">
<link rel="stylesheet" href="./style.css">

<!-- in body -->
<div class="tri-circles-container">
  <div class="tri-circles-bg">
    <div class="tri-circles-bg-circle top"></div>
    <div class="tri-circles-bg-circle left"></div>
    <div class="tri-circles-bg-circle right"></div>
  </div>
  <div class="tri-circles-content">
    <!-- <img> -->
  </div>
</div>
```

## License

MIT
