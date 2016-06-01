<?php
	$content = isset($content) ? $content : 'No hay contenido'
	//print_r($content);
?>
<div class="wd-card">
	<?php for ($i=0; $i < count($content) ; $i++) { ?>
		<article class="wd-card__item">
			<figure class="wd-card__item-image">
				<img src="<?php echo $content[$i]['img'] ?>" alt="">
			</figure>
			<div class="wd-card__item-description">
				<div class="wd-card__item-description__text">
					<h1><?php echo $content[$i]['title'] ?></h1>
					<p><?php echo $content[$i]['text'] ?></p>
				</div>
				<?php if ( !empty( $content[$i]['link'] ) && $content[$i]['link'] != 'false' ) { ?>
					<a href="<?php echo $content[$i]['link']?>" target="_blank"> <?php echo $content[$i]['link'] ?> </a>
				<?php }?>
				<button class="wd-card__item-description__button">+</button>
			</div>
		</article>
	<?php } ?>
</div>

<?php unset($content) ?>