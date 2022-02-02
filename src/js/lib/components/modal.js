import $ from '../core';

$.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
       const target = $(this[i]).getAttr('data-target');

       $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(700);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${calcScroll()}px`;
       });

       const closeElement = document.querySelectorAll(`${target} [data-close]`);
       closeElement.forEach(elem => {
           $(elem).click(() => {
               $(target).fadeOut(500);
               document.body.style.overflow = '';
               document.body.style.marginRight = 0;
               if (created) {
                    setTimeout(() => {
                        document.querySelector(target).remove();
                    }, 500);
               }
           });
       });
   
       $(target).click((e) => {
           if (e.target.classList.contains('modal')) {
               $(target).fadeOut(500);
               document.body.style.overflow = '';
               document.body.style.marginRight = 0;
               if (created) {
                    setTimeout(() => {
                        document.querySelector(target).remove();
                    }, 500);
                }
            }
       });
    }
};

const calcScroll = () => {

    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

$("[data-toggle='modal']").modal();

//динамическое создание модалки
$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        //btns = {count: num, settings:[[textBtn, classNames=[], close, callback]]};
        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            let [textBtn, classNames, close, callback] = btns.settings[j];
            btn.classList.add('btn', ...classNames);
            btn.textContent = textBtn;
            if (close) {
                btn.setAttribute('data-close', 'true');
            }
            if (callback && typeof callback === 'function') {
                btn.addEventListener('click', callback);
            }
            buttons.push(btn);
        }

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.append(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(700);
    }
};

// $.prototype.modal = function(created) - created - аргумент, указывающий 
//создано программо или в вёрстке, для дальнейшего удаления элемента