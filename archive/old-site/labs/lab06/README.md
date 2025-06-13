# itws1100-zhengm4-lab06

In this lab, I learned how to implement jquery elements into the HTML.

[click for link to webpage](http://zhengm4rpi.eastus.cloudapp.azure.com/iit/)

[click for link to lab page](./ITWS1100-lab6-jQuery/lab6.html)

[click for link to github repo](https://github.com/RPI-ITWS/itws1100-zhengm4)

Below is my explanation for Problem 4b:

**Problem 4b:** What happens when you click on the new li? Why?

Given my original code to solve Problem 3:

    ```
    $("#labList li").click(function() {
    if ($(this).hasClass("red")) {
        $(this).removeClass("red");
    }
    else {
        $(this).addClass("red");
    }
    });
    ```

When the new li is added, the list item doesn't turn red because when loaded, the function only binds itself to the list items already on the page. Any new list items aren't binded to the function. In order to fix this, it would be better to use the `.on()` method to bind the event to any dynamically added list items added into the HTML like
this:

    ```
    $("#labList").on("click", "li", function() {
      if ($(this).hasClass("red")) {
         $(this).removeClass("red");
      }
      else {
         $(this).addClass("red");
      }
    });

    ```
