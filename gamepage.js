
<!DOCTYPE html>
<html>
<head>
   <title>Guess the Number</title>

<link href="https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="style.css">
<script src="gamepage.js"></script>
</head>
<body>

<center>


   <div class="col-lg-4 col-md-6 col-sm-6 col-xs-11 login_div">

       <h1>Guess The Number
           <sup>
               <img id="logo" src="q.gif">
               </sup>
       </h1>

       <p>We have selected a random number between 1 - 10. 
       See if you can guess it.</p>

       <div>
           <label for="guessField">Enter a guess: </label>
           <br>
           <input type = "text" id = "guessField" class = "guessField">
           </div>
       </br>
           <Button type = "submit" onclick="submit()"> Submit 
                  </Button>
                  <Button onclick="playAgain()"> Play Again
               </Button>
       </div>
   </div>
</center>

</body>
</html> 