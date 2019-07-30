// variable

let teamWrapper = document.querySelector(".team__wrapper");
let designation = document.querySelector(".team__designation");
console.log(teamWrapper);
console.log(designation);

class Information {
    async getInfo() {
        let data = await fetch("https://randomuser.me/api/?results=4");
        let info = await data.json();
        info = info.results;
        // return console.log(info);

        info = info.map(item => {
            let { first, last } = item.name;
            let { large } = item.picture;
            return { first, last, large };
        });
        return info;
    }
}

class SetInformation {
    setItem(item) {
        let df = document.createDocumentFragment();
        console.log(df);
        let innerHtml = "";
        item.forEach(item => {
            innerHtml += `
        <img class="team__img" src=itme.large/>
        <div class="team__name">
            <h3>${item.first} ${item.last}</h3>
        </div>
    `;
            designation.insertAdjacentHTML("beforebegin", innerHtml);
        });
        console.log(df);
        console.log(teamWrapper);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const info = new Information();
    const setif = new SetInformation();

    info.getInfo().then(item => {
        setif.setItem(item);
    });
});

// console.log(info);

// getInfo();

// let innerHtml = "";
// data.forEach(item => {
//     innerHtml += `
//         <img class="team__img" src=/>
//         <div class="team__name">
//             <h3>ANNE HATHAWAY</h3>
//         </div>
//         <div class="team__designation">
//             <p>CEO / Marketing Guru</p>
//         </div>
//     `
// })
// imgtest.innerHTML = htmlElement;
