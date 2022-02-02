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

//classes
$('#first').click(() => {
    $('div .w-500').eq(0).fadeToggle(1000);
});

$('[data-count="second"]').click(() => {
    $('div .w-500').eq(1).fadeToggle(1000);
});

$('button').eq(2).click(() => {
    $('div .w-500').fadeToggle(1000);
});

//динамическое создание dropdown menu
$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id='dropdownMenu'>Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenu">
            <a href="#" class="dropdown-item">Action #1</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>
    `
);
$('#dropdownMenu').dropdown();
//btns = {count: num, settings:[[textBtn, classNames=[], close, callback]]};
//dynamic modal window
$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title #3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nihil a velit esse iste repellendus accusantium quo numquam maiores accusamus praesentium quas non, ipsa ab dignissimos harum odit! Fuga, adipisci.',
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Предупреждение');
                }
            ]

        ]
    }
}));

