<?php
	$stage_carousel = isset($stage_carousel) && $stage_carousel === 'true' ? 'carousel' : ''; 
	$stage_background = isset($stage_background) ? $stage_background : 'stage_home';
	$stage_type = isset($stage_type) && $stage_type !== '' ? $stage_type : 'stage';
	$stage_location = isset($stage_location) ? $stage_location : '';
	$stage_title = isset($stage_title) ? $stage_title : 'Bienvenido a Wood & Design';
	$stage_description = isset($stage_description) ? $stage_description : 'Te invitamos a formar parte de la profesionalidad y la vanguardia';
?>

<section class="wd-stage <?php echo $stage_carousel ?>">
	<div class="wd-stage__main">
		<?php if( $stage_type === 'stage'){ ?>
			<div class="wd-stage__content <?php echo $stage_location ?>">
				<figure class="wd-stage__content-image">
					<img src="assets/img/student_01.png" alt="Studen Home" title=" Student Home">
				</figure>
				<div class="wd-stage__content-description">
					<h3 class="wd-stage__content-description__title wd-title"><?php echo $stage_title ?></h3>
					<p class="wd-stage__content-description__txt wd-title__description"><?php echo $stage_description ?></p>
				</div>
			</div>
		<?php } else if( $stage_type === 'values') { ?>
			<div class="wd-values">
				<div class="wd-values__content">
					<h3 class="wd-values__content-title wd-title">Valores</h3>
					<div class="wd-values__content-items">
						<main>
							<?php for ($i=0; $i < 5; $i++) { ?>
								<button><p>Honestidad</p></button>
							<?php } ?>
						</main>
					</div>
				</div>
			</div>
		<?php } ?>
		<figure class="wd-stage__background">
			<img src="assets/img/<?php echo $stage_background?>.jpg" alt="Stage Home" title=" Stage Home">
		</figure>
	</div>
</section>

<?php 
	unset( $stage_location );
	unset( $stage_title );
	unset( $stage_description );
	unset( $stage_type);
?>