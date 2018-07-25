
function login(){
	var email = $("#email").val();
	var password = $("#password").val();

		//console.log(email, password);


		loginApi.login(email,password)
		.then(function(responsen){
			console.log("Successfully: ", token);
			var token = responsen.token;
			window.localStorage.setItem("token", token);
			window.location = "index.html";
		})

		.catch(function(error){
			alert("Error: Intentelo nuevamente");
			window.location = "login.html";
			console.log("Error", error);
		});

	}

	function register(){
		var name = $("#nombre").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var password2 = $("#password2").val();


		if (password != password2) {
			alert("Las Contraseñas son diferentes");
			return;
		}

		loginApi.register(email,password,name)
		.then(function(responsen){
			console.log("Successfully: ", responsen);
			login();

		})

		.catch(function(error){
			alert("Error: Intentelo nuevamente");
			// window.location = "login.html";
			console.log("Error", error);
		});
	}

//post
function post(){
		var body = $("#comentario").val();
		var id = window.localStorage.getItem("idPost");
		


		// if (name != null) {
		// 	alert("Campo vacio");
		// 	return;
		// }

		loginApi.post(body,id)
		.then(function(responsen){
			console.log("Successfully: ", responsen);
			// login();

		})

		.catch(function(error){
			alert("Error: Intentelo nuevamente");
			// window.location = "index.html";
			console.log("Error", error);
		});
	}

//termina post

	window.onload = function(){
		//TODO: validar si Existe un token enviarlo al index

		$("#btnLogin").click(function(){
			login();
		})


		$("#btnRegister").click(function(){
			register();
		})

		$("#btnPost").click(function(){
			post();
		})
	}

	