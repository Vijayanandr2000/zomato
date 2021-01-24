function data(){
        var place = document.getElementById('place').value;
        console.log(place);
        var resName = document.getElementById('name').value;
        console.log(resName);
        var body = document.getElementsByClassName('body');
        
        var url = "https://developers.zomato.com/api/v2.1/search?entity_id="+resName+"&entity_type=city&q="+place+"&count=100";
        console.log(url)
        getData(url)
    
}
function getData(url){
    fetch(url,{
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "headers": {
         "user-key": "db45fba890e679c2be633014354c84aa",
         'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res => res.json())
    .then((data) =>{
        
        var res = data.restaurants;
        console.log(res);
        var container = document.getElementById('row');
        
        
        
        res.forEach(element => {
            rating = element.restaurant.user_rating;
            loc = element.restaurant.location;
            // console.log(element.restaurant.thumb)
            // console.log(rating.rating_text,rating.aggregate_rating)
            // console.log(rating.votes)
            // console.log(element.restaurant.thump)
            // console.log(element.restaurant.url)
            // console.log(loc.locality)
            // console.log(loc.address)
            // console.log(element.restaurant.cuisines)
            // console.log(element.restaurant.currency,element.restaurant.average_cost_for_two)
            
            var div = document.createElement('div');
            
            div.innerHTML = `
                <div class="card  col-sm-12 col-md-12 col-lg-12">
                        <a href="${element.restaurant.url}"><img class="card-img-top" src="${element.restaurant.thumb}" alt="Card image cap" style="text-decoration: none;"></a>
                    <div class="card-body">
                        <h1 class="card-title"><a href="${element.restaurant.url}" style="text-decoration: none;">${element.restaurant.name}</a></h1>
                        <h2 class="card-title">${loc.locality}</h2>
                        <h3 class="card-title">${loc.address}</h3>
                        <h2 class="card-title">Cuisines : ${element.restaurant.cuisines}</h2>
                        <h2 class="card-title">Cost for Two : <span style="font-weight: lighter;">${element.restaurant.currency} ${element.restaurant.average_cost_for_two}</span> </h2>
                        <h3 class="card-title">Ratings : ${rating.aggregate_rating}</h3>

                        
                    </div>
                </div>
            
            
            
            
            
            
            
            `
            container.append(div);
            
        });
    })
    .catch(err => console.log(err))
}
// getData();