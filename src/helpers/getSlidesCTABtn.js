export function getSlidesCTABtn (slideItems) {
    return slideItems.map((item) => item.querySelector('.ui-button.-cta') || false)
}