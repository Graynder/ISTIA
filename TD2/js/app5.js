var map;

$(document).ready(function() {

    //Initialisation de Google Maps
     var mapOptions = {
       zoom: 18,
       center: new google.maps.LatLng(52.629729, -1.131592)
     };

     map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


     google.maps.event.addListener(map, 'click', function(e) {
       getCoordinate(e.latLng,map);

      });



    function getCoordinate(position,map) {

     map.panTo(position);

     getCrimes(position);
    };

    function addCrime(crime) {

        positionMark = {lat:parseFloat(crime.location.latitude),
                        lng:parseFloat(crime.location.longitude)};

        var marker = new google.maps.Marker({
            position: positionMark,
            map: map,
            title: crime.category
        });

        marker.addListener('click', function() {
            $("#lat").val(marker.position.H);
            $('#lon').val(marker.position.L);
            $("#detail").val( marker.title);
        });
    };

    function getCrimes(position){

        $.ajax({
            url: "https://data.police.uk/api/crimes-street/all-crime?lat=" + position.H + "&lng="+ position.L +"&date=2013-01",
            dataType: 'json',
            success : function(crimes){
                $.each(crimes,function () {
                    addCrime(this);
                });
            }
        });
    };

});
