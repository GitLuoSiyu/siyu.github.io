(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{360:function(e,t,s){"use strict";s.r(t);var o=s(17),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://travis-ci.org/indexzero/http-server",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/travis/indexzero/http-server.svg?style=flat-square",alt:"build status"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://david-dm.org/indexzero/http-server",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/david/indexzero/http-server.svg?style=flat-square",alt:"dependencies status"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/http-server.svg?style=flat-square",alt:"npm"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://github.com/indexzero/http-server",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/license/indexzero/http-server.svg?style=flat-square",alt:"license"}}),s("OutboundLink")],1)]),e._v(" "),s("h1",{attrs:{id:"http-server-a-command-line-http-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-server-a-command-line-http-server"}},[e._v("#")]),e._v(" http-server: a command-line http server")]),e._v(" "),s("p",[s("code",[e._v("http-server")]),e._v(" is a simple, zero-configuration command-line http server.  It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/nodeapps/http-server/raw/master/screenshots/public.png",alt:""}})]),e._v(" "),s("h1",{attrs:{id:"installing-globally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-globally"}},[e._v("#")]),e._v(" Installing globally:")]),e._v(" "),s("p",[e._v("Installation via "),s("code",[e._v("npm")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" npm install http-server -g\n")])])]),s("p",[e._v("This will install "),s("code",[e._v("http-server")]),e._v(" globally so that it may be run from the command line.")]),e._v(" "),s("h2",{attrs:{id:"running-on-demand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-on-demand"}},[e._v("#")]),e._v(" Running on-demand:")]),e._v(" "),s("p",[e._v("Using "),s("code",[e._v("npx")]),e._v(" you can run the script without installing it first:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" npx http-server [path] [options]\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" http-server [path] [options]\n")])])]),s("p",[s("code",[e._v("[path]")]),e._v(" defaults to "),s("code",[e._v("./public")]),e._v(" if the folder exists, and "),s("code",[e._v("./")]),e._v(" otherwise.")]),e._v(" "),s("p",[s("em",[e._v("Now you can visit http://localhost:8080 to view your server")])]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Caching is on by default. Add "),s("code",[e._v("-c-1")]),e._v(" as an option to disable caching.")]),e._v(" "),s("h2",{attrs:{id:"available-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-options"}},[e._v("#")]),e._v(" Available Options:")]),e._v(" "),s("p",[s("code",[e._v("-p")]),e._v(" or "),s("code",[e._v("--port")]),e._v(" Port to use (defaults to 8080)")]),e._v(" "),s("p",[s("code",[e._v("-a")]),e._v(" Address to use (defaults to 0.0.0.0)")]),e._v(" "),s("p",[s("code",[e._v("-d")]),e._v(" Show directory listings (defaults to "),s("code",[e._v("true")]),e._v(")")]),e._v(" "),s("p",[s("code",[e._v("-i")]),e._v(" Display autoIndex (defaults to "),s("code",[e._v("true")]),e._v(")")]),e._v(" "),s("p",[s("code",[e._v("-g")]),e._v(" or "),s("code",[e._v("--gzip")]),e._v(" When enabled (defaults to "),s("code",[e._v("false")]),e._v(") it will serve "),s("code",[e._v("./public/some-file.js.gz")]),e._v(" in place of "),s("code",[e._v("./public/some-file.js")]),e._v(" when a gzipped version of the file exists and the request accepts gzip encoding.")]),e._v(" "),s("p",[s("code",[e._v("-e")]),e._v(" or "),s("code",[e._v("--ext")]),e._v(" Default file extension if none supplied (defaults to "),s("code",[e._v("html")]),e._v(")")]),e._v(" "),s("p",[s("code",[e._v("-s")]),e._v(" or "),s("code",[e._v("--silent")]),e._v(" Suppress log messages from output")]),e._v(" "),s("p",[s("code",[e._v("--cors")]),e._v(" Enable CORS via the "),s("code",[e._v("Access-Control-Allow-Origin")]),e._v(" header")]),e._v(" "),s("p",[s("code",[e._v("-o")]),e._v(" Open browser window after starting the server")]),e._v(" "),s("p",[s("code",[e._v("-c")]),e._v(" Set cache time (in seconds) for cache-control max-age header, e.g. "),s("code",[e._v("-c10")]),e._v(" for 10 seconds (defaults to "),s("code",[e._v("3600")]),e._v("). To disable caching, use "),s("code",[e._v("-c-1")]),e._v(".")]),e._v(" "),s("p",[s("code",[e._v("-U")]),e._v(" or "),s("code",[e._v("--utc")]),e._v(" Use UTC time format in log messages.")]),e._v(" "),s("p",[s("code",[e._v("-P")]),e._v(" or "),s("code",[e._v("--proxy")]),e._v(" Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com")]),e._v(" "),s("p",[s("code",[e._v("-S")]),e._v(" or "),s("code",[e._v("--ssl")]),e._v(" Enable https.")]),e._v(" "),s("p",[s("code",[e._v("-C")]),e._v(" or "),s("code",[e._v("--cert")]),e._v(" Path to ssl cert file (default: "),s("code",[e._v("cert.pem")]),e._v(").")]),e._v(" "),s("p",[s("code",[e._v("-K")]),e._v(" or "),s("code",[e._v("--key")]),e._v(" Path to ssl key file (default: "),s("code",[e._v("key.pem")]),e._v(").")]),e._v(" "),s("p",[s("code",[e._v("-r")]),e._v(" or "),s("code",[e._v("--robots")]),e._v(" Provide a /robots.txt (whose content defaults to "),s("code",[e._v("User-agent: *\\nDisallow: /")]),e._v(")")]),e._v(" "),s("p",[s("code",[e._v("-h")]),e._v(" or "),s("code",[e._v("--help")]),e._v(" Print this list and exit.")]),e._v(" "),s("h2",{attrs:{id:"magic-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#magic-files"}},[e._v("#")]),e._v(" Magic Files")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("index.html")]),e._v(" will be served as the default file to any directory requests.")]),e._v(" "),s("li",[s("code",[e._v("404.html")]),e._v(" will be served if a file is not found. This can be used for Single-Page App (SPA) hosting to serve the entry page.")])]),e._v(" "),s("h1",{attrs:{id:"development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),s("p",[e._v("Checkout this repository locally, then:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i\n$ node bin/http-server\n")])])]),s("p",[s("em",[e._v("Now you can visit http://localhost:8080 to view your server")])]),e._v(" "),s("p",[e._v("You should see the turtle image in the screenshot above hosted at that URL. See\nthe "),s("code",[e._v("./public")]),e._v(" folder for demo content.")])])}),[],!1,null,null,null);t.default=a.exports}}]);