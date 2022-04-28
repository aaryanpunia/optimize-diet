const subset = require('./SubsetSum');
const compareHash = require('./HashLookup')
const _ = require('lodash');


function local_avg(items) {
    avg = 0;
    if (items.length == 0) {
        return 0;
    }
    for (var i = 0; i < items.length; i++) {
        avg += items[i]["calories"];
    }
    return avg / items.length;
}

function KcalCombo(menu, target, combo_size, limit, range) {
    var res_arr = [];
    var kcal_arr = [];
    for (var i = 0; i < limit && i < menu.length; i++) {
        if (menu[i]['nutrition']['items'].length == 0) {
            limit++;
            continue;
        }
        var tableItem = {};
        tableItem['name'] = menu[i]['name'];
        tableItem['kcal'] = local_avg(menu[i]['nutrition']['items']);
        kcal_arr.push(tableItem);
        res_arr.push(local_avg(menu[i]['nutrition']['items']));
    }
    var result = [];
    var res = subset(res_arr, target, range, combo_size);
    if (res.length == 0) {
        return { "possible_combinations": "None" }
    }
    res = res.slice(0, limit);
    for (var i = 0; i < res.length; i++) {
        if (res[i].length > 0) {
            var table = []
            for (var j = 0; j < res[i].length; j++) {
                for (var k = 0; k < kcal_arr.length; k++) {
                    var result_phrase = kcal_arr[k]['name'] + res[i][j].toString();
                    var phrase_tocheck = kcal_arr[k]['name'] + kcal_arr[k]['kcal'].toString();
                    if (compareHash(result_phrase, phrase_tocheck)) {
                        if (res[i][j] == 0) continue;
                        var tableItem = {};
                        tableItem['name'] = kcal_arr[k]['name'];
                        tableItem['kcal'] = res[i][j];
                        table.push(tableItem);
                        break;
                    }
                }
            }
            result.push(table);
        }
    }
    result = _.uniqWith(result, _.isEqual);
    result = _.dropWhile(result, function (r) {
        r.length > combo_size;
    })
    return result;
}

module.exports = KcalCombo;