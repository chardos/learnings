## Flexbox fallback

You can write a fallback for IE9 using the below:
```css
.parent{
  display: flex;
}
.child{
  /* Floating and explicit width will make this work on IE9 */
  float: left;
  width: 50%;
}
```
