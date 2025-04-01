import { setAttrs } from './setAttrs';
import { removeAttrs } from './removeAttrs';

/**
 * Retrieves a flat array of anchor elements (`<a>` tags) from a single slide.
 *
 * @param {HTMLElement} slide - A slide element.
 * @returns {HTMLAnchorElement[]} A flat array of anchor elements found within the slide.
*/
export function getSlideAnchors(slide) {
    return Array.from(slide.querySelectorAll('a'));
}


/**
 * Enables a list of anchor elements (`<a>` tags) by removing specific attributes.
 *
 * This function iterates through an array of anchor elements and removes the
 * `aria-hidden` and `tabindex` attributes, effectively making the anchors
 * accessible and interactive.
 *
 * @param {HTMLAnchorElement[]} anchors - An array of anchor elements to enable.
 */
export function enableAnchors(anchors) {
    anchors.forEach((anchor) => {
        removeAttrs(anchor, ['aria-hidden', 'tabindex']);
    });
}


/**
 * Disables a list of anchor elements (`<a>` tags) by adding specific attributes.
 *
 * This function iterates through an array of anchor elements and adds the
 * `aria-hidden` and `tabindex="-1"` attributes, effectively making the anchors
 * inaccessible and non-interactive.
 *
 * @param {HTMLAnchorElement[]} anchors - An array of anchor elements to disable.
 */
export function disableAnchors(anchors) {
    anchors.forEach((anchor) => {
        setAttrs(anchor, {
            'aria-hidden': 'true',
            'tabindex': '-1',
        });
    });
}
