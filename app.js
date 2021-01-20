var a = document.getElementById('place').addEventListener('input',(e)=>{
    var place = e.target.value;
    console.log(place);
    getData(place)

});

function getData(placeName){
    //var placeName = place;
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://developers.zomato.com/api/v2.1/cities?city="+placeName+"&count=100",
    "method": "GET",
    "headers": {
        "user-key": "db45fba890e679c2be633014354c84aa",
        }
    }
    
   }
    
   