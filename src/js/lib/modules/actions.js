import $ from '../core';

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        
        if(content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML; 
        }
    }
    return this;
};

//элемент по переданному индексу
$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

//получение индекса элемента в своем родителе
$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];
    
    const findMyIndex = (item) => {
        return item === this[0];
    };

    return childs.findIndex(findMyIndex);
};

//нахождение элемента по селектору внутри найденых
$.prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

         numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

//тот же find только короче и проще, 
//но для одного элемента
$.prototype.findOneEl = function(selector) {
    const newObj = this[0].querySelectorAll(selector);

    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    Object.assign(this, newObj);
    this.length = newObj.length;
    return this;
};