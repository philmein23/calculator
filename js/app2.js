$(function() {

    var entries = [];
    var total = 0;
    var temp = '';

    $("button").on("click", function() {
        var value = $(this).text();

        if (!isNaN(value) || value === ".") {
            temp += value;
            $("#display").val(temp.substring(0,15));
        }
        else if (value === "CE") {
            temp = '';

        }
        else if (value === "C") {
            entries = [];
            temp = '';

        }
        else if (value === "X") {
            entries.push(temp);
            entries.push("*");
            temp = '';
        }

        else if (value === "/") {
            entries.push(temp);
            entries.push("/");
            temp = '';
        }
        else if (value === "-") {
            entries.push(temp);
            entries.push("-");
            temp = '';
        }
        else if (value === "+") {
            entries.push(temp);
            entries.push("+");
            temp = "";
        }
        el
        else if (value === "=") {

            entries.push(temp);

            var num = Number(entries[0]);

            for (var i = 1; i < entries.length; i++) {
                var otherNum = Number(entries[i + 1]);
                var symbol = entries[i];


                if (symbol === "*") {num *= otherNum;}
                else if (symbol === "/") {num /= otherNum;}
                else if (symbol === "+") {num += otherNum;}
                else if (symbol === "-") {num -= otherNum;}




            }

            $("#display").val(num);
            entries = [];
            temp ='';




        }

});


})