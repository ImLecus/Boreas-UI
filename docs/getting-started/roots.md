

# Roots

### What are roots?

The root elements are the most basic element container in Astra. They have different sizes and they mark the width of the elements inside them. For example, the .root element has a maximum width of the 75% of the parent element, in this case the body.

### Different sizes of roots

||Extra-Small (< 600px)|Small (< 768px)|Medium (< 992px)|Large (< 1200px)| Extra-Large (< 1440)|Ultra-Large (≥ 1440px)|
|-|------|------|------|------|----|--|
|`root`|75%|75%|75%|75%|75%|75%
|`rootXS`|100%|600px|600px|600px|600px|600px
|`rootS`|100%|100%|768px|768px|768px|768px
|`rootM`|100%|100%|100%|992px|992px|992px
|`rootL`|100%|100%|100%|100%|1200px|1200px
|`rootXL`|100%|100%|100%|100%|100%|1440px
|`rootFull`|100%|100%|100%|100%|100%|100%

### Creating a root

To create a root element you need to apply one of the previous root classes inside an element, preferably inside a div tag, like the example of below:

```html
<div class="root">
    <p>This is a paragraph inside a root</p>
</div>
```

### Responsive roots

As you can see in the previous table, there are more types of roots, and each one have a width limit depending on their breakpoint. For example, a .rootL element will have a width of 100% if the screen width is smaller than 1200px, and it will have a width of 1200px if the screen is larger.

```html
<div class="rootXS"> <!-- 600px --> </div>
<div class="rootS"> <!-- 768px --> </div>   
<div class="rootM"> <!-- 992px --> </div> 
<div class="rootL"> <!-- 1200px --> </div>
<div class="rootXL"> <!-- 1440px --> </div>
```

### Full roots

A special type of roots is the full roots. They will expand until the 100%, the screen width will doesn't matter. To use it, write the .rootFull class like the example below:
```html
<div class="rootFull">
    <!-- This will have 100% width -->
</div>
```