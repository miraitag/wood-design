<?php include "components/head.php"; ?>
	<div class="wd-wrapper">
		<?php  include "components/menu/index.php"; ?>
		<div class="wd-wrapper__max">
			<main class="wd-main">
				<?php
					include "components/slider/index.php";
					$content = array(
						array(
							'text' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
							'title' => 'Misión',
							'img' => 'http://lorempixel.com/400/300'
						),
						array(
							'text' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
							'title' => 'Visión',
							'img' => 'http://lorempixel.com/400/300/sports'
						),
						array(
							'text' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
							'title' => 'Bienvenida',
							'img' => 'http://lorempixel.com/400/300/transport'
						),
					);
					include "components/cards/index.php";
					/*$stage_location = 'right';
					$stage_class = 'yellow';
					$stage_title = 'Wood & Design';
					include "components/stage/index.php";
					$stage_class = 'black';
					$stage_title = 'Misión';
					include "components/stage/index.php";
					$stage_location = 'center';
					$stage_class = 'gray';
					$stage_title = 'Visión';
					$stage_description = 'En este campo ira las descripción de la visión general';
					include "components/stage/index.php";*/
					$button = ['Compromiso','Creatividad','Responsabilidad','Ética'];
					include "components/values/index.php";
					include "components/foo/index.php";
				?>
			</main>
		</div>
	</div>
 <?php  include "components/footer.php";
