<?php
	$button = isset($button) ? $button : 'No esta cargado';
?>
<div class="wd-values">
	<div class="wd-values__content">
		<h3 class="wd-values__content-title wd-title">Valores</h3>
		<section class="wd-values__content-items">
			<?php for ($i=0; $i < count($button); $i++) { ?>
				<p><?php echo $button[$i]?></p>
			<?php } ?>
		</section>
	</div>
</div>
<?php
	isset($button);
 ?>