
# SVG performance testing

### **About this SVG experiment**

Wanting to test SVG performance I decided to create a dynamic SVG that could be edited with a colour change on hover. In order to really test SVG performance I decided to create an image with over 5000 paths and see what the SVG's could really do.
This is built with 100% vanilla JS,CSS and HTML.

![](images/clip.gif)

### **The journey**
**Stag one** 
Initially I started this journey how most people would. Each path of the SVG was assigned an inline fill and on hover would update to the selected SVG color(rgb) via an event listener.
A small amount of testing quickly indicated that this approach was too slow and I rethink was required.
using ```performance.now()``` I tested both rgb and hex colors and found out that using straight hex increased the performance.

**stage 2**
After doing some further testing I was still not happy with the performance and decided to go down the CSS route. Browsers paints were taking far too long with fill updates.
So I removed the fill attribute completely and added a CSS class that would update the class on hover.
This did increase the performance a lot and with Chrome Tools Performance panel I could now throttle the CPU down to 4x Slowdown. Another bonus is that just by moving the fills I saved around 60kb of file size.

**stage 3**
Beings struck by inspiration, though it would be cool to have a 'live' building that could be messed with in real time and be able to see other people leaving their mark. I'd most likely do this with Firebase so I added an array with all the color states.
To keep the speed when a path is hovered over a new color array is updated at the index. Then the render function compares the old state to the new state and creates a new the class only the CSS class only where there is a difference.
This proved so effective that the building is still paintable even when the (my) cpu is throttled down to X6 slowdown.

**Stage 4 and beyond**
Since building this there is a number of further potentual performance upgrades that I'd like to try.
The first being updating the data tags only and using the css to update based on data attributes instead of building a new class when the path has been hovered on...
```
[data-face="1"] {
  /* Some cool color goes here */
}
```
The other update I'd love to do is finally get Firebase connected as it would be fun to see others mess around with the site.


### **Build With**
 CSS, JavaScript and HTML (🍦 all vanilla)  

### **Live site**
## [click here :)](https://samseabourn.github.io/SVG-Building-Experiment/)

