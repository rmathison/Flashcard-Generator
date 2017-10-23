var Basic = function(front, back) {
    this.front = front;
    this.back = back;
}

Basic.prototype.showFront = function() {
    console.log("Front: " + this.front);
}

Basic.prototype.showBack = function() {
    console.log("Back: " + this.back);
}

module.exports = Basic;