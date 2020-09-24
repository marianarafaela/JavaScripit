<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

        var cronometro ;
        function iniciar(){
            var h =0;
            var m =0;
            var s =0;

            var hp = document.getElementById("horas");
            var mp = document.getElementById("minutos");
            var sp = document.getElementById("segundos");
            cronometro = setInterval(function(){
                if(s == 60){
                    s=
                }
            },1000)
        }
        <p id = "cronomreto"> Horas: 
            <span id ="horas"> 00 </span> Minutos:
             <span id = "minutos"> 00 </span> Segundos : 
             <span id= "segudos"> 00 </span> </p>
    </script>
</body>
</html>