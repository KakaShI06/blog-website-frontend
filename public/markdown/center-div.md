# Different Methods to center your div

There are so many different types methods are there to center a div and yet it's a biggest meme in programming world. Let's see the different methods to center your `<div />`

Let's firstly look html structure:

```
<div class="center">
  <div class="child">
    //content
  </div>
</div>
```

`Note: Each child div should contain some width and height`

1. ## Using FlexBox:

   I think it's one of the easiest and most used method to center a div, we simply provide display flex property , justify center for horizontally center and align-item center for vertically center. And you div will be centered

   ```
   .center {
     display: flex;
     justify-content: center; /* Horizontally center */
     align-items: center; /* Vertically center */
   }
   ```

2. ## Using Grid:

   It's also a perfect method to center a code with minimal lines of code.

   ```
   .center {
     display: grid;
     place-items: center;
   }
   ```

3. ## Positioning

    In this method we provide position relative to parent div and for child div position absolute with respect it's parent. Then add transform property accordingly.

    ```
    .center {
      position: relative;
    }
    .child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ```

4. ## By Using margin auto


    If child div and some particular width and height then providing margin auto will automatically set child `<div/>` in center. 

    ```
    .child {
      margin: 0 auto; /* Horizontally center */
    }
    ```

    Now if we provide display flex or grid to parent element, it will center in vertically as well.

    ```
    .center{
      display: flex or grid;
    }

    .child {
      margin: auto; 
    }
    ```

5. ## Text align (For inline elements only)


    This can only be used in for inline-elements.

    ```
    .child{
      text-align: center;
    }
    ```

These are some of the methods to center the `<div />`.