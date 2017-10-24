var ClozeCard = function(cloze, partial, fullText) {
    this.cloze = cloze;
    this.partial = partial;
    this.fullText = fullText;
}

ClozeCard.prototype.showPartial = function() {
    console.log("Complete: " + this.partial);
}

ClozeCard.prototype.showCloze = function() {
    console.log("Answer: " + this.cloze);
}

module.exports = ClozeCard;