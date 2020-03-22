const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data);

// Recibira un objeto de esta forma
//{
//  tag : 'h1',
//  attr: {
//      class : 'title
//  }
//}
const attrsToString = (obj = {}) => {
    const keys = Object.keys(obj);
    const attrs = [];
    for (let i = 0; i < keys.length; i++) {
        let attr = keys[i];
        attrs.push(`${attr}="${obj[attr]}"`);
    }

    const string = attrs.join('');
    return string;
};
// "tag="h1 class="title"";

const tagAttrs = obj => (content = "") =>
    `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`;

//const tag = t => content => `<${t}>${content}</tr>`;
const tag = t => {
    if (typeof t === 'string') {
        tagAttrs(t)
    }
}

//console.log(tag('h1')('Title')); // <h1>Title</h1>

let description = $('#description');
let carbs = $('#carbs');
let calories = $('#calories');
let proteins = $('#proteins');

let list = [];

description.keypress(() => {
    description.removeClass('is-invalid');
});

carbs.keypress(() => {
    description.removeClass('is-invalid');
});

calories.keypress(() => {
    description.removeClass('is-invalid');
});

proteins.keypress(() => {
    description.removeClass('is-invalid');
});

const validateInputs = () => {
    // description.val() -> Obtener valor en Jquery
    //if (description.val() === '') {
    //    description.addClass('is-invalid');
    //}
    description.val() ? '' : description.addClass('is-invalid');
    carbs.val() ? '' : carbs.addClass('is-invalid');
    calories.val() ? '' : calories.addClass('is-invalid');
    proteins.val() ? '' : proteins.addClass('is-invalid');

    if (description.val() && calories.val() && carbs.val() && calories.val() && proteins.val()) {
        add();
    }
};

const add = () => {
    const newItem = {
        description: description.val(),
        // si pones + delante te hace cast a 
        // entero :
        // calories: +calories.val(),
        calories: parseInt(calories.val()),
        carbs: parseInt(carbs.val()),
        proteins: parseInt(proteins.val())
    };

    list.push(newItem);
    console.log(list);
    cleanInputs();
};

const cleanInputs = () => {
    description.val('');
    calories.val('');
    carbs.val('');
    proteins.val('');
};