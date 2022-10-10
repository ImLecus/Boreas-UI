# Inputs 

### Creating custom input elements
By default, Astra don't apply CSS to the normal input elements, you will need to add the `input` class to the custom inputs. Astra will give a different style depending on its type, so the `input` class is universal.
```html
<input type="text"> <!-- Standard input --> </div>
<input class="input" type="text"> <!-- Custom input --> </div>
```

### Changes on the new inputs

* **Textarea**: The new `textarea` input has the `resize-x` attribute in hidden, so this element will be resizable on the Y axis.
* **Range**: The `range` input isn't limited, but its appearance and colors are changed.
* **File**: As the previous element, the `file` input has a brand new appearance.

### Disabled inputs 

Astra also has styles to the disabled inputs. They are included with the input class, so you don't need to apply more classes, just the disabled attribute.

### Input validation

Astra has a basic input validation system that changes the style of certain input types if the information inside them is correct, making it green if it's valid or red if it isn't. You can active the input validation system by adding the `validation` class to your Astra's input.

```html
<input type="mail" class="input validation"> <!-- Input with validation --> </div>
```

### Input footers

Usually, the input elements inside a formulary have a small text under them. To transform a text into an input footer, you can use the `inputFooter` class.

```html
<input type="mail" class="input"></div>
<p class="inputFooter"> We will not share this information with anyone </p>
```