function trackEvent(category, action) {
    ga('send', {
        'hitType': 'event',
        'eventCategory': category,
        'eventAction': action
    });
}
