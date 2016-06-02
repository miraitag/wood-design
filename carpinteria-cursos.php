<?php $title="WD | Carpinteria Cursos"; include "components/head.php"; ?>
	<div class="wd-wrapper">
		<?php  include "components/menu/index.php"; ?>
		<div class="wd-wrapper__max">
			<main class="wd-main">
				<?php
					$stage_location = 'right';
					$stage_class = 'yellow';
					$stage_title = 'Cursos';
					$stage_image = 'in/carpinteria_cursos';
					$stage_description = 'Descubre lo que podemos hacer por ti y tu futuro';
					include "components/stage/index.php";
							$content = array(
						array(
							'text' => 'Contiene todos las materias dentro del plan de estudios y acceso a todas las instalaciones. <br/>
										Dura 1 año y se divide en 4 trimestres y está avalado por la SEP, saldrá con reconocimiento y diploma de especialidad <br/>
										Horario: Lunes a Viernes de 8:00am - 3:00pm <br/>
										Costo: $1,800.00 MXN (Mensuales)',
							'title' => 'Semanal',
							'img' => 'assets/img/cards/carpinteria_cursos_semanal.jpg'
						),
						array(
							'text' => 'Es un curso de únicamente enseñanza técnica de carpintería, tendrá acceso a los talleres, salas de uso básico y acceso a todas las herramientas.
										Paquete de 3 sábados con clases de carpintería y una de dibujo. <br/>
										Costo de Paquete: $1000.00 MXN (Mensual) <br/>
										Horario: Sábados de 8:00am a 3:00pm',
							'title' => 'Sabatino',
							'img' => 'assets/img/cards/carpinteria_cursos_sabatino.jpg'
						),
						array(
							'text' => '- Administración <br/>
										- Especialidad en Carpintería <br/>
										- Arte y Dibujo <br/>
										- Fichas Tecnicas y de Maderas <br/>
										- Computación (renders de proyectos) <br/>
										- Ingles Basico Interpretrativo en la Industría de la Madera',
							'title' => 'Materias',
							'img' => 'assets/img/cards/carpinteria_cursos_materias.jpg'
						),
						array(
							'text' => 'Los requisitos para inscripción son:<br/>
										-En caso de ser MENORES DE EDAD- <br/>
										*15 años cumplidos <br/>
										*Estudios básicos a nivel secundaria <br/>
										*Ata de nacimiento <br/>
										*Comprobante de domicilio <br/>
										*Certificado médico <br/>
										*Carta responsiva del padre o tutor <br/>
										*Identificación oficial del padre o tutor <br/>
										*Acompañados por padre o tutor <br/><br/>

										-En caso de ser MAYORES DE EDAD- <br/>
										*18 años cumplidos <br/>
										*Estudios básicos a nivel secundaria <br/>
										*Acta de nacimiento <br/>
										*Comprobante de domicilio <br/>
										*Identificación oficial (IFE ó INE) <br/>
										*CURP <br/>
										*Certificado médico',
							'title' => 'Inscripción',
							'img' => 'assets/img/cards/carpinteria_cursos_inscripcion.jpg'
						)
					);
					include "components/cards/index.php";
					include "components/foo/index.php";
				?>
			</main>
		</div>
	</div>
 <?php  include "components/footer.php";
