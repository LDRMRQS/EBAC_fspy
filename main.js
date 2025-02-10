$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const adressNewTask = $('#task-name').val();
        $('#task-list').append(`<li>${adressNewTask}</li>`);
        $('#task-name').val('');
    })
    $('#task-list').on('click','li', function() {
        $(this).toggleClass('completed');
    })
})