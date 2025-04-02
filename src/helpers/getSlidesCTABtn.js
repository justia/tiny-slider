import { setAttrs } from './setAttrs';
import { removeAttrs } from './removeAttrs';

/**
 * Retrieves an object where each key is a slide element and the value is an array of anchor elements (`<a>` tags) within that slide.
 *
 * This function iterates through an array of slide elements and maps each slide
 * to its corresponding array of anchor elements.
 *
 * @param {HTMLElement[]} slides - An array of slide elements.
 * @returns {Object<HTMLElement, HTMLAnchorElement[]>} An object mapping each slide to its array of anchor elements.
 */
export function getSlidesAnchors(slides) {
    return slides.reduce((acc, slide, idx) => {
        acc[idx] = getSlideAnchors(slide);
        return acc;
    }, {});
}

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
