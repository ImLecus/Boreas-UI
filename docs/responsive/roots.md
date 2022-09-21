# Roots

### What are roots?

A root in Astra CSS is an element container. It will expand until a specific width, and it will collapse if it is larger than the width. There are 6 different types of roots:

||Extra-Small (< 600px)|Small (< 768px)|Medium (< 992px)|Large (< 1200px)| Extra-Large (< 1440)|Ultra-Large (≥ 1440px)|
|-|------|------|------|------|----|--|
|`root-xs`|100%|600px|600px|600px|600px|600px
|`root-s`|100%|100%|768px|768px|768px|768px
|`root-m`|100%|100%|100%|992px|992px|992px
|`root-l`|100%|100%|100%|100%|1200px|1200px
|`root-xl`|100%|100%|100%|100%|100%|1440px
|`root-full`|100%|100%|100%|100%|100%|100%
|`root`|75%|75%|75%|75%|75%|75%

### Creating a root

Creating a root is as simple as creating a div with one of the root classes. Let's create a default root, that has a width of the 75% of the screen:
```html
<div class="root">
    <!-- Here goes the content -->
</div>
```
As you have seen on the table, each type of root has different breakpoints when they will stop expanding.
##### Full and default roots

`root-full` and `root` are two special type of roots avaliable on Astra CSS. Their particularity is that they have no breakpoints, they will expand forever. While `root-full` expands to the 100% of the screen, `root` only expands to 75%, leaving a 12.5% margin on each side.

```html
<div class="root">
    <!-- This root will expand to the 75% of the screen -->
</div>
<div class="root-full">
    <!-- This root will expand to the 100% of the screen -->
</div>
```