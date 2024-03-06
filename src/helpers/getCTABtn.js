export function getCTABtn (slideItems) {
    return slideItems.map((item) => {
        return item.querySelector('.ui-button.-cta') || false;
    })
}