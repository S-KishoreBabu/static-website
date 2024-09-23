function doo() {
    var a = document.getElementById("aaa").value;
    var b = document.getElementById("bbb").value;
    console.log(a + "  " + b);
    const Array1 = a.split('');
    const Array2 = b.split('');
    var n = 50
    var k = 0;
    for (z = 0; z < n; z++) {
        console.log(z + 1);
        console.log(Array1);
        console.log(Array2);
        var n1 = Array1.length;
        var n2 = Array2.length;
        var i, j;
        outerLoop:
        for (i = 0; i < n1; i++) {
            for (j = 0; j < n2; j++) {
                console.log(i + "=" + Array1[i]);
                console.log(j + "=" + Array2[j]);
                var k = 1;
                if (Array1[i] == Array2[j]) {
                    Array1.splice(i, 1);
                    Array2.splice(j, 1);
                    k = 0;
                    console.log("k=" + k);
                    break outerLoop;
                }
                console.log("k=" + k)
                console.log("-------------")
            }
        }
        console.log("finally k=" + k)
        if (k == 1) {
            break;
        }

    }
    console.log("finally ! ");
    console.log(Array1);
    console.log(Array2);

    var p = Array1.length;
    var q = Array2.length;
    var s = p + q;
    console.log("number = " + s)
    var fl = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'];
    var resultIndex = 0;
    while (fl.length > 1) {
        resultIndex = (resultIndex + (s - 1)) % fl.length;
        fl.splice(resultIndex, 1);
    }
    console.log(fl[0]);
    box2.style.height = 100 + "px";
    box2.style.width = 280 + "px";
    switch (fl[0]) {
        case "Friends":
            box2.style.backgroundColor = "rgb(" + 255 + "," + 253 + "," + 132 + ")";
            break;
        case "Love":
            box2.style.backgroundColor = "rgb(" + 255 + "," + 132 + "," + 175 + ")";
            break;
        case "Affection":
            box2.style.backgroundColor = "rgb(" + 136 + "," + 132 + "," + 255 + ")";
            break;
        case "Marriage":
            box2.style.backgroundColor = "rgb(" + 255 + "," + 183 + "," + 132 + ")";
            break;
        case "Enemy":
            box2.style.backgroundColor = "rgb(" + 255 + "," + 132 + "," + 132 + ")";
            break;
        case "Sibling":
            box2.style.backgroundColor = "rgb(" + 156 + "," + 255 + "," + 132 + ")";
            break;

    }
    //box2.style.backgroundColor ="rgb(" +255 + "," +157+ "," +203+ ")"; 
    box2.style.display = "grid";
    box2.style.placeItems = "center";
    result.style.color = "#ffffff"

    document.getElementById("result").innerHTML = fl[0];
}