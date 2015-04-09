:lipstick: heroku-gulp-boilerplate :lipstick:
===============

## Overview

`heroku` に `gulp` を使ったプロジェクトを使う場合のboilerplate。

gulp を使った `server` だと、`localhost` で起動するためかうまくいかない。

よって、 簡易サーバーのnodeモジュール `http-server` で起動するようにしている。

local では gulp を使って server を起動し、

heroku では、 http-server を使って起動している。


## Tools

* ES6
* gulp
* browserify

## Getting Started

set up the necessary files.

    npm i

run a gulp

    gulp server

Please enter the following URL to launch the browser.

    http://localhost:4567/

## Port 4567 is unavailable error.

Port 4567 is unavailable.

    lsof -i -P | grep 4567

    kill -9 <pid>

## Directory Structure

    ├── build
    │   └── build files
    ├── gulp
    │   └── tasks
    ├── node_modules
    └── source
        ├── images
        ├── javascripts
        └── stylesheets

## Author

[hisasann](https://github.com/hisasann)

:arrow_up: enjoy! :arrow_up:
