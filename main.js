var names= ["Divy Desai","Heta Desai","Meghal Desai","Anil Desai","Ila Desai","Dhara Desai","Dharmesh Desai","Shrungi Desai","Fiza Desai","Jehan Desai","Ashwin Desai","Hansa Desai","Archana Desai","Gourav Desai"];
var images=["IMG_20190529_142835000.jpg",
"IMG_3372.JPG",
"IMG_20190522_170433243.jpg",
"20210225_133501.jpg",
"20210508_123448.jpg",
"20210225_125514.jpg",
"20210225_125508.jpg",
"20200624_204620.jpg",
"IMG_0701.JPG",
"IMG_20190602_120145177.jpg",
"IMG_0487.JPG",
"IMG_0257.JPG",
"IMG_0720.JPG",
"IMG_20190602_115955750.jpg"];

var i=0;
function update(){
    i++;
    var number_of_members_in_array=14
    if(i>number_of_members_in_array){
        i=0;
    }
    var updatedImage=images[i];
    var updatedName= names[i];
    document.getElementById("member_image").src=updatedImage;
    document.getElementById("member_name").src=updatedName;
}