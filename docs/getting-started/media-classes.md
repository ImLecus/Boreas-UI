# Media classes

### New class type

As you know, Astra works with **standard** classes and **function** classes. With both of them, there possibilities are endless. But, what can we use when we want to apply some classes to an element when some conditions are true? For that problem, Astra has added the **media** classes. For example, let's change a paragraph color when the screen is in dark mode:

```html
<p dark="color(blue)">Hello world!</p>
```

As you can see, the only difference between normal classes and media classes are the HTML attribute. While normal classes are applied inside the **class** attribute, the media classes are applied using their condition name as a new HTML attribute. Here is a list with all the actual media classes and their condition.

|Media class|Condition|
|-----------|---------|
|dark|(prefers-color-scheme: dark)|
|light|(prefers-color-scheme: light)|
|xl|(max-width: 1440px)|
|l|(max-width: 1200px)|
|m|(max-width: 968px)|
|s|(max-width: 772px)| 
|xs|(max-width: 600px)|
     
     
### Media class priority

Sometimes, two different conditions are true and both media classes will be executed. To solve this issue, Astra has a media class order to determine the CSS that will be applied. The priority order is the next: 

With color scheme conditions, light theme has the priority.
With screen size conditions, the smallest size has the priority.
     
### Important advices

* Media classes are **JS dependents**, so make sure that you have the script attached to your HTML file.

* Media classes supports both standard and function classes without any extra limitation.

* Make sure that the HTML attribute name is well spelled.