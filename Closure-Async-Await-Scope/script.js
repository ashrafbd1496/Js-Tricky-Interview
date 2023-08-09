
        //asyncronus javascript

        function timer(n){

            console.log("Start Timer");

            for(i = 0; i <= n; i++){

                setTimeout(() => {

                console.log(i);
            

                }, i * 1000);
            }
    }
    var result = timer(3);

    console.log("End Timer");
