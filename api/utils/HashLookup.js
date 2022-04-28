hashThis = function (phrase) {
    var hash = 0, i, chr;
    if (phrase.length === 0) return hash;
    for (i = 0; i < phrase.length; i++) {
        chr = phrase.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

hashCode = function (name) {
    return hashThis(name)
}

compareHash = function (one, two) {
    if (hashCode(one) === hashCode(two)) {
        return true;
    }
    return false;
}

module.exports = compareHash;