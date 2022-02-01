import './lib/lib';

//$
//$('.active');

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
// $('.one').setAttr('data-www', 'qaz');
//console.log($('.one').getAllAttr());
// $('.one').removeAllAttr();

//html
// console.log($('button').html());
// $('button').html('нажми');

//eq
// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');
// });

// index
// $('div').click(function() {
//     console.log($(this).index());
// });

//find
// console.log($('.three').find('.more'));

//closest
//console.log($('.some').closest('.thee'));

//sibling
// console.log($('.moree').sibling());
// console.log($('.three').siblings());

//effects
// $('button').fadeIn(2000);
// $('button').fadeOut(2000);

$('#first').click(() => {
    $('div .w-500').eq(0).fadeToggle(1000);
});

$('[data-count="second"]').click(() => {
    $('div .w-500').eq(1).fadeToggle(1000);
});

$('button').eq(2).click(() => {
    $('div .w-500').fadeToggle(1000);
});