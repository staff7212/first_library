import $ from '../core';

$.prototype.getAttr = function(attribute) {
    for (var i = 0; i < this.length; i++) {
        if (!this[i].hasAttribute(attribute)){
            continue;
        }
        return this[0].getAttribute(attribute);
    }
};

$.prototype.setAttr = function(attribute, value) {
    for (var i = 0; i < this.length; i++) {
        this[i].setAttribute(attribute, value);
    }
};

$.prototype.toggleAttr = function(attribute, value) {
    for (var i = 0; i < this.length; i++) {
        if (!this[i].hasAttribute(attribute)){
            this[i].setAttribute(attribute, value);
        } else {
            this[i].removeAttribute(attribute);
        }
    }
    return this;
};

$.prototype.removeAttr = function(attribute) {
    for (var i = 0; i < this.length; i++) {
        if (!this[i].hasAttribute(attribute)) {
            continue;
        }
        this[i].removeAttribute(attribute);
    }
    return this;
};

$.prototype.getAllAttr = function() {
    let attributes = [];
    for (var i = 0; i < this.length; i++) {

        for (let attr of this[i].attributes) {
            attributes.push(attr.name);
        }
    }
    return attributes;
};

$.prototype.removeAllAttr = function() {
    for (var i = 0; i < this.length; i++) {
        let attributes = [];

        for (let attr of this[i].attributes) {
            attributes.push(attr.name);
        }

        attributes.forEach(attr => {
            this[i].removeAttribute(attr);
        });
    }
    return this;
};


