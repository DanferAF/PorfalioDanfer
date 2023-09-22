function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("androidstudio");
        habilidades[6].classList.add("visual");
        habilidades[7].classList.add("netbeans");
        habilidades[8].classList.add("unity");
        habilidades[9].classList.add("arduino");
        habilidades[10].classList.add("sql");
        habilidades[11].classList.add("phpma");
        habilidades[12].classList.add("misql");
        habilidades[13].classList.add("oracle");
        habilidades[14].classList.add("powerbi");
        habilidades[15].classList.add("tableau");
        habilidades[16].classList.add("powerquery");
        habilidades[17].classList.add("powerpivot");
        habilidades[18].classList.add("project");
        habilidades[19].classList.add("excel");
        habilidades[20].classList.add("word");
        habilidades[21].classList.add("powerpoint");
        habilidades[22].classList.add("photoshop");
        habilidades[23].classList.add("ilustrator");
        habilidades[24].classList.add("blender");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 