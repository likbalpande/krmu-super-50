{
    /* 
<body>
    <div id='root'>
        <img src='...'/>
        <div>
            <h2>...</h2>
            <p>...</p>
            <p>...</p>
        </div>
    </div>
</body> 
*/
}

// const data = {
//     imgUrl: "...",
//     name: "Likhilesh",
//     batch: "CSE-ABCD",
//     college: "KRMU",
// };

// const rootElement = document.getElementById("root");

// const imageElement = document.createElement("img");
// imageElement.src = data.imgUrl;

// rootElement.appendChild(imageElement);

// const newDiv = document.createElement("div");
// const heading = document.createElement("h2");
// heading.innerText = data.name;
// newDiv.appendChild(heading);
// rootElement.appendChild(newDiv);

// ----------------------------

const data = {
    imgUrl: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Likhilesh",
    batch: "CSE-ABCD",
    college: "KRMU",
};

const rootElement = document.getElementById("root");

rootElement.innerHTML = `
<img id='user-img' src='${data.imgUrl}'>
<div id='..'>
    <h2>${data.name}</h2>
    <p>${data.batch}</p>
    <p>${data.college}</p>
</div>
`;
