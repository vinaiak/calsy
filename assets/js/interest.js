function interest() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;
    var itype = document.getElementById("itype").value;
    var crate = document.getElementById("crate").value;
    var time = document.getElementById("time").value;
    var irate = rate / crate;
    var inttamt = document.getElementById("inttamt").value;
    var decimal = 2;
    if (itype == "c") {
        document.getElementById("inttamt").value = Math.round((document.getElementById("principal").value * Math.pow(1 + irate / 100, (time / 12) * crate) * 1 - principal * 1) * 100) / 100;
    }
    if (itype == "s") {
        document.getElementById("inttamt").value = Math.round(((document.getElementById("principal").value * rate * time) / 12 / 100) * 100) / 100;
    }
}
