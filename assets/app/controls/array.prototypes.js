Array.prototype.filterByField = function (field, value)
{
    var list = this;
    var listReturn = [];
    list.forEach(function(item)
    {
        if (item[field] === value)
        {
            listReturn.push(item);
        }
    });
    return listReturn;
};