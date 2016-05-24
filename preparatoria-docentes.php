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
					$pleca = 'Docentes';
					include "components/pleca/index.php";
					$preview ='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
					$review = 'true';
					include "components/preview/index.php";
					include "components/card-thumbs/index.php";
					include "components/foo/index.php";
				?>
			</main>
		</div>
	</div>
 <?php  include "components/footer.php";
