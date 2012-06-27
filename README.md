jQuery.Sprite
=============

jQuery plugin what move html element without Javascript coding.

<a href="http://akazah.github.com/jQuery.Sprite.js/test.html" >Sample page</a>

## 1.Put this bottom of `<body></body>`.
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script><script src="jquery.sprite.js"></script><script>var tm = setInterval("loop()",$("body").data("fps"));function loop(){$(".sprite").jqs_nMove();}</script>


## 2.Set framerate.

    <body data-fps="fps">

ex)
    `<body data-fps"100">` # frame will reload once per 100 mili seconds.


## 3.Set class and move amount

    <style>
    .sprite{position:fixed;}
    </style>

    <div class="sprite" data-x="amount">
    <div class="sprite" data-y="amount">
    <div class="sprite" data-x="amount" data-y="amount">

ex)
'<div class="sprite" data-x="2" data-y="-1">'


If you want to set first postion use css(top%left).
sprite class is fixed positioned.

Done. Reload your browser.