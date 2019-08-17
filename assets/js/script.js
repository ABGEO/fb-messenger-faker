"use strict";

// Elements.
let conversation = $('.conversation');

/**
 * Clear Conversation.
 */
$('button.clear-chat').click(function () {
    conversation.html(null);
});
