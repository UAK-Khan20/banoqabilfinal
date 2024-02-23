// let Access_key = "7VwUa6DoQX9goLfjdp7fm8dodhxtlqcNIsUjkzhyNjY";
let Access_key = "7VwUa6DoQX9goLfjdp7fm8dodhxtlqcNIsUjkzhyNjY";
let searchinput = document.getElementById('searchinput');
let searchbtn = document.getElementById('searchbtn');
let Morebtn= document.getElementById('Morebtn');
let showdata = document.querySelector('.showdata')
let page = 1
const getData = async(searchValue,pageNo) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&P=${pageNo}age&client_id=${Access_key}`)
    let fetchdata = await fetching.json();
    console.log(fetchdata);
    if(pageNo === 1){
        showdata.innerHTML = "";
    }
    if(searchinput.value == ""){
            showdata.innerHTML = `
            <h1>Please Search...</h1>
            `;
        }else{
            document.querySelector(".loadmore").style.disply="block"
        }

    // showdata.innerHTML ="";
    fetchdata.results.forEach(function(data){
        console.log(data);

        let div = document.createElement('div');
        div.classList.add('card');
        showdata.appendChild(div);

        div.innerHTML = `
        <img src=${data.urls.small} alt="">
        <a href=${data.links.html} target="_blank">${data.alt_description}</a>
        `
    });

}

searchbtn.addEventListener('click', function() {
    let searchValue = searchinput.value ;
    getData(searchValue,1);

});

Morebtn.addEventListener('click',function(){
    let searchValue = searchinput.value;
    getData(searchValue,page++);
})