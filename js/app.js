$('.add_question_repeater_field_item').click(function(){
    let question_repeater_field_item = $('#question_repeater_field_item').clone(true);
    question_repeater_field_item.removeClass('empty_question_repeater_field_item');

    $('table.question_repeater_field_table tbody').append(question_repeater_field_item);
})
$('.move_to_trash').click(function(){
    $(this).parent().parent().remove();
})