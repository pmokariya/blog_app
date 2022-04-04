// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Trix wants to be global
window.Trix = require("trix")

// Include ActionText
require("@rails/actiontext")
// Include our button customization
require("application/trix_customization")
// Ensure the app/javascript/controllers directory is included since we're using
// Stimulus
import "controllers"
import "controllers"
