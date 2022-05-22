// @see https://developers.google.com/web/updates/2017/09/sticky-headers
document.addEventListener('sticky-change', e => {
    const title = e.detail.target; // title became sticky or stopped sticking
    const sticking = e.detail.stuck; // true when title is sticky

    title.classList.toggle('resume__position-title--stuck', sticking); // add class when sticking
});

function observeStickyTitleChange(container) {
    observeHeaders(container);
    observeFooters(container);
}

/**
 * Sets up an intersection observer to notify when elements with the class
 * `.sticky_sentinel--top` become visible/invisible at the top of the container.
 * @param {!Element} container
 */
function observeHeaders(container) {
    const observer = new IntersectionObserver((records, _) => {
        for (const record of records) {
            const targetInfo = record.boundingClientRect;
            const stickyTarget = record.target.parentElement.querySelector('.resume__position-title');
            const rootBoundsInfo = record.rootBounds;

            // Started sticking.
            if (targetInfo.bottom < rootBoundsInfo.top) {
                fireEvent(true, stickyTarget);
            }

            // Stopped sticking.
            if (targetInfo.bottom >= rootBoundsInfo.top &&
                targetInfo.bottom < rootBoundsInfo.bottom) {
                fireEvent(false, stickyTarget);
            }
        }
    }, {threshold: [0], root: null});

    // Add the top sentinels to each section and attach an observer.
    const sentinels = addSentinels(container, 'resume-position__sticky-sentinel--top');
    sentinels.forEach(el => observer.observe(el));
}

/**
 * Sets up an intersection observer to notify when elements with the class
 * `.sticky_sentinel--bottom` become visible/invisible at the bottom of the
 * container.
 * @param {!Element} container
 */
function observeFooters(container) {
    const observer = new IntersectionObserver((records, _) => {
        for (const record of records) {
            const targetInfo = record.boundingClientRect;
            const stickyTarget = record.target.parentElement.querySelector('.resume__position-title');
            const rootBoundsInfo = record.rootBounds;
            const ratio = record.intersectionRatio;

            // Started sticking.
            if (targetInfo.bottom > rootBoundsInfo.top && ratio === 1) {
                fireEvent(true, stickyTarget);
            }

            // Stopped sticking.
            if (targetInfo.top < rootBoundsInfo.top &&
                targetInfo.bottom < rootBoundsInfo.bottom) {
                fireEvent(false, stickyTarget);
            }
        }
    }, {threshold: [1], root: null});

    // Add the bottom sentinels to each section and attach an observer.
    const sentinels = addSentinels(container, 'resume-position__sticky-sentinel--bottom');
    sentinels.forEach(el => observer.observe(el));
}

/**
 * @param {!Element} container
 * @param {string} className
 */
function addSentinels(container, className) {
    return Array.from(container.querySelectorAll('.resume__position-title')).map(el => {
        const sentinel = document.createElement('div');
        sentinel.classList.add('resume-position__sticky-sentinel', className);

        return el.parentElement.appendChild(sentinel);
    });
}

/**
 * Dispatches the `sticky-event` custom event on the target element.
 * @param {boolean} stuck True if `target` is sticky.
 * @param {!Element} target Element to fire the event on.
 */
function fireEvent(stuck, target) {
    const e = new CustomEvent('sticky-change', {detail: {stuck, target}});
    document.dispatchEvent(e);
}

observeStickyTitleChange(document.querySelector('.resume'));
