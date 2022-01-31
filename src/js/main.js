import './lib/lib';

$('.active');

//handlers
// $('.two').on('click', sayHello);
// $('.two').off('click', sayHello);
// $('.two').click(sayHello);
// $('button').on('click', function() {
//     $(this).toggleClass('active');
//     $('.one').toggle();
// });

function sayHello() {
    console.log('Hello');
}

//attr
$('.one').setAttr('data-www', 'qaz');
//console.log($('.one').getAllAttr());
$('.one').removeAllAttr();

//html
console.log($('button').html());
$('button').html('нажми');

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

console.log($('.three').find('.more'));



