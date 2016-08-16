'use strict';
define([], function() {

  return {
    paths : {
      'marked'        : "vendor/marked/lib/marked",
      'ngMarked'      : "vendor/angular-marked/dist/angular-marked"
    },

    shims : {
      'ngMarked'      : { deps: ['marked','angular']}
    }

  }
});
