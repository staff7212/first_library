import $ from '../core';

//меню инициализировано в вёрстке
//можно создать множество подобных, меняю id
$.prototype.dropdown = function() {
    for(let i = 0; i < this.length; i++) {
        const id = $(this[i]).getAttr('id');
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropdown();
