class Render {
  tagName;
  attributeName;
  attributeContent;
  tagText;
  constructor(
    inputTagName,
    inputAttributetName,
    inputAttributeContent,
    inputTagText
  ) {
    this.tagName = inputTagName;
    this.attributeName = inputAttributetName;
    this.attributeContent = inputAttributeContent;
    this.tagText = inputTagText;
  }
  add2html() {
    //const elem = document.getElementById("container");
    let newElement = document.createElement(this.tagName);
    newElement.setAttribute(this.attributeName, this.attributeContent);
    let newText = document.createTextNode(this.tagText);
    newElement.appendChild(newText);
    document.getElementById("container").appendChild(newElement);
  }
  clickAlert() {
    document.getElementById("container").addEventListener("click", function () {
      alert("ALERT!!!");
    });
  }
}

let htmlObject = new Render("p", "class", "firstP", "lorem ipsum");
htmlObject.add2html();
htmlObject.clickAlert();
