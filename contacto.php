<?php $title="WD | Contacto";  include "components/head.php"; ?>
	<div class="wd-wrapper">
		<?php  include "components/menu/index.php"; ?>
		<div class="wd-wrapper__max">
			<main class="wd-main">
				<?php
					$stage_location = 'right';
					$stage_class = 'black';
					$stage_title = 'Wood & Design';
					include "components/stage/index.php";
					$pleca = 'Búscanos';
					include "components/pleca/index.php";
					include "components/map/index.php";
					include "components/foo/index.php";
				?>
			</main>
		</div>
	</div>
 <?php  include "components/footer.php";
