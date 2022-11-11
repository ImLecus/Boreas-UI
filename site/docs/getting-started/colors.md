# Colors & Gradients

### The bg() function class

The background color property is applied in Astra with the `bg()` function class. As every function class, this method is JS dependent, so make sure that you have the astra.js script attached to your project.

To use the `bg()` function class you need to add a class with the name "`bg([color])`". The color can be an html color like "**blue**", a RGB color like "**#0000ff**" or a CSS variable.

### Astra colors

Before the background color became a function class, there were 90 colours in Astra, included as CSS variables. But these variables are still inside the project and you can use it by putting `--astra-[color]-[intensity]`, like the example below:

```css
div{
    background-color: var(--astra-red-400);
}
```

The avaliable colours are:

* Red
* Orange
* Yellow
* Green
* Turquoise
* Light blue
* Blue
* Violet
* Pink
* Grey

And each one has 9 types of intensity, from 100 to 900.

### The gradient() function class

Like the bg() function class, using gradients as background requires to use `gradient()` function class following the next order of parameters: `gradient([mode],[color1],[color2],[rotation])`. Learn more about function classes here.

There are two types of gradients: **linear** and **radial**. Linear gradients will change from the first color to the second following a line, while radial gradients change from the first color at the center, to the second color following a circle. Radial gradients **doesn't need the rotation paramenter**, and it will be discarded on that mode.

```html
<div class="gradient(linear,blue,red,90deg)"> <!-- Linear gradient --> </div>
<div class="gradient(radial,blue,red)"> <!-- Radial gradient --> </div>
```

### CSS variables inside function classes

As other function classes, you don't need to put the `var()` function to use CSS variables in Astra, you can put them by their name as the example of below:

```html
<div class="gradient(linear,--astra-blue-500,--astra-red-500,90deg)"></div>
```