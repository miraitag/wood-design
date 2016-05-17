<?php include "components/head.php"; ?>
	<div class="wd-wrapper">
		<?php  include "components/menu.php"; ?>
		<div class="wd-wrapper__max">
			<main class="wd-main">
				<?php  
					$stage_location = 'right';
					include "components/stage.php"; 
					$stage_title = 'Misión';
					include "components/stage.php"; 
					$stage_location = 'center';
					$stage_title = 'Visión';
					$stage_description = 'En este campo ira las descripción de la visión general';
					include "components/stage.php"; 
					$stage_type = 'values';
					$stage_carousel = 'true'; 
					include "components/stage.php"; 
				?>
			</main>
		</div>
	</div>
 <?php  include "components/footer.php";
