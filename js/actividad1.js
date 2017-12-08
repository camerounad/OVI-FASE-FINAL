var ans = new Array ;var done = new Array; var score = 0;

ans[1] = "c";
ans[2] = "d";
ans[3] = "d";
ans[4] = "a";
ans[5] = "b";

function Engine(question, answer) { if (answer != ans[question]) { if (!done[question]) { done[question] = -1;
    alert("Incorrecto\n\nPuntaje actual: " + score);
} else {
    alert("Ya realizaste esa pregunta");
} } else {
    if (!done[question]) { done[question] = -1; score++;
        alert("¡Respuesta Correcta!\n\nPuntaje actual: " + score);
    } else { alert("Ya realizaste esa pregunta"); } } } function NextLevel () {
    if (score >= 3) { alert("Felicitaciones, aprobaste la actividad"); self.location="Premio.html"
    } else {
        alert("Vuelve a estudiar los contenidos del curso.\n Intentalo de nuevo...") } }