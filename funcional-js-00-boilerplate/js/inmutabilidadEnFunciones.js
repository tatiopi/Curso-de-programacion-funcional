const addToList = (list, item, quantity) => {
    list.push({
        item,
        quantity
    });

    return list;
}

const addToListNew = (list, item, quantity) => {
    const newList = JSON.parse(JSON.stringify(list));
    //let list_ = [...list];
    newList.push({
        item,
        quantity
    });

    return newList;
}