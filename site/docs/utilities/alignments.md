# ALIGNING WITH ASTRA CSS

### Center

You can center any content inside the element with the `center-x`,`center-y` and `center` classes:

The `center-x` class aligns all the elements inside the container to the center on the X axis.

HTML:
```html
<div>
<p>A</p>
<p>B</p>
<p>C</p>
</div>
<!-- RESULT:  
|ABC      |
|         |
|         |
-->
```
Astra CSS:
```html
<div class="center-x">
<p>A</p>
<p>B</p>
<p>C</p>
</div>
<!-- RESULT:  
|   ABC   |  
|         |
|         |        
-->
```

The `center-y` class aligns all the elements inside the container to the center on the Y axis.

HTML:
```html
<div>
<p>A</p>
<p>B</p>
<p>C</p>
</div>
<!-- RESULT:  
|ABC      |
|         |
|         |
-->
```
Astra CSS:
```html
<div class="center-y">
<p>A</p>
<p>B</p>
<p>C</p>
</div>
<!-- RESULT:  
|         |
|ABC      |
|         |
-->
```

Finally, the `center` class aligns all the elements inside the container to the center on the X and Y axis.

HTML:
```html
<div>
<p>A</p>
<p>B</p>
<p>C</p>
</div>
<!-- RESULT:  
|ABC      |
|         |
|         |
-->
```
Astra CSS:
```html
<div class="center">
<p>A</p>
<p>B</p>
<p>C</p>
</div>
<!-- RESULT:  
|         |
|   ABC   |
|         |
-->
```
### Right & Left

To align an element inside the container to the left or right, you can use `align-left` and `align-right` classes:

HTML:
```html
<div>
<p>A</p>
<p>B</p>
<p>C</p>
</div>
<!-- RESULT:  
|ABC      |
|         |
|         |
-->
```
Astra CSS:
```html
<div class="center">
<p class="align-left">A</p>
<p class="align-right">B</p>
<p>C</p>
</div>
<!-- RESULT:  
|         |
|A      BC|
|         |
-->
```