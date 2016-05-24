<?php
	$stage_class = isset($stage_class)? $stage_class : '';
	$stage_background = isset($stage_background) && $stage_background[0] == 'true' ? $stage_background : ['false',''];
	$stage_location = isset($stage_location) ? $stage_location : '';
	$stage_title = isset($stage_title) ? $stage_title : 'Bienvenido a Wood & Design';
	$stage_description = isset($stage_description) ? $stage_description : 'Te invitamos a formar parte de la profesionalidad y la vanguardia';
?>

<section class="wd-stage <?php echo $stage_class ?>">
	<div class="wd-stage__main">
		<div class="wd-stage__content <?php echo $stage_location ?>">
			<figure class="wd-stage__content-image">
				<img src="assets/img/student_01.png" alt="Studen Home" title=" Student Home">
			</figure>
			<div class="wd-stage__content-description">
				<h3 class="wd-stage__content-description__title wd-title"><?php echo $stage_title ?></h3>
				<p class="wd-stage__content-description__txt wd-title__description"><?php echo $stage_description ?></p>
			</div>
		</div>
		<?php if($stage_background[0] == 'true'){ ?>
			<figure class="wd-stage__background">
				<img src="assets/img/<?php echo $stage_background[1] ?>.jpg" alt="Stage Home" title=" Stage Home">
			</figure>
		<?php } ?>
	</div>
</section>

<?php
	unset( $stage_class );
	unset( $stage_location );
	unset( $stage_title );
	unset( $stage_description );
	unset( $stage_background );
?>