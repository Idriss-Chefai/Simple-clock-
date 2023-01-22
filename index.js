
    let date = new Date();
    let myinterval = setInterval(affiche, 1000);
    let val =  document.getElementById("Stop").value ;

    document.getElementById("Stop").onclick = function (){

        if( val == "Stop Clock"){
            clearInterval(myinterval);
            document.getElementById("Stop").value = "Clock is stopped";
        }
    }

    function affiche() {
        date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        document.getElementById("clock").innerHTML = 
        `${day}/${month}/${year}    ${hours}:${minutes}:${seconds}`
    }