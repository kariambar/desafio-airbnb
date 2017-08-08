
//js first-filter//
    $(document).ready(function(){
var slider = document.getElementById('test-slider');

noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  orientation: 'horizontal', // 'horizontal' or 'vertical'
  range: {
    'min': 0,
    'max': 100
  }
});
        

// fin js first-filter//
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });
    $('select').material_select();

    data.search_results.forEach(function(e){
        $('.elemento').append('<div class="col s2 m2 l4 xl4"><img class="responsive-img" src="'+ e.listing.thumbnail_url +'"><h6>'+ e.listing.localized_city + ' - ' + e.listing.name + '</h6><p>' + e.listing.bedrooms + '</p></div>')
        console.log(e);
    });

 });


    /*$('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
          // Callback function when value is autcompleted.
      },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });*/
