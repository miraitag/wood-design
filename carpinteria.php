<?php include "components/head.php"; ?>
	<div class="wd-wrapper">
		<?php  include "components/menu/index.php"; ?>
		<div class="wd-wrapper__max">
			<main class="wd-main">
				<?php
					$stage_location = 'right';
					$stage_class = 'gray';
					$stage_title = 'Wood & Design';
					include "components/stage/index.php";
					$pleca = 'Historia';
					include "components/pleca/index.php";
					$preview = [
						'http://lorempixel.com/1280/350',
						'En la actualidad  la industria maderera va más allá de saber hacer de una especialidad. La propuesta de nuestra escuela  pretende promover una visión amplia del campo de estudio al considerar los aspectos instrumentales de las técnicas, sus procesos de cambio, gestión e innovación y su relación con la sociedad y la naturaleza; además, recurre a la participación social en el uso, creación y mejora de los productos madereros, así como de las implicaciones de éstos en el entorno. ',
						'carpinteria-historia.php',
					];
					include "components/preview/index.php";
					$pleca = 'Docentes';
					include "components/pleca/index.php";
					include "components/carousel-thumbs/index.php";
					include "components/foo/index.php";
				?>
			</main>
		</div>
	</div>
 <?php  include "components/footer.php";
