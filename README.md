rinku
=====

A simple toolbar that exposes `<link rel="alternate">` tags in the `<head>`
as in-page icon links based on their type and title.

eg

    <link rel="alternate" type="application/pdf" href="http://foo.com/some.pdf">

becomes a pdf file icon in an `<a>`:

    <a href="http://foo.com/some.pdf"><span class="icon-pdf">pdf</span></a>

Current Type Support
--------------------

 * application/pdf
 * application/json
 * text/plain
 * text/html, title="github"

Usage
-----

    <link rel="stylesheet" href="dist/rinku.min.css">
    <script src="dist/rinku.min.js"></script>
    <script>rinku.init();</script>
