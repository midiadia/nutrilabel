Midíadía Nutrition Label
=========

With this small jQuery plugin, you can add a nutritional values label in your site using Midíadía's API result.

Installation
=========

To use the widget in your page between `<head></head>` tag put the CSS file.

    <link rel="stylesheet" href="//api.midiadia.com/nutrilabel/nutrilabel.css">

Then, preferably just before `</body>` close tag, put the javascript file 

    <script src="//api.midiadia.com/nutrilabel/nutrilabel.js"></script>

Now you are ready to feed the widget and fire it.

Just put the JSON response that returns the Midíadía API into a variable:

      var nutriLabelDataStr = 'JSON_CONTENT';

Now add a blank element wherever you want to put the widget on your page.

    <div id="divNutriLabel" class="nutrilabeldemo">
            </div> 
            
Then enable the widget on this element with the given data:

    $('#divNutriLabel').nutritionLabel({
	   'nutriLabelData': $.parseJSON(nutriLabelDataStr),
    });

The widget is ready to use.

Example
=========
For the usage see nutrilabel.html file in the repository.

Notes
=========

 1. https://www.midiadia.com/nutrilabel/ is our CDN that's updated periodically. To use the latest version of the widget, always use this CDN.
 
 2. A SASS file is provided with the repository. But if you want to customize the appearance always **override** the current CSS, not **change** to be able to use the widget without any problems after any update.

Help
=========
For any problems about the widget, open an issue at Github.
