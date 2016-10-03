$(function(){


	  $('#fondateurs :input').on('keyup', function() {
       	// on recupere le rang du fondateur pour construre prenom-fondateur[rang] nom-fondateur[rang]
        var avantDernierCharactere = $(this).attr("name").charAt($(this).attr("name").length - 2)
       // on recupere le nom et prenom du fondateur
        var prenom = $("#fondateurs :input[name='prenom-fondateur["+avantDernierCharactere+"]']").val()
        var nom = $("#fondateurs :input[name='nom-fondateur["+avantDernierCharactere+"]']").val()
        //on verifie si nom et prenom sont deja founis
        if(nom != "" &&prenom  != ""){
        	// on affiche l'option avec le nom et prenom du fondateur
         	$("#select-fondateur-"+avantDernierCharactere).show()
       		$("#select-fondateur-"+avantDernierCharactere).html(prenom+ " "+nom)

        }else{
        		//sinon on supprime les champs du president et on enleve le fondateur il n'est plus
        		// selectionnable
        		$("input[name='prenom-president']").val("")
 				$("input[name='nom-president']").val("")
 				$("#select-fondateur").val("")
        		$("#select-fondateur-"+avantDernierCharactere).hide()
        }
      
    });
	
	$("#select-fondateur").change(function(){
		//recuperer l'option selectionnée
		var selectedOption = $("#select-fondateur option:selected")
		// construire l'id du fondateur selectionné
 		// j'ai ajouté les back slashes car JQuery a du mal avec [ ]
 		var idFondateurSelected = "#id-fondateur\\["+selectedOption.val()+"\\]"

 		// mettre le valeur de form-data à l'id selectionné
 		$("#id-president").data("from",idFondateurSelected)

 		// remplir automatiquement le fieldset"president", grâce à l'attribut "data-from"
 		// comme demandé dans le test
 		// donc on lit l'id du fondateur à partir de formdata
 		var formDataValue = $("#id-president").data("from")


 		// on recupere les champs nom et prenom 
		var prenomFondateurSelected = $(formDataValue+" :input:first").val()
 		var nomFondateurSelected = $(formDataValue+" :input:nth-child(3)").val()

 	

 		// on remplit les champs nom et premnom du president avec ceux qu'on a lus
 		$("input[name='prenom-president']").val(prenomFondateurSelected)
 		$("input[name='nom-president']").val(nomFondateurSelected)


 		

 	})

})