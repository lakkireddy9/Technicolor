function clicked()
{
	var user		= document.getElementById('username');
	var password	= document.getElementById('password');

	var correctuser	="test";
	var correctpassword="123";

	if(user.value	== correctuser)
	{
		if(password.value	== correctpassword)
		{
			//window.alert("sucess");
			window.location="dashboard.html";
		}
		else
		{
			window.alert("Invalid credentials-Error 401");
		}
	}
}

function submit()
{
	window.alert("SavedSucessfully");
	window.location="dashboard.html";
}

function logout()
{
	window.location="login.html";
}