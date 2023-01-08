class Computer {
  processor;
  graphicsCard;
  ram;
  hardDisk;
  screen;
  name;
  constructor(
    inputPocessor,
    inputGraphicsCard,
    inputRam,
    inputHardDisk,
    inputScreen,
    inputName
  ) {
    this.processor = inputPocessor;
    this.graphicsCard = inputGraphicsCard;
    this.ram = inputRam;
    this.hardDisk = inputHardDisk;
    this.screen = inputScreen;
    this.name = inputName;
  }
}

class Render extends Computer {
  constructor(computer) {
    super(
      computer.processor,
      computer.graphicsCard,
      computer.ram,
      computer.hardDisk,
      computer.screen,
      computer.name
    );
  }
  htmlPrint() {
    let div = document.createElement("div");
    let str =
      this.processor +
      " " +
      this.graphicsCard +
      " " +
      this.ram +
      " " +
      this.hardDisk +
      " " +
      this.screen +
      " " +
      this.name;
    let newText = document.createTextNode(str);
    div.appendChild(newText);
    document.body.appendChild(div);
  }
}

let computer1 = new Computer("Intel", "Radeon", "64", "256", "LG", "Dell");
let computer2 = new Computer("AMD", "Radeon", "60", "200", "Sumsung", "HP");
let computer3 = new Computer("Intel", "GoForce", "68", "256", "Apple", "Mac");

let computers = [computer1, computer2, computer3];
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
button1.innerText = computer1.name;
button2.innerText = computer2.name;
button3.innerText = computer3.name;
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);

button1.addEventListener("click", () => {
  let newRender = new Render(computers[0]);
  newRender.htmlPrint();
});
button2.addEventListener("click", () => {
  let newRender = new Render(computers[1]);
  newRender.htmlPrint();
});
button3.addEventListener("click", () => {
  let newRender = new Render(computers[2]);
  newRender.htmlPrint();
});
