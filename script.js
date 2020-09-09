function showSpoiler(id)
{
	var boite2 =document.getElementById("JS2");
	var boite = document.getElementById("JS");
	boite2.style.display="none";
	if(boite.style.display=="none")
		boite.style.display="";
	if(id=='texte1')
	{
		boite.innerHTML="Titulaire d'un BTS <span class='rouge'>SNIR</span> (<span class='rouge'>S</span>ytème <span class='rouge'>N</span>umérique <span class='rouge'>I</span>nformatique <span class='rouge'>R</span>éseau), je suis à la recherche d'une alternance de 1 à 3 ans dans le développement informatique (Logiciel, Web ou Application) avec un rythme 2 jours école et 3 jours en entreprise. A partir de Septembre, je serais étudiant au Campus EPSI à La Defense dans le but d'obtenir un Bachelort DEVOPS (Bac +3) à condition de trouver une alternance.<br><br>Voici en pièce jointe mon CV en format PDF : <br><a href='CV RENOULT Killian.pdf' class='taille'>📝</a>";
	}

	if(id=='texte3'){
			boite.innerHTML="<span class='text2'>Formation effetcuer : </span><br><br>Bachelor DEVOPS, Campus EPSI LA DEFENSE 92060<br>Prochainement à partir de Septembre 2020<br><br>BTS SNIR, Lycée Agora PUTEAUX 92800<br>Obtenue en juillet 2020<br><br>BAC STI2D, Lycée Galilée GENNEVILLIERS 92230<br>Obtenue en 2018<br><br><br><span class='text2'>Expériences Profesionnelles : </span><br><br>Stage de 6 semaines au Ministères de l\'Economie et des Finances à Bercy <br>en tant que GRID (Gestion Ressources Infomatique Déconcentré).<br><br>CDD Centre de Tri de La Poste à GENNEVILLIERS durant 3  mois (Aout 2019 et Juillet/Aout 2020).";
	}
	if(id=='texte4'){
boite.innerHTML="<span class='text2'>Site Web sur l'univers d'un Manga : </span><br>Site réaliser dans un but pédagogique avec un thème libre de choix (dans mon cas le manga Dragon Ball) mais avec certaine contrainte.<br><br><span class='text2'>Petit Apercu du site : </span><br><br><img src='image1.jpg' width='50%' height='50%' alt='image1'/><img src='image2.jpg' width='50%' height='50%'alt='image2'/><br><br><span class='text2'> Application permettant de contrôler un robot : </span><br>Application réaliser dans un but pédagogique pour contolé un robot à distance avec des commandes manuel ou en mode gyroscope.<br><br><span class='text2'>Petite apercu de l'application : </span><br><br><img src='image4.jpg' alt='image4'/><img src='image3.jpg' alt='image3'/><br><br> <span class='text'>Site de mon CV en ligne que vous voyez actuellement</span>";
	}
	if(id=='texte5'){
boite.innerHTML="Vous pouvez trouvez ci-dessous les différents moyen de me contacter :<br><br>📱Portable : 06.16.46.61.80<br><br>📧Adresse Mail : renoult92230@gmail.com<br><br>🏡Adresse : 1 Résidence Fernand Bee, GENNEVILLIERS 92230<br><br>Profil Linkedin : <a href='https://www.linkedin.com/in/killian-renoult/'><img src='LK.png' width='3%' height='10%' alt='Linkedin'></img></a>";
	}

}

function showSpoiler2(id){
	var boite2 =document.getElementById("JS");
	var boite = document.getElementById("JS2");
	boite2.style.display="none";
	if(boite.style.display=="none")
		boite.style.display="";
	if(id=='texte2')
	{
		boite.innerHTML='<center><div id="SkillBox"><span><p class="text">Voici les différents languages informatiques que j\'ai vu durant ma pèriode scolaire.</p></span><img src="photo.jpg"alt="Photo" /><div class="SkillBar"><div id="Skill-HTML"><span class="Skill-Area ">HTML</span><span class="PercentText ">75%</span></div></div><div class="SkillBar"><div id="Skill-CSS"><span class="Skill-Area ">CSS/CSS3</span><span class="PercentText ">60%</span></div></div><!--<div class="SkillBar"><div id="Skill-jQuery"><span class="Skill-Area ">jQuery</span><span class="PercentText ">90%</span></div></div>--><div class="SkillBar"><div id="Skill-JS"><span class="Skill-Area ">Javascript</span><span class="PercentText ">30%</span></div></div><div class="SkillBar"><div id="Skill-XML"><span class="Skill-Area ">XML </span><span class="PercentText ">50%</span></div></div><div class="SkillBar"><div id="Skill-C"><span class="Skill-Area ">C</span><span class="PercentText ">80%</span></div></div><div class="SkillBar"><div id="Skill-JAVA"><span class="Skill-Area ">JAVA </span><span class="PercentText ">80%</span></div></div><div class="SkillBar"><div id="Skill-PHP"><span class="Skill-Area ">PHP </span><span class="PercentText ">50%</span></div></div><div class="SkillBar"><div id="Skill-SQL"><span class="Skill-Area ">SQL </span><span class="PercentText ">30%</span></div></div><div class="SkillBar"><div id="Skill-VBNET"><span class="Skill-Area ">ANDROID</span><span class="PercentText ">90%</span></div></div></div></center>';
	}

}