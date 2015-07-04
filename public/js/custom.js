$(document).on("ready",function(){



	$.ajax({url:"http://pokeapi.co/api/v1/sprite/1/"})
	.done(function(result){

		var urlIMG = "url(http://pokeapi.co/"+result.image+")";
		$(".Card-image").attr({"src" : "http://pokeapi.co/"+result.image});
		$(".Card-name").html(result.name);
		console.log(result.pokemon[1]);
	
	});

});