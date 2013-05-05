### jQuery Placeholder

Add the following class to your CSS:

    .placeholder { color: #bbbbbb; }

Add the following to your web page:

	<script src="jquery.placeholder.js"></script>

Add this to your JavaScript:

    $(document).ready(function() {
      $('input[placeholder]').placeholder();
    });
