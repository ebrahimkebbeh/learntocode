
// window.onload = ()=>{
function showimage(path){
    const dialogImage = document.querySelector(".dialog .gigantic")
    dialogImage.src = path;
}    

document.addEventListener('DOMContentLoaded', ()=>{

const tbody = document.querySelector('#list tbody')
const year = document.getElementById('year')
const image_list = document.getElementById('image_list')
const output = document.getElementById('output')
const clear = document.getElementById('clear')

image_list.innerHTML = "<option>Make a selection</option>"

images.forEach(image=>{
    let option = document.createElement('option');
    option.innerHTML = image.title;
    option.value = image.name;
    image_list.appendChild(option);
    // end images for each
});
function addTVshowImagerow(image){
    let roe = tbody.insertRow(-1)

    let cellyear = row.insertcell(0);
    cellyear.innerHTML = image.title;

    let celltitle = row.insertcell(1);
    celltitle.innerHTML = image.name;

    let cellThumb = row.insertcell(2);
    cellThumb.innerHTML = `<img src="${ fullpath }" class="thumb" onclick="showImage('${  fullpath }')">`;
}

year.addEventListener('change', ()=>{
    tbody.innerHTML = ""
    let selectedyear = year.selectedOptions[0].value
    image.filter(i.year == selectedyear ).forEach(addTVshowImagerow);
    // image.forEach((image)=>{
        // let row = tbody.insertRow(-1)
        // let cellyears = row.insertcell(0);
        // cellyears.innerHTML = image.year;

        // let celltitle = row.insertcell(1);
        // celltitle.innerHTML = image.title;
    
   });
   
    // alert(selectedyear)
image_list.addEventListener('change', e=>{
    if(image_list.selectedindex <=0){
        return;
    }
    // alert(name)
     let name = image_list.selectedOptions[0].value;
     let img = document.createElement('img')
     img.src = 'dynimages/' + name;
     output.appendChild(img)
}); // end on change image list

clear.addEventListener('click', ()=>{
    output.innerHTML = "";
    image_list.selectedindex = 0;
    //end of clear button
});

})
