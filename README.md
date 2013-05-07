### jQuery Placeholder

Tested in Internet Explorer 6, 7, 8 and 9.

Add the following to your web page:

	<script src="jquery.placeholder.js"></script>

Add this to your JavaScript:

    $(document).ready(function() {
      $('input[placeholder]').placeholder();
    });

Add the following class to your CSS:

    .placeholder { color: #999999; }

The provided CSS is just an example (it sets the text color to grey). The 
`placeholder` class can be styled however you like.