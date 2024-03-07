export function getSlidesCTABtn (slideItems) {
    return slideItems.map((item) => item.querySelector('a') || false)
}