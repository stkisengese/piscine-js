const escapeStr = "`\\/\"'";
const arr = Object.freeze([4, '2']);
const obj = Object.freeze({
    str : "Hello",
    num : 42,
    bool : false,
    undef : undefined,
});
const nested = deepFreeze({
    arr : [4, undefined, '2'],
    obj : {
        str : "Hello",
        num : 42,
        bool : false,
    },
});

function deepFreeze(object) {
    Object.freeze(object);
    Object.keys(object).forEach(key => {
        if (typeof object[key] === 'object' && object[key]!== null) {
            deepFreeze(object[key]);
        }
    });
    return object;
}

// console.log(nested.obj.update = 5)
// console.log(nested)