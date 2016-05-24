<?php 
	$review = isset($review) ? $review : 'false'; 
	$preview = isset($preview) ? $preview : ['No esta cargado','No esta cargado','No esta cargado', 'No esta cargado', 'false'];
 ?>
<section class="wd-preview">
	<div class="wd-preview__content">
		<?php if ( $review != 'true') { ?>
		<img class="wd-preview__content-image" src="<?php echo $preview[0] ?>">
		<p class="wd-preview__content-text wd-title__description"><?php echo $preview[1] ?></p>
		<a href="<?php echo $preview[2] ?>" class="wd-preview__content-link" target="_blank">ver más</a>
		<?php } else {?>
			<p class="wd-preview__content-text wd-title__description"><?php echo $preview ?></p>
		<?php }?>
	</div>
</section>

<?php
	unset($preview); 
	unset($review); 
?>