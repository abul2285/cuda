var data = [];

for(let i = 0; i<5; i++){
    var obj = {};
    obj.id = i+1;
    obj.name = faker.name.findName();
    obj.email = faker.internet.email();
    obj.paragraph = faker.lorem.paragraphs();
    obj.image = faker.image.cats();
    data.push(obj)
}

data = data.map((item)=>{
    const {image,name} = item;
    console.log(item)
    return {image,name};
})
console.log(data)

let imgtest = document.querySelector('.imgTest')
let imgBox = document.createElement('div');
let img = document.createElement('img');
let htmlElement = "";
data.forEach(item=>{
    htmlElement += `
    <img src= ${item.image}>
    `
})
imgtest.innerHTML = htmlElement;
console.log(imgBox);
console.log(htmlElement);