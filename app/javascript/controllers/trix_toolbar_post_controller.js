// app/javascript/controllers/trix_toolbar_post_controller.js
import { Controller } from "stimulus"

export default class extends Controller {

    connect() {

        // Grab a reference to the toolbar(s) on the page.
        const toolbar = this.element.previousSibling
        // HTML for our buttons
        const h2ButtonHTML = '<button type="button" class="trix-button" data-trix-attribute="heading" title="Subheading">H2</button>'
        const h3ButtonHTML = '<button type="button" class="trix-button" data-trix-attribute="subHeading" title="Subheading">H3</button>'
        // Only apply event listeners once to the toolbars
        const once = {
            once: true
        }

        addEventListener("trix-initialize", function(event) {
            const sibling1 = toolbar.querySelector(".trix-button--icon-increase-nesting-level")
            sibling1.insertAdjacentHTML("afterend", h2ButtonHTML)
            const sibling2 = toolbar.querySelector("[data-trix-attribute='heading']")
            sibling2.insertAdjacentHTML("afterend", h3ButtonHTML)
        }, once)
    }
}