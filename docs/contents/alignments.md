# Alignments

### Aligning content

To align content inside a flex, Astra uses the `center` and `align` classes and their variants. The usage is: `[align/center][axis]`. In the `center` case, the axis property is optional, if you don't specify it, it will apply the alignment to the center. Additionally, the `center` class is used on the flex container, while the `align` class is used on the elements inside the flex.

```html
<div class="centerX"></div>
<div class="centerY"></div>
<div class="center"></div>
```
```html
<div>
  <div class="alignLeft"></div>
  <div class="alignRight"></div>
  <div class="alignTop"></div>
  <div class="alignBottom"></div>
</div>
```
### Other alignment classes
* The `float` property of the elements can be changed with the `left` or `right` classes.
* The `around` class will align the elements inside a flex with the same space between each one and the borders.
* The `between` class will align the elements inside a flex with the same space between each one, but ignoring the borders.

### Text alignments
Texts can be aligned too without being attached to a flex. To align texts in one direction, you can use the `textLeft`, `textRight` and `textCenter` classes. It's very useful to apply these classes if you want to align texts witout a complex system, like a footer text.
```html
<p class="textLeft"> Left </p>
<p class="textRight"> Right </p>
<p class="textCenter"> Center </p>
```