class Banner {
  constructor(message, width = message.length) {
    this.message = message;
    
    if (width < message.length) {
      this.width = width
      this.message = message.substr(0, width);
    } else {
      this.width = width;
      this.message = message
    } 
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return '+-' + '-'.repeat(this.width) + '-+';
  }

  emptyLine() {
    return '| ' + ' '.repeat(this.width) + ' |';
  }

  messageLine() {
    let padSide = (this.width - this.message.length) / 2;
    let message = this.message.padStart(padSide);
    message = message.padEnd(this.width);
    return `| ${message} |`;
  }
}



let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+

let banner3 = new Banner('hi', 50);
banner3.displayBanner();

let banner4 = new Banner('To boldly go where no one has gone before.', 5);
banner4.displayBanner();