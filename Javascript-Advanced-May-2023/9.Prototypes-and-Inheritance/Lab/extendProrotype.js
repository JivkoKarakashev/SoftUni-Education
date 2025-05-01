function extendProrotype(classExtd) {
    classExtd.prototype.species = 'Human';
    classExtd.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}