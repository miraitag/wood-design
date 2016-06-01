<?php $title="WD | Carpinteria"; include "components/head.php"; ?>
	<div class="wd-wrapper">
		<?php  include "components/menu/index.php"; ?>
		<div class="wd-wrapper__max">
			<main class="wd-main">
				<?php
					$stage_location = 'right';
					$stage_class = 'gray';
					$stage_title = 'Wood & Design';
					include "components/stage/index.php";
							$content = array(
						array(
							'text' => 'Formar especialistas en la industria de la madera, con los conocimientos suficientes para trascender con ÉXITO a un mundo empresarial.',
							'title' => 'Misión',
							'img' => 'http://lorempixel.com/400/300'
						),
						array(
							'text' => 'Ser la primera institución educativa privada, enfocada a la especialidad en la industria de la MADERA.<br/> <br/>Convirtiéndonos en la base para un cambio positivo de la sociedad, facilitando los medios idóneos, realizando un trabajo educativo, artístico y responsable, alcanzando un estatus de primer nivel en un mundo globalizado.',
							'title' => 'Visión',
							'img' => 'http://lorempixel.com/400/300/sports'
						),
						array(
							'text' => '- Cafetería y Ferretería
										- Sala Audiovisual <br/>
										- Taller a nivel profesional <br/>
										- Taller de diseño y dibujo <br/>
										- Taller De Computación <br/>
										- Estacionamiento y vigilan',
							'title' => 'Instalaciones',
							'img' => 'http://lorempixel.com/400/300/transport'
						),
					);
					include "components/cards/index.php";
					$pleca = 'Historia';
					include "components/pleca/index.php";
					$preview = [
						'http://lorempixel.com/1280/350',
						'En la actualidad  la industria maderera va más allá de saber hacer de una especialidad. La propuesta de nuestra escuela  pretende promover una visión amplia del campo de estudio al considerar los aspectos instrumentales de las técnicas, sus procesos de cambio, gestión e innovación y su relación con la sociedad y la naturaleza; además, recurre a la participación social en el uso, creación y mejora de los productos madereros, así como de las implicaciones de éstos en el entorno...',
						'carpinteria-historia.php',
					];
					include "components/preview/index.php";
					$button = ['Compromiso','Creatividad','Responsabilidad','Ética'];
					include "components/values/index.php";
					include "components/foo/index.php";
				?>
			</main>
		</div>
	</div>
 <?php  include "components/footer.php";
